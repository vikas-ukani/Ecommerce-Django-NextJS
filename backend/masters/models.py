from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=200, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
    class Meta:
        pass
        # unique_together = (
        #     ('name')
        # )

    def __str__(self):
        return self.name
