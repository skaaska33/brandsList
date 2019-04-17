from django.conf.urls import url
from brandslist.apps.brands import views

urlpatterns = [
    url(r'^brands$', views.BrandsList.as_view())
]
