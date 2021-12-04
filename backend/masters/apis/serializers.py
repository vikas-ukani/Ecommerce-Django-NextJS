from masters.models import Category
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'is_active',
                  'created_at', 'parent', 'updated_at']
        depth = 10

    def get_fields(self):
        fields = super(CategorySerializer, self).get_fields()
        fields['children'] = CategorySerializer(many=True)
        # fields['sub_categories'] = CategorySerializer(many=True)
        return fields

    @staticmethod
    def get_children(obj):
        return CategorySerializer(obj, many=True, read_only=True).data
