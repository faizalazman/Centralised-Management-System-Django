from django.contrib import admin
from .models import Report

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ['project_name','contractor_name', 'done_on']
    search_fields = ['project_name','contractor_name']