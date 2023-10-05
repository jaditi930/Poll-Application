from celery import shared_task
from time import sleep
@shared_task(name="addition_task")
def add(x, y):
    sleep(10)
    return x + y



