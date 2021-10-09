from django.conf.urls import url
from django.urls import path
from masters.apis.views import (
    # CategoryDetail,
    CategoryList,  # , CategoryViewSet
)

# category_details = CategoryViewSet.as_view({'get': 'list'})
# category_detail = CategoryViewSet.as_view({'get': 'retrieve'})

urlpatterns = [
    path('category/', CategoryList.as_view({'get': 'list'}), name='category'),
    # path('category/', CategoryList.as_view({'get': 'list'})),
    # path('category/', CategoryList.as_view()), # Working
    # path('category/<str:name>/', CategoryDetail.as_view()),  # Working
    # url(r'category/$', CategoryList.as_view(), name='category'),
    # path('category/',
    #      CategoryViewSet.as_view({'get': 'list'}), name='category-list'),
    # path('category/<int:id>/',
    #      CategoryViewSet.as_view({'get': 'retrieve'}), name='category-detail'),
]
