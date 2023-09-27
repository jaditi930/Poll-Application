from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class PollQuestions(models.Model):

    owner=models.ForeignKey(to=User,on_delete=models.CASCADE)
    status=models.BooleanField(default=1)
    ques_value=models.CharField(max_length=1000)


class PollOptions(models.Model):

    ques_id=models.ForeignKey(to=PollQuestions,on_delete=models.CASCADE)
    opt_value=models.CharField(max_length=1000)

class PollResponses(models.Model):

    user=models.ForeignKey(to=User,on_delete=models.CASCADE)
    ques_id=models.ForeignKey(to=PollQuestions,on_delete=models.CASCADE)
    opt_id=models.ForeignKey(to=PollOptions,on_delete=models.CASCADE)







