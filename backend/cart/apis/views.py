from typing import cast
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from cart.apis.serializers import CartItemSerializer, CartSerializer
from cart.models import Cart
from cart.mixins import CartTokenMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class CartListCreateView(ListCreateAPIView):
    queryset = Cart.objects.all()
    # authentication_classes = [TokenAuthentication]
    serializer_class = CartSerializer
    # permission_classes = [IsAuthenticated]



class CartAPIView(CartTokenMixin, APIView):

    token_param = "token"
    cart = None
    # authentication_classes = [TokenAuthentication ,]

    def get_cart(self):
        (data, cart_data, response_status) = self.get_cart_from_token()
        if cart_data is None or not cart_data.is_active:
            ''' If True then create a fresh cart entry '''
            cart = Cart()
            # cart.tax_percentage = 0.025 # Use it for default tax percentage
            if self.request.user.is_authenticated:
                cart.user = self.request.user
            cart.save()
            response_data = {
                'cart_id': str(cart.id)
            }
            self.create_token(response_data)
            cart_data = cart
        return cart_data

    def post(self, request, format=None):
        data = request.data
        serializer = CartSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            print(True)
        else:
            print(False)

        return Response(dict())
        # PAss Validations

        cart = self.get_cart()
        self.cart = cart

        # Update cart here, Use Update Mixin
        items = CartItemSerializer(cart.cartitem_set.all(), many=True)
        data = {
            "token": self.token,
            "cart": cart.id,
            "total": cart.total,
            "subtotal": cart.sub_total,
            "tax_total": cart.tax_total,
            "count": cart.items.count(),
            "items": items.data,
        }
        return Response(data)
