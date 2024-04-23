from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("nossa_equipe/", views.nossa_equipe, name="nossa_equipe"),
    path("tratamentos/", views.tratamentos, name="tratamentos"),
]
