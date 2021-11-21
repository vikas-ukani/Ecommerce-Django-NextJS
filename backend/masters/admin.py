from django.contrib import admin
from masters.models import (Category, Attribute, AttributeValue)
from mptt.admin import MPTTModelAdmin

# Register your models here.
admin.site.register(Category, MPTTModelAdmin)

class AttributeAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'is_active')
    search_fields = ('name', 'slug')


admin.site.register(Attribute, AttributeAdmin)


class AttributeValueAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'is_active', 'attribute']
    search_fields = ('name', 'slug',  'attribute__name')


admin.site.register(AttributeValue, AttributeValueAdmin)
