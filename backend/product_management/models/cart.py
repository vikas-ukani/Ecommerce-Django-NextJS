from django.db import models
from django.contrib.auth import get_user_model
from .product import Product
from django.conf import settings


User = get_user_model()

class Cart(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             null=True, blank=True, on_delete=models.CASCADE)
    # created_by = models.ForeignKey(User, null=True, blank=True, on_delete=CASCADE)
    items = models.ManyToManyField(Product, through='CartItem')
    total = models.DecimalField(max_digits=50, decimal_places=2, default=0.00)
    sub_total = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    tax_percentage = models.DecimalField(
        max_digits=10, decimal_places=5, default=0.085)
    tax_total = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        if self.user:
            return f"{self.id} {self.user}"
        return str(self.id)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    item_total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.cart.id
