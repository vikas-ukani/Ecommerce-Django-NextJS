from ..models import Category
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'is_active', 'created_at', 'updated_at']

    # @staticmethod
    # def get_sub_categories(obj):
    #     return CategorySerializer(obj.categories, many=True, read_only=True).data
