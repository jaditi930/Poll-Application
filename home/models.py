from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.

class PollQuestions(models.Model):

    owner=models.ForeignKey(to=User,on_delete=models.CASCADE)
    status=models.BooleanField(default=True)
    date_uploaded = models.DateTimeField(default= datetime.now())
    value=models.CharField(max_length=1000)


class PollOptions(models.Model):

    question=models.ForeignKey(to=PollQuestions,on_delete=models.CASCADE)
    value=models.CharField(max_length=1000)

class PollResponses(models.Model):

    user=models.ForeignKey(to=User,on_delete=models.CASCADE)
    question=models.ForeignKey(to=PollQuestions,on_delete=models.CASCADE)
    option=models.ForeignKey(to=PollOptions,on_delete=models.CASCADE)







