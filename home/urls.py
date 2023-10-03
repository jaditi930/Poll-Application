from django.urls import path
from . import views

urlpatterns = [
    path('',views.get_active_polls,name="home"),
    path('create_poll',views.create_poll,name="create"),
    path('login',views.log_in,name="login"),
    path('signin',views.signin,name="signin"),
    path('logout',views.log_out,name="logout"),
    path('save_response',views.save_responses,name="save"),
    path('my_polls',views.my_polls,name="my_polls"),
    path('get_cookie',views.get_cookie)
]
