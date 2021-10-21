from django.db import models
from django.db.models.deletion import CASCADE
from masters.models import Category
from django.utils.text import slugify
from django.conf import settings
from django.contrib.auth import get_user_model

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50, default=None)
    slug = models.SlugField(default=None, null=True, blank=True)
    price = models.FloatField(default=0)
    short_description = models.TextField(null=True, blank=True)
    description = models.TextField(default=None)
    discount_percentage = models.FloatField(default=0, max_length=2)
    category = models.ForeignKey(
        Category, related_name='category', on_delete=models.CASCADE, default=1)
    total_stock = models.IntegerField(default=10)
    image = models.ImageField(upload_to='product-images', default=None)
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return f'/{self.slug}/'

    # def get_absolute_url(self):
    #     return reverse("product_detail", kwargs={"pk": self.pk})


User = get_user_model()


class Cart(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             null=True, blank=True, on_delete=CASCADE)
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
