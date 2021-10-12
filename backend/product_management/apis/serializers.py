from django.db import models
from django.db.models import fields
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.utils import model_meta
from masters.apis.serializers import CategorySerializer
from product_management.apis.mixins import TokenMixin
from product_management.models import Cart, CartItem, Product


class ProductSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(many=False)

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
