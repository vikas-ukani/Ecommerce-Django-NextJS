from rest_framework import serializers
from masters.apis.serializers import CategorySerializer
from product_management.models import Product


class ProductSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(many=False)

    class Meta:
        model = Product
        fields = '__all__'
        depth = 5

    # @staticmethod
    # def get_category_detail(obj, ):
    #     return CategorySerializer(obj.id, many=True, read_only=True).data
