from django.contrib import admin
from .models import (Product,
                     ProductType,
                     ProductAttributes,
                     ProductSpecification,
                     ProductSpecificationValue,
                     ProductImage
                     )


class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification

class ProductAttributeInline(admin.TabularInline):
    model=  ProductAttributes

@admin.register(ProductType)
class ProductTypeAdmin(admin.ModelAdmin):
    inlines = [
        # ProductAttributeInline
        ProductSpecificationInline
    ]


class ProductImageInline(admin.TabularInline):
    model = ProductImage


class ProductSpecificationValueInline(admin.TabularInline):
    model = ProductSpecificationValue


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductSpecificationValueInline,
        ProductImageInline,
    ]
