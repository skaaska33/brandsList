from rest_framework import generics, serializers
from brandslist.apps.brands.models import Brand


# Create your views here.


class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = ('id', 'name', 'description')


class BrnadsList(generics.ListAPIView):
    serializer_class = BrandSerializer

    def get_queryset(self):
        skip = self.request.query_params.get('skip', '0')
        skip = int(skip) if skip != '' else 0
        queryset = Brand.objects.all()[skip:skip + 20]
        name = self.request.query_params.get('name', '')
        if name != '':
            queryset = Brand.objects.filter(name__icontains=name)[skip:skip + 20]
        return queryset
