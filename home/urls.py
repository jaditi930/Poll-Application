from django.urls import path
from . import views

urlpatterns = [
    path('',views.home),
    path('create_poll',views.create_poll,name="create_poll")
]
