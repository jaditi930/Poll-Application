from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.decorators import api_view
from django.middleware.csrf import get_token
from django.db.models import Count
from .models import *
from .serializers import *
import json
# Create your views here.

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

        # print(user_answered_list)
        active_polls=PollQuestions.objects.filter(status=True).exclude(owner=request.user)
        question={}
        for poll in active_polls:
            question_data=QuestionSerializer(poll)
            poll_options=PollOptions.objects.filter(question=poll)
            
            options_list=[]
            for option in poll_options:
                option_data=OptionSerializer(option)
                options_list.append(option_data.data)
            print(options_list)

            question=question_data.data
            question["options"]=options_list
            answered_polls=[]
            unanswered_polls=[]
            try:
                user_response=PollResponses.objects.get(user=request.user,question=poll)
                question["response"]=user_response.option.id
                answered_polls.append(question)
            except:
                unanswered_polls.append(question)

        print(answered_polls)
        
        return Response({"answered_polls":answered_polls,"unanswered_polls":unanswered_polls})
    else:
        return Response({"message":"please login to view polls"})

        
@api_view(['POST'])
def save_responses(request):
    if request.user.is_authenticated:
        response=request.data
        try:
            try:
                existing_response=PollResponses.objects.get(question=question,user=request.user)

                return Response({"message":"response already exists"})
            except:
                question=PollQuestions.objects.get(id=response["ques_id"])
                option=PollOptions.objects.get(id=response["option_id"])

                new_response=PollResponses(question=question,option=option,user=request.user)
                new_response.save()

                return Response({"message":"response saved successfully"})
        except:
            return Response({"message":"error occured in saving response"})
    else:
        return Response({"message":"please login to save responses"})

@api_view(['GET'])
def my_polls(request):    
    if request.user.is_authenticated:
        user_poll_questions=list(PollQuestions.objects.filter(owner=request.user).values_list('id',flat=True))
        print(user_poll_questions)
        # for question in user_poll_questions:
        user_poll_responses=PollResponses.objects.filter(question__in=user_poll_questions).values('option').annotate(count=Count('option')).order_by()
        print(user_poll_responses)
        return Response({"message":"please login to save responses"})
    else:
        return Response({"message":"please login to view yout polls"})


@api_view(['GET'])
def log_out(request):
    logout(request)
    return Response({"message":"user logged out"})