from django.db import models
from django.contrib.auth import get_user_model
from product_management.models import Product
from django.conf import settings


User = get_user_model()


class Cart(models.Model):
    # settings.AUTH_USER_MODEL
    user = models.OneToOneField(
        User, related_name="cart", null=True, blank=True, on_delete=models.CASCADE)
    number_of_items = models.PositiveIntegerField(
        default=0, null=True, blank=True)
    total = models.DecimalField(default=0.00, max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"User: {self.user.first_name}"


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, related_name='product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    item_total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.cart.id)
