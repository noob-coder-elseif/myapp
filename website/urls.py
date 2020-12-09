from django.urls import path
from . import views

app_name = 'website'
urlpatterns = [
	path('', views.home, name="home"),
	path('gallery', views.gallery, name="gallery"),
	path('cause_details_donate', views.cause_details_donate, name="cause_details_donate"),
	path('test', views.test, name="test")
]