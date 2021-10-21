
from django.db import models
from django.utils.text import slugify


class Attribute(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(default=None, null=True,
                            blank=True, unique=True, allow_unicode=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ("name", "slug")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Attribute, self).save(*args, **kwargs)


class AttributeValue(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(default=None, null=True,
                            blank=True, unique=True, allow_unicode=True)
    attribute = models.ForeignKey(
        Attribute, related_name="values", on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ("name", "slug")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(AttributeValue, self).save(*args, **kwargs)
