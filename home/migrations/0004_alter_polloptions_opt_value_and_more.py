# Generated by Django 4.0.7 on 2023-09-27 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_alter_pollquestions_ques_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='polloptions',
            name='opt_value',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='pollquestions',
            name='status',
            field=models.BooleanField(default=1),
        ),
    ]
