from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # Authentication APIs
    path('auth/', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),

    # API ROUTES
    # path('', include('task_management_app.urls')),
    path('api/', include('masters.apis.urls')),
    path('api/', include('product_management.apis.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
