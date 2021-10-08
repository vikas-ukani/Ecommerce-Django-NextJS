from django.db import models
from masters.models import Category
# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50, default=None)
    slug = models.SlugField()
    price = models.FloatField(default=0)
    description = models.TextField()
    discount_percentage = models.FloatField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    total_stock = models.IntegerField(default=10)
    image = models.ImageField(upload_to='images')
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("product_detail", kwargs={"pk": self.pk})
