from django.shortcuts import render, get_object_or_404,redirect
from django.contrib.auth.decorators import login_required
from .forms import FileForm
from .models import File

@login_required
def dashboard(request):
    files = File.objects.order_by('-overdue')
    context = {
        'files': files
    }

    return render(request, 'management/dashboard.html', context)


def edit_file(request,pk):
    file = get_object_or_404(File, id = pk)
    if request.method == "POST":
        form = FileForm(request.POST,instance = file)
        if form.is_valid():
            form.save()
            return redirect('dashboard')
        else:
            return redirect('editfile')
    else:
        form = FileForm(instance = file)
    return render(request, 'management/editfile.html', {'form': form, 'file': file})