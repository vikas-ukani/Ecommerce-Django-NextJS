from django.db import models
from django.utils.text import slugify
from masters.models import (Category, Attribute, AttributeValue)


class ProductAttributes(models.Model):
    attrubute = models.ForeignKey(Attribute, default=None, blank=True,
                                  null=True, related_name="product_attrubute", on_delete=models.CASCADE)
    variant = models.ForeignKey(
        AttributeValue, related_name="product_attrubute_variant", on_delete=models.CASCADE)
    product = models.ForeignKey('Product', default=None, blank=True,
                                null=True, related_name="attributes", on_delete=models.CASCADE)


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
