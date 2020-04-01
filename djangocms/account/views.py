from django.shortcuts import render,redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Nama pengguna itu telah digunakan')
            return redirect('register')
        else:
            if User.objects.filter(email=email).exists():
                messages.error(request, 'Email tersebut telah digunakan.')
                return redirect('register')
            else:
                # Looks good
                user = User.objects.create_user(
                    username=username, 
                    password=password, 
                    email=email,
                )
                
                #redirect to login page to login for first time
                user.save()
                messages.success(request, 'Anda telah didaftarkan dan boleh log masuk.')
                return redirect('login')
    else:
        return render(request, 'account/register.html')

def login(request):
    """ Handles login and sort them into group, which will be pushed into different views """
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            messages.success(request, 'Anda telah berjaya log masuk.')
            if user.groups.filter(name='Pentadbiran'):
                return redirect('dashboard')
            else: 
                return redirect('makmal')
        else:
            messages.error(request, 'Email / Nama pengguna yang tidak tepat.')
            return redirect('login')
    else:
        return render(request, 'account/login.html')


def loguserout(request):
    if request.method == 'POST':
        auth.logout(request)
        messages.success(request, 'Anda telah di log keluar')
        return redirect('login')