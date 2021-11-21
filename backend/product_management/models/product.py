from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.text import slugify
from masters.models import (Category, Attribute, AttributeValue)


class ProductType(models.Model):
    """
    Product Type table list of all diffrent type of products for saling
    """
    name = models.CharField(max_length=255, )
    is_active = models.BooleanField(default=True, )

    class Meta:
        verbose_name = 'Product Type'
        verbose_name_plural = 'Product Types'

    def __str__(self):
        return self.name

# OLD


class ProductSpecification(models.Model):
    """
    Product Specification contains feature of product types
    """
    product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Product Specification'
        verbose_name_plural = 'Product Specifications'


# OLD

class ProductAttributes(models.Model):

    attrubute = models.ForeignKey(Attribute, default=None, blank=True,
                                  null=True, related_name="product_attrubute", on_delete=models.CASCADE)
    variant = models.ForeignKey(
        AttributeValue, related_name="product_attrubute_variant", on_delete=models.CASCADE)
    product = models.ForeignKey('Product', default=None, blank=True,
                                null=True, related_name="attributes", on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Product Attribute'
        verbose_name_plural = 'Product Attributes'


class Product(models.Model):
    # Relations
    category = models.ForeignKey(
        Category, related_name='category', on_delete=models.RESTRICT, default=None,)
    product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)

    name = models.CharField(max_length=50, default=None)
    slug = models.SlugField(default=None, null=True, blank=True)
    short_description = models.TextField(null=True, blank=True)
    description = models.TextField(default=None)
    regular_price = models.DecimalField(max_digits=5, decimal_places=2, error_messages={
        "name": {
            "max_length": "Price must between 0 to 999.99"
        }
    })
    discount_price = models.DecimalField(max_digits=5, decimal_places=2, error_messages={
        "name": {
            "max_length": "Price must between 0 to 999.99"
        }
    })
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=True)
    # total_stock = models.IntegerField(default=10)
    # image = models.ImageField(upload_to='product-images', default=None)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = 'Product'
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return f'/{self.slug}/'


class ProductSpecificationValue(models.Model):
    """
    Product Specification values contains each product specification name
    """
    product = models.ForeignKey(Product, on_delete=CASCADE)
    specification = models.ForeignKey(
        ProductSpecification, on_delete=models.RESTRICT)
    value = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Product Specification'
        verbose_name_plural = 'Product Specifications'


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='product_images')
    image = models.ImageField(
        upload_to='product-images', default='product-image/default.png')
    alt_text = models.CharField(max_length=255, blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Product Image'
        verbose_name_plural = 'Product Images'
