from rest_framework import serializers
from product_management.models import (Product, ProductAttributes)
from masters.models import (Attribute, AttributeValue)


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


class ProductSerializer(serializers.ModelSerializer):
    attributes = ProductAttributeSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = '__all__'
        depth = 5
