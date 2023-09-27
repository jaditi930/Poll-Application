from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name="home"),
    path('create_poll',views.create_poll,name="create"),
    path('login',views.log_in,name="login"),
    path('signin',views.signin,name="signin"),
    path('logout',views.log_out,name="logout"),

]
