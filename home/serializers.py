from rest_framework import serializers
from .models import *
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model=PollQuestions
        fields=['id','value','date_uploaded']

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model=PollOptions
        fields=['id','value']


