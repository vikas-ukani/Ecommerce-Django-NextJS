from rest_framework.decorators import action
from masters.models import Category
from masters.apis.serializers import CategorySerializer
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.viewsets import ReadOnlyModelViewSet


class CategoryList(ReadOnlyModelViewSet):
    # class CategoryList(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'name'

    def get_queryset(self):
        queryset = Category.objects.all()

        parent = self.request.query_params.get('parent', None)
        if parent is None:
            queryset = queryset.filter(parent=None)
        # elif parent == 'all':
        #     queryset = queryset.all()
        elif parent:
            queryset = queryset.filter(parent=parent)

        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name=name)

        return queryset

    # def list(self, request):
    #     categories = Category.objects.all()
    #     serializer = self.get_serializer(categories)
    #     return Response(serializer.data)

    # def retrieve(self, request, name=None):
    #     print('name')
    #     print(name)
    #     categories = Category.objects.all()
    #     serializer = self.get_serializer(categories)
    #     return Response(serializer.data)

 # Working
# class CategoryDetail(RetrieveAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     lookup_field = 'name'
