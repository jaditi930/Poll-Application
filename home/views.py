from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def home(request):
    return render(request,"all_polls.html")

def login(request):
    return render(request,"all_polls.html")

def signup(request):
    return render(request,"all_polls.html")

@csrf_exempt
def create_poll(request):
   return render(request,"create_poll.html") 