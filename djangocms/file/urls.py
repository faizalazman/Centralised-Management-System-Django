from django.urls import path
from . import views

urlpatterns = [
    path('dashboard', views.dashboard, name = 'dashboard'),
    path('edit/<int:pk>', views.edit_file, name = 'editfile')
]