from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("cadastro/", views.cadastro, name="cadastro"),
    path("login/", views.login_view, name="login"),
    path("sair/", views.sair, name="sair"),
    path(
        "password-reset/",
        auth_views.PasswordResetView.as_view(
            template_name="password/password-reset.html"
        ),
        name="password_reset",
    ),
    path(
        "password-reset/done/",
        auth_views.PasswordResetDoneView.as_view(
            template_name="password/password-reset-done.html"
        ),
        name="password_reset_done",
    ),
    path(
        "reset/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            template_name="password/password-reset-confirm.html"
        ),
        name="password_reset_confirm",
    ),
    path(
        "reset/done/",
        auth_views.PasswordResetCompleteView.as_view(
            template_name="password/password-reset-complete.html"
        ),
        name="password_reset_complete",
    ),
]
