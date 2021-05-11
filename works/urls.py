from django.urls import path
from .views import WorkListView, WorkDetailView

urlpatterns = [
    path('', WorkListView.as_view()),
    path('<int:pk>/', WorkDetailView.as_view())
]