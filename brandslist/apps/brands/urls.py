from django.conf.urls import url
from brandslist.apps.brands import views

urlpatterns = [
    url(r'^get$', views.BrnadsList.as_view())
]
