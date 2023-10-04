from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
# Create your views here.


@api_view(['POST'])
def log_in(request):
    user=authenticate(username=request.data["username"],password=request.data["password"])

    if user is not None:
        login(request,user)
        return Response({"message":"user logged"})
    else:
        return Response({"message":"user not logged in"})
    
@api_view(['GET'])
def get_cookie(request):
    cookies=request.headers["Cookie"].split(";")[0].split("=")[1]
    print(cookies)
    return Response({"cookies":cookies})

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
   print()
   data=request.data

   if request.user.is_authenticated:
       
       ques_value=data["question"]
       owner=request.user
       newques=PollQuestions(owner=owner,value=ques_value)
       newques.save()

       options=data["options"]
       for value in options:
           option=PollOptions(value=value,question=newques)
           option.save()

       return Response({"message":"poll created successfully"})
   
   return Response({"message":"please login to create a poll"})

    
@api_view(['GET','POST'])
def get_active_polls(request):
    if request.user.is_authenticated:

        # print(user_answered_list)
        active_polls=PollQuestions.objects.filter(status=True).exclude(owner=request.user)
        question={}
        answered_polls=list()
        unanswered_polls=list()

        for poll in active_polls:
            question_data=QuestionSerializer(poll)
            poll_options=PollOptions.objects.filter(question=poll)
            
            options_list=[]
            for option in poll_options:
                option_data=OptionSerializer(option)
                options_list.append(option_data.data)
            # print(options_list)

            question=question_data.data
            question["options"]=options_list
            # print(question)
            try:
                user_response=PollResponses.objects.get(user=request.user,question=poll)
                question["response"]=user_response.option.id
                answered_polls.append(question)
            except:
                unanswered_polls.append(question)

        print(answered_polls)
        # print(unanswered_polls)
        
        return Response({"message":"success","answered_polls":answered_polls,"unanswered_polls":unanswered_polls})
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
        my_questions=PollQuestions.objects.filter(owner=request.user)
        questions_list=[]

        for question in my_questions:
            question_data=QuestionSerializer(question)
            question_data=question_data.data
            options=PollOptions.objects.filter(question=question)
            options_list=[]

            for option in options:
                option_data=OptionSerializer(option)
                option_data=option_data.data
                option_count=PollResponses.objects.filter(question=question,option=option).count()
                option_data["count"]=option_count
                options_list.append(option_data)
            
            question_data["options"]=options_list
            questions_list.append(question_data)

        
        return Response({"questions":questions_list})
    else:
        return Response({"message":"please login to view your polls"})


@api_view(['GET'])
def log_out(request):
    logout(request)
    return Response({"message":"user logged out"})