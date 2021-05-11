# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Work(models.Model):
    name = models.CharField(max_length=200)
    year = models.CharField(max_length=200)
    be = models.CharField(max_length=200)
    fe = models.CharField(max_length=200)
    other = models.CharField(max_length=200)
    link = models.CharField(max_length=200)
    git = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name} - {self.year}'
