from import_export import resources
from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import File

@admin.register(File)
class FileAdmin(ImportExportModelAdmin):
    list_display = ('file_name','file_number','department','checkout_on','overdue','returned')
    search_fields = ['file_name','file_number']


class BookResource(resources.ModelResource):
    class Meta:
        model = File
        fields = ('file_name', 'file_number',)
