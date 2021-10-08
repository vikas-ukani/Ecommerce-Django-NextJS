from django.db import models
from masters.models import Category
# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50, default=None)
    slug = models.SlugField(default=None)
    price = models.FloatField(default=0)
    description = models.TextField(default=None)
    discount_percentage = models.FloatField(default=0, max_length=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    total_stock = models.IntegerField(default=10)
    image = models.ImageField(upload_to='product-images', default=None)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("product_detail", kwargs={"pk": self.pk})
