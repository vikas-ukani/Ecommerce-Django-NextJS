from masters.models import Category
from rest_framework import serializers


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'description')


class CategorySerializer(serializers.ModelSerializer):
    # subcategories = serializers.SubCategorySerializer()

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'is_active',
                  'sub_categories', 'created_at', 'parent',
                  'updated_at']
        
        depth = 10

    # def get_related_field(self, model_field):
    #     # Handles initializing the `subcategories` field
    #     return CategorySerializer()

    def get_fields(self):
            fields = super(CategorySerializer, self).get_fields()
            fields['sub_categories'] = CategorySerializer(many=True)
            return fields

    @staticmethod
    def get_sub_categories(obj):
        return CategorySerializer(obj, many=True, read_only=True).data


