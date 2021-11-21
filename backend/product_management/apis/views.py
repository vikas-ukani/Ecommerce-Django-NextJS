from typing import cast
from rest_framework import generics
from rest_framework.viewsets import ReadOnlyModelViewSet
from product_management.apis.serializers import ProductSerializer
from product_management.models import Product
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# class ProductsListView(generics.ListAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
    


# # OLD
class ProductsListView(ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes=[IsAuthenticated]
    lookup_field = 'slug'

    def get_queryset(self):
        queryset = Product.objects.all()
        return queryset

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()  # here the object is retrieved
        serializer = self.get_serializer(obj)
        return Response(serializer.data)
