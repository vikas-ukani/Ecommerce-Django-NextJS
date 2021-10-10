from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=200, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    parent = models.ForeignKey(
        'self', default=None, blank=True, null=True, related_name="sub_categories", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('name', 'parent',)
        verbose_name_plural = "categories"   
        # unique_together = (
        #     ('name')
        # )

    def __str__(self):                           
        full_path = [self.name]                  
        k = self.parent
        while k is not None:
            full_path.append(k.name)
            k = k.parent
        return ' -> '.join(full_path[::])
