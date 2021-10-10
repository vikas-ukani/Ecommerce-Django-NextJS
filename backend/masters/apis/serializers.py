from ..models import Category
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    # sub_categories = serializers.RelatedField(many=False)
    sub_categories = serializers.StringRelatedField(many=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'is_active',
                  'sub_categories', 'parent',  'created_at', 'updated_at']

    @staticmethod
    def get_sub_categories(obj):
        return CategorySerializer(obj, many=True, read_only=True).data
