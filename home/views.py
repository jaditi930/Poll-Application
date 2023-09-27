from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.decorators import api_view
from django.middleware.csrf import get_token
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def home(request):
    return render(request,"all_polls.html")

@api_view(['POST'])
def log_in(request):

    user=authenticate(username=request.data["username"],password=request.data["password"])

    if user is not None:
        login(request,user)
        print(get_token(request))
        return Response({"message":"user logged"})
    else:
        return Response({"message":"user not logged in"})

@api_view(['POST'])
def signin(request):

    data=request.data
    try:
        user=User.objects.get(username=data['username'])
        return Response({"message":"user already exists"})
    except:
        new_user=User.objects.create_user(username=data['username'],email=data['email'],password=data['password'])
        return Response({"message":"user created successfully"})

@api_view(['POST'])
def create_poll(request):
   data=request.data

   if request.user.is_authenticated:
       
       ques_value=data["question"]
       owner=request.user
       newques=PollQuestions(owner=owner,value=ques_value)
       newques.save()

       options=data["options"]
       for value in list(options.values()):
           option=PollOptions(value=value,question=newques)
           option.save()

       return Response({"message":"poll created successfully"})
   
   return Response({"message":"please login to create a poll"})

@api_view(['GET'])
def get_active_polls(request):
    if request.user.is_authenticated:
        active_polls=PollQuestions.objects.filter(status=True)
        for poll in active_polls:
            question_data=QuestionSerializer(poll)
            ques_id=question_data.id
            

            return JsonResponse(question_data.data)
        

@api_view(['GET'])
def log_out(request):
    logout(request)
    return Response({"message":"user logged out"})