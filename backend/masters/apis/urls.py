from django.conf.urls import url
from django.urls import path
from masters.apis.views import (
    CategoryItemView,
    CategoryListItemView,
)

# category_details = CategoryViewSet.as_view({'get': 'list'})
# category_detail = CategoryViewSet.as_view({'get': 'retrieve'})

urlpatterns = [
    # path('category/', CategoryList.as_view({'get': 'list'}), name='category'),
    path('category/', CategoryListItemView.as_view(), name='category'),
    path('category/<slug>', CategoryItemView.as_view(), name='category_item'),
]
