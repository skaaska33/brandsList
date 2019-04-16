import json

from django.db import models, migrations


def fill_data(apps, _):
    with open('./brands.json') as jsonFile:
        BrandModel = apps.get_model('brands', 'Brand')
        brands = json.load(jsonFile)
        objectsToCreate = [BrandModel(name=brand.get('name', ''), description=brand.get('description', '')) for brand in brands]
        BrandModel.objects.bulk_create(objectsToCreate)


class Migration(migrations.Migration):
    dependencies = [
        ('brands', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(fill_data),
    ]
