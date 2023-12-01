from django.urls import path
from opensmsapp import views

urlpatterns = [
    path('', views.hello_world, name='hello_world'),
]
