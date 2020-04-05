from django.shortcuts import render, get_object_or_404,redirect
from .models import Report
from django.contrib.auth.decorators import login_required
from .forms import ReportForm,AddRecordForm
from .render import Render



@login_required
def makmal(request):
    # Obtain all record from database
    reports = Report.objects.order_by('-done_on')
    return render(request, 'makmal/strelise.html', { 'reports' : reports})

@login_required
def edit_report(request,pk):
    report = get_object_or_404(Report, id = pk)
    if request.method == "POST":
        form = ReportForm(request.POST,instance = report)
        if form.is_valid():
            form.save()
            return redirect('makmal')
        else:
            print(form.errors)
            return redirect('editreport')
    else:
        form = ReportForm(instance = report)
    return render(request, 'makmal/editrecord.html', {'form': form, 'file': report})

@login_required
def add_record(request):
    if request.method == "POST":
        form = AddRecordForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('makmal')
    else:
        form = AddRecordForm()
        
    return render(request, 'makmal/addrecord.html', {'form': form })


@login_required
def print_report(request , pk):
    report = get_object_or_404(Report, id = pk)
    form = ReportForm(instance = report)
    params = {
        'form': form,
        'request': request
    }

    return Render.render('makmal/stereliseform.html', params)