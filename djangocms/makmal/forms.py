from django import forms
from .models import Report

class ReportForm(forms.ModelForm):
    project_name  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    contractor_name  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    pipe_type  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    pipe_size  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    result_1  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    result_2  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    result_3  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}), required=False)
    result_4  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}), required=False)

    done_on = forms.DateTimeField(widget = forms.DateInput(format='%Y/%m/%d %H:%M' , attrs={ 'id': 'dateTimeFlatpickr',
                                'class' : "form-control flatpickr flatpickr-input active",
                                'placeholder' : 'Pilih Tarikh...'}))


    class Meta:
        model = Report       
        fields = '__all__'


class AddRecordForm(forms.ModelForm):
    project_name  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    contractor_name  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    pipe_type  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    pipe_size  =  forms.CharField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    result_1  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    result_2  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}))
    result_3  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}), required=False)
    result_4  =  forms.IntegerField(widget=forms.TextInput(attrs={'class' : "form-control"}),required=False)

    done_on = forms.DateTimeField(widget = forms.DateInput(format='%Y/%m/%d %H:%M' , attrs={ 'id': 'dateTimeFlatpickr',
                                'class' : "form-control flatpickr flatpickr-input active",
                                'placeholder' : 'Pilih Tarikh...'}))


    class Meta:
        model = Report       
        fields = '__all__'