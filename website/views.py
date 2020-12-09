from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request, 'index.html', {})

def gallery(request):
	return render(request, 'gallery.html', {})

def cause_details_donate(request):
	return render(request, 'cause-details-donate.html', {})

def test(request):
	return render(request, 'test.html', {})