from django.shortcuts import render, redirect
from medico.models import DadosMedico, Especialidades, DatasAbertas, is_medico
from .models import Consulta, Documento
from datetime import datetime
from django.contrib import messages
from django.contrib.messages import constants
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
    if request.method == "GET":
        medico_filtrar = request.GET.get("medico")
        especialidades_filtrar = request.GET.getlist("especialidades")
        medicos = DadosMedico.objects.all()

        if medico_filtrar:
            medicos = medicos.filter(nome__icontains=medico_filtrar)

        if especialidades_filtrar:
            medicos = medicos.filter(especialidade_id__in=especialidades_filtrar)

        especialidades = Especialidades.objects.all()
        return render(
            request,
            "home.html",
            {
                "medicos": medicos,
                "especialidades": especialidades,
                "is_medico": is_medico(request.user),
            },
        )


@login_required
def escolher_horario(request, id_dados_medicos):
    if request.method == "GET":
        medico = DadosMedico.objects.get(id=id_dados_medicos)
        datas_abertas = (
            DatasAbertas.objects.filter(user=medico.user)
            .filter(data__gte=datetime.now())
            .filter(agendado=False)
        )
        return render(
            request,
            "escolher_horario.html",
            {
                "medico": medico,
                "datas_abertas": datas_abertas,
                "is_medico": is_medico(request.user),
            },
        )


@login_required
def agendar_horario(request, id_data_aberta):
    if request.method == "GET":
        data_aberta = DatasAbertas.objects.get(id=id_data_aberta)

        horario_agendado = Consulta(paciente=request.user, data_aberta=data_aberta)

        horario_agendado.save()

        # TODO: Sugestão Tornar atomico

        data_aberta.agendado = True
        data_aberta.save()

        messages.add_message(
            request, constants.SUCCESS, "Horário agendado com sucesso."
        )

        return redirect("/pacientes/minhas_consultas/")


@login_required
def minhas_consultas(request):
    if request.method == "GET":
        medico_filtrar = request.GET.get("medico")
        especialidades_filtrar = request.GET.getlist("especialidades")
        medicos = DadosMedico.objects.all()

        if medico_filtrar:
            medicos = medicos.filter(nome__icontains=medico_filtrar)

        if especialidades_filtrar:
            medicos = medicos.filter(especialidade_id__in=especialidades_filtrar)

        especialidades = Especialidades.objects.all()
        return render(
            request,
            "home.html",
            {
                "medicos": medicos,
                "especialidades": especialidades,
                "is_medico": is_medico(request.user),
            },
        )


@login_required
def consulta(request, id_consulta):
    if request.method == "GET":
        consulta = Consulta.objects.get(id=id_consulta)
        dado_medico = DadosMedico.objects.get(user=consulta.data_aberta.user)
        documentos = Documento.objects.filter(consulta=consulta)
        return render(
            request,
            "consulta.html",
            {
                "consulta": consulta,
                "dado_medico": dado_medico,
                "documentos": documentos,
                "is_medico": is_medico(request.user),
            },
        )
