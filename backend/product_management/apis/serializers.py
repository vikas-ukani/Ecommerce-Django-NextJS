from rest_framework import serializers
from product_management.models import (
    Product,
    ProductImage,
    ProductType,
    ProductAttributes
)
from masters.models import (Attribute, AttributeValue, Category,)


class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = '__all__'


class AttributeValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttributeValue
        fields = '__all__'


class ProductAttributeSerializer(serializers.ModelSerializer):
    product_attrubute = AttributeSerializer(read_only=True, many=True)
    product_attrubute_variant = AttributeValueSerializer(
        many=True, read_only=True)

    class Meta:
        model = ProductAttributes
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = '__all__'



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'slug', ]


class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)
    product_type = ProductTypeSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
        # depth = 5


# OLD
# class ProductSerializer(serializers.ModelSerializer):
#     attributes = ProductAttributeSerializer(read_only=True, many=True)

#     class Meta:
#         model = Product
#         fields = '__all__'
#         depth = 5
