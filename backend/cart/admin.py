from django.contrib import admin
from cart.models import (CartItem, Cart)


class CartItemInline(admin.TabularInline):
    model = CartItem


class CartAdmin(admin.ModelAdmin):
    inlines = [
        CartItemInline
    ]

    class Meta:
        model = Cart


admin.site.register(Cart, CartAdmin)
