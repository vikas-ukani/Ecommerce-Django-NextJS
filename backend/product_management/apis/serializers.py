from rest_framework import serializers
from product_management.apis.mixins import TokenMixin
from product_management.models import (
    Cart, CartItem, Product, ProductAttributes)
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
    product_attrubute_variant = AttributeValueSerializer(many=True, read_only=True)

    class Meta:
        model = ProductAttributes
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    attributes = ProductAttributeSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = '__all__'
        depth = 5


class CartSerializer(TokenMixin, serializers.ModelSerializer):
    product = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = '__all__'

    @staticmethod
    def get_product(obj):
        return obj.product.name

    def validate(self, data):
        cart_token = data.get("cart_token")
        cart_token_data = self.parse_token(cart_token)
        cart_id = cart_token_data.get("cart_id")
        try:
            cart_obj = Cart.objects.get(id=int(cart_id))
            data["cart_id"] = cart_obj.id
        except:
            raise serializers.ValidationError("This is not a valid cart")
        print('cart_token', cart_token)


class CartItemSerializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField()
    item_name = serializers.SerializerMethodField()
    product = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = ('item', 'item_name', 'product',
                  'price', 'quantity', 'item_total')
