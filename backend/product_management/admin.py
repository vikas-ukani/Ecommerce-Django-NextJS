from django.contrib import admin

from product_management.models import Cart, CartItem, Product

# Register your models here.
admin.site.register(Product)


class CartItemInline(admin.TabularInline):
    model = CartItem


class CartAdmin(admin.ModelAdmin):
    inlines = [
        CartItemInline
    ]

    class Meta:
        model = Cart


admin.site.register(Cart, CartAdmin)
