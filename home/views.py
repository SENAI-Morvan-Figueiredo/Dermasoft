from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def NossaEquipe(request):
    return render(request, "NossaEquipe.html")
