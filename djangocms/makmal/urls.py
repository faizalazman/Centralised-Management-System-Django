from django.urls import path
from . import views

urlpatterns = [
    path('rekod', views.makmal , name = 'makmal'),
    path('edit/<int:pk>', views.edit_report , name = 'editreport'),
    path('add', views.add_record , name = 'addreport'),
    path('print/<int:pk>', views.print_report, name= 'printreport')
]