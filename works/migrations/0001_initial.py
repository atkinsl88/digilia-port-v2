# Generated by Django 3.2.2 on 2021-05-09 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('year', models.CharField(max_length=200)),
                ('be', models.CharField(max_length=200)),
                ('fe', models.CharField(max_length=200)),
                ('other', models.CharField(max_length=200)),
                ('link', models.CharField(max_length=200)),
                ('git', models.CharField(max_length=200)),
            ],
        ),
    ]