# Generated by Django 4.2.5 on 2023-09-27 14:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_alter_polloptions_opt_value_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='pollquestions',
            name='date_uploaded',
            field=models.DateTimeField(default=datetime.datetime(2023, 9, 27, 20, 1, 35, 851771)),
        ),
    ]
