from django.shortcuts import render


def index(request):
    return render(request, "index.html")


def nossa_equipe(request):
    return render(request, "nossa_equipe.html")

def tratamentos(request):
    return render(request, "tratamentos.html")