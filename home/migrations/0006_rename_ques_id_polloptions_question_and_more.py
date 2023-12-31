# Generated by Django 4.2.5 on 2023-09-27 14:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_pollquestions_date_uploaded'),
    ]

    operations = [
        migrations.RenameField(
            model_name='polloptions',
            old_name='ques_id',
            new_name='question',
        ),
        migrations.RenameField(
            model_name='polloptions',
            old_name='opt_value',
            new_name='value',
        ),
        migrations.RenameField(
            model_name='pollquestions',
            old_name='ques_value',
            new_name='value',
        ),
        migrations.RenameField(
            model_name='pollresponses',
            old_name='opt_id',
            new_name='option',
        ),
        migrations.RenameField(
            model_name='pollresponses',
            old_name='ques_id',
            new_name='question',
        ),
        migrations.AlterField(
            model_name='pollquestions',
            name='date_uploaded',
            field=models.DateTimeField(default=datetime.datetime(2023, 9, 27, 20, 25, 20, 234133)),
        ),
    ]
