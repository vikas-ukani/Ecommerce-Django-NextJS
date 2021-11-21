from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from django.urls import reverse


class Category(MPTTModel):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)
    description = models.TextField(max_length=200, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            null=True, blank=True, related_name='children')
    # parent = models.ForeignKey(
    #     'self', default=None, blank=True, null=True, related_name="sub_categories", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('name', 'parent',)
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name
    #     full_path = [self.name]
    #     k = self.parent
    #     while k is not None:
    #         full_path.append(k.name)
    #         k = k.parent
    #     return ' -> '.join(full_path[::])

    def get_absolute_url(self):
        return reverse("masters:category_list", args=[self.slug])
