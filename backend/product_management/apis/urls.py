from django.urls import path
from product_management.apis.views import CartAPIView, ProductsListView

urlpatterns = [
    path('products/',
         ProductsListView.as_view({'get': 'list'}), name='category-list'),
    # path('cart/', CartView.as_view(), name='cart'),
    path('cart/', CartAPIView.as_view(), name='cart_api'),
]
