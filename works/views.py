# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views import View

from .models import Work

class WorkListView(View):

    def get(self, request):
        works = Work.objects.all()

        return render(request, 'index.html', { 'works': works })

class WorkDetailView(View):

    def get(self, request, pk):
        work = Work.objects.get(pk=pk)

        return render(request, 'show.html', {'work': work })

# Create your views here.
