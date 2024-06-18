from django.http import HttpResponse
from django.shortcuts import render
import os

def home(request):
    # return HttpResponse("This is the home page.")
    return render(request, 'home.html')

def about(request):
    # return HttpResponse("This is the about page")
    return render(request, 'about.html')

def read(request):
    if request.method == 'POST':
        return result(request)
    return render(request, 'read.html')

def result(request):
    inp1 = str(request.POST.get('inp1'))
    inp2 = str(request.POST.get('inp2'))
    inp3 = str(request.POST.get('inp3'))
    l = [inp1, inp2, inp3]
    from .prediction import Input_Prediction
    from django.template import loader
    template = loader.get_template('read.html')
    context = {
        'answer' : Input_Prediction(l),
    }
    return HttpResponse(template.render(context, request))