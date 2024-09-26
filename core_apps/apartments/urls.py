from django.urls import path

from .views import ApartmentCreateAPIView,ApartmentDetailView

urlpatterns = [
    path("add/", ApartmentCreateAPIView.as_view(), name="add-apartment"),
    path("my-apartment/", ApartmentDetailView.as_view(), name="apartment-detail"),
]
