from django.urls import path
from product_management.apis.views import ProductsListView

urlpatterns = [
    path('products/',
         ProductsListView.as_view({'get': 'list'}), name='products-list'),
    path('products/<str:slug>',
         ProductsListView.as_view({'get': 'retrieve'}), name='products_detail'),
]
