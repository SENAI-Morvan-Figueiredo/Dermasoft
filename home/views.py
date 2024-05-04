from django.shortcuts import render



def conhece_a_dermasoft(request):
    return render(request, "conheca_a_dermasoft.html")

def estetica_corporal(request):
    return render(request, "estetica_corporal.html")

def index(request):
    return render(request, "index.html")

def limpeza_de_pele(request):
    return render(request, "limpeza_de_pele.html")

def nossa_equipe(request):
    return render(request, "nossa_equipe.html")

def tratamentos_faciais(request):
    return render(request, "tratamentos_faciais.html")

def tratamentos(request):
    return render(request, "tratamentos.html")
