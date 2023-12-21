from django.contrib import admin
from django.urls import path, re_path
from opensmsapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/contacts/$', views.contacts_list),
    re_path(r'^api/contacts/([0-9])$', views.contacts_detail),
    re_path(r'^api/messages/$', views.messages),
]
