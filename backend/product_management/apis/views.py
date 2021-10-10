from rest_framework.viewsets import ReadOnlyModelViewSet
from product_management.apis.serializers import ProductSerializer
from product_management.models import Product


class ProductsListView(ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        return queryset
