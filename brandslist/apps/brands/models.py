import uuid
from django.db import models


class Brand(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30, default='', verbose_name='Наименование')
    description = models.TextField(default='', verbose_name='Описание')
