from django.contrib import admin

from .models import (
    Cart, CartItem, Product, ProductAttributes)


class ProductAttributesInline(admin.TabularInline):
    model = ProductAttributes


class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductAttributesInline
    ]

    class Meta:
        model = Product


admin.site.register(Product, ProductAdmin)


class CartItemInline(admin.TabularInline):
    model = CartItem


class CartAdmin(admin.ModelAdmin):
    inlines = [
        CartItemInline
    ]

    class Meta:
        model = Cart


admin.site.register(Cart, CartAdmin)
