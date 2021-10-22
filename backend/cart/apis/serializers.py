from django.db.models import fields
from rest_framework import serializers
from cart.models import (Cart, CartItem)
from cart.mixins import TokenMixin



class CartItemSerializer(serializers.ModelSerializer):
    # item = serializers.SerializerMethodField()
    # item_name = serializers.SerializerMethodField()
    # items = serializers.SerializerMethodField()
    # price = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = '__all__'
        # fields = ('item', 'item_name', 'items',
        #           'price', 'quantity', 'item_total')


class CartSerializer(TokenMixin, serializers.ModelSerializer):
    # products = CartItemSerializer
    items = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = '__all__'

    # @staticmethod
    # def get_items(obj):
    #     return obj.items.name

    # def validate(self, data):
    #     cart_token = data.get("cart_token")
    #     cart_token_data = self.parse_token(cart_token)
    #     cart_id = cart_token_data.get("cart_id")
    #     try:
    #         cart_obj = Cart.objects.get(id=int(cart_id))
    #         data["cart_id"] = cart_obj.id
    #     except:
    #         raise serializers.ValidationError("This is not a valid cart")
    #     print('cart_token', cart_token)

