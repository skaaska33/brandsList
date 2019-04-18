from rest_framework import generics, serializers
from rest_framework.pagination import PageNumberPagination
from brandslist.apps.brands.models import Brand


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('id', 'name', 'description')


class BrandsPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'skip'


class BrandsList(generics.ListAPIView):
    serializer_class = BrandSerializer
    pagination_class = BrandsPagination
    http_method_names = ['get']

    def get_queryset(self):
        queryset = Brand.objects.all()
        name = self.request.query_params.get('name', '')
        if name:
            queryset = Brand.objects.filter(name__icontains=name)
        return queryset
