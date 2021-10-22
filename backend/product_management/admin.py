from django.contrib import admin
from .models import (Product, ProductAttributes)


class ProductAttributesInline(admin.TabularInline):
    model = ProductAttributes


class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductAttributesInline
    ]

    class Meta:
        model = Product


admin.site.register(Product, ProductAdmin)
