from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404
from django.core import serializers
from rest_framework.decorators import action
from masters.apis.utils import get_all_child_category_ids
from masters.models import Category
from masters.apis.serializers import CategorySerializer
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.viewsets import ReadOnlyModelViewSet
from product_management.apis.serializers import ProductSerializer
from django.forms.models import model_to_dict
from product_management.models import Product


class CategoryList(ReadOnlyModelViewSet):
    # class CategoryList(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'name'

    def get_queryset(self):
        queryset = Category.objects.order_by('-parent').all()

        parent = self.request.query_params.get('parent', None)
        if parent is None:
            queryset = queryset.filter(parent=None)
        elif parent == 'all':
            queryset = queryset.all()
        elif parent:
            queryset = queryset.filter(parent=parent)

        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name=name)

        return queryset

 # Working


class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'
    action = 'retrieve'

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()  # here the object is retrieved
        serializer = self.get_serializer(obj)
        category_id = serializer.data['id']
        ids = get_all_child_category_ids(serializer.data['sub_categories'])
        if ids:
            try:
                import simplejson as json
            except ImportError:
                import json

            ids.append(category_id)
            data = serializers.serialize(
                "json", Product.objects.filter(category__id__in=ids))
            objects = []
            for item in data:
                obj = item['fields']
                objects.append(obj)
            # data = model_to_dict(data)
            # for item in data:
            #     item['fields'] = model_to_dict(item['fields'])
            return HttpResponse(json.dumps(objects), content_type="application/json")
        else:
            return Response(serializer.data)

        # context = super(CategoryDetailView, self).get(*args, **kwargs)
        # obj = self.get_object()
        # product_set = obj.product_set.all()
        # default_products = obj.default_category.all()
        # products = (product_set | default_products).distinct()
        # context["products"] = products
        # return context
