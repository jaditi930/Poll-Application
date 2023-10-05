from celery import shared_task
from time import sleep
from .models import PollQuestions


@shared_task(name="remove polls older than 24 hours")
def remove_poll(ques_id):
    poll=PollQuestions.objects.get(id=ques_id)
    poll.status=False
    poll.save()
    return "success"




