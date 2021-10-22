from django.urls import path
from cart.apis.views import (CartAPIView, CartListCreateView)

urlpatterns = [
    # {'get': "get_cart", "post": "post"}
    path('carts/', CartListCreateView.as_view(), name='cart_api'),
    # path('carts/', CartAPIView.as_view(), name='cart_api'),
]
