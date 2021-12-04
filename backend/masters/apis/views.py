from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404
from django.core import serializers
from django.views import generic
from rest_framework import generics
from rest_framework.decorators import action
from masters.apis.utils import get_all_child_category_ids
from masters.models import Category
from masters.apis.serializers import CategorySerializer
from rest_framework.status import HTTP_200_OK
from rest_framework.viewsets import ReadOnlyModelViewSet
from product_management.apis.serializers import ProductSerializer
from django.forms.models import model_to_dict
from product_management.models import Product


# class CategoryList(ReadOnlyModelViewSet):
#     # class CategoryList(ListAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     lookup_field = 'name'

#     def get_queryset(self):
#         queryset = Category.objects.order_by('-parent').all()

#         parent = self.request.query_params.get('parent', None)
#         if parent is None:
#             queryset = queryset.filter(parent=None)
#         elif parent == 'all':
#             queryset = queryset.all()
#         elif parent:
#             queryset = queryset.filter(parent=parent)

#         name = self.request.query_params.get('name', None)
#         if name is not None:
#             queryset = queryset.filter(name=name)
#         return queryset
 # Working

class CategoryListItemView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(level=1)
 
class CategoryItemView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(category__slug=self.kwargs['slug'])
