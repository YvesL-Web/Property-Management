from django.contrib import admin
from django.conf import settings
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework.permissions import AllowAny


schema_view = get_schema_view(
   openapi.Info(
       title="AMAGroup Apartements API",
       default_version="V1",
       description="An Apartment Management API for Real Estate",
       contact=openapi.Contact(email="admin@amaestate.com"),
       license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=[AllowAny],
)

urlpatterns = [
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    path(settings.ADMIN_URL, admin.site.urls),
]

admin.site.site_header ="AMAGroup Apartments Admin"
admin.site.site_title = "AMAGroup Apartments Admin Portal"
admin.site.index_title =" Welcome to AMAGroup Apartements Admin Portal"
