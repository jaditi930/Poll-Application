from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(PollQuestions)
admin.site.register(PollOptions)
admin.site.register(PollResponses)

