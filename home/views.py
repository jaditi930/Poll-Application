from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.decorators import api_view

# Create your views here.
def home(request):
    return render(request,"all_polls.html")

@api_view(['POST'])
def log_in(request):

    user=authenticate(username=request.data["username"],password=request.data["password"])

    if user is not None:
        login(request,user)
        return Response({"message":"user logged"})
    else:
        return Response({"message":"user not logged in"})


def signin(request):

    data=request.data
    try:
        user=User.objects.get(username=data['username'])
        new_user=User.objects.create_user(username=data['username'],email=data['email'],password=data['password'])
        return Response({"message":"user created successfully"})
    except:
        return Response({"message":"user already exists"})


def create_poll(request):
   return render(request,"create_poll.html") 

def log_out(request):
    logout(request)
    return Response({"message":"user logged out"})