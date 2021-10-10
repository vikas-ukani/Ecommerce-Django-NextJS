from django.urls import path
from product_management.apis.views import ProductsListView

urlpatterns = [
    path('products/',
         ProductsListView.as_view({'get': 'list'}), name='category-list')
]
