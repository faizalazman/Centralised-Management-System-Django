from django import forms
from .models import File

DEPARTMENT_CHOICES = (
    ('Pentadbiran', 'Pentadbiran'),
    ('Operasi', 'Operasi'),
    ('Pembangunan','Pembangunan'),
    ('Pelanggan','Pelanggan')
)

class FileForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['department'].widget.attrs.update({'class' : "form-control"})
        self.fields['assigned_to'].widget.attrs.update({'class' : "form-control tagging select2-hidden-accessible", 'multiple' : 'multiple', 'tabindex':'-1','aria-hidden': 'true','data-select2-id':'10'})

    checkout_on = forms.DateTimeField(required = False, widget = forms.DateInput(format='%Y/%m/%d %H:%M' , attrs={ 'id': 'dateTimeFlatpickr',
                                    'class' : "form-control flatpickr flatpickr-input active",
                                    'readonly':'readonly',
                                    'placeholder' : 'Pilih Tarikh...'}))

    file_name  =  forms.CharField(widget=forms.TextInput(attrs={'readonly':'True', 'class' : "form-control"}))
    file_number  =  forms.CharField(widget=forms.TextInput(attrs={'readonly':'True', 'class' : "form-control"}))
    returned = forms.BooleanField(required = False)

    class Meta:
        model = File
        fields = '__all__'


class AddForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['department'].widget.attrs.update({'class' : "form-control"})
        self.fields['assigned_to'].widget.attrs.update({'class' : "form-control tagging select2-hidden-accessible", 'multiple' : 'multiple', 'tabindex':'-1','aria-hidden': 'true','data-select2-id':'10'})

    checkout_on = forms.DateTimeField(required = False, widget = forms.DateInput(format='%Y/%m/%d %H:%M' , attrs={ 'id': 'dateTimeFlatpickr',
                                    'class' : "form-control flatpickr flatpickr-input active",
                                    'placeholder' : 'Pilih Tarikh...'}))

    file_name  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    file_number  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    returned = forms.BooleanField(required = False)

    class Meta:
        model = File
        fields = '__all__'