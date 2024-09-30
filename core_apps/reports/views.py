from rest_framework import generics
from rest_framework import serializers

from .models import Report
from .serializers import ReportSerializer
from core_apps.common.renderers import GenericJSONRenderer


class ReportCreateAPIView(generics.CreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    renderer_classes = [GenericJSONRenderer]
    object_label = "report"

    def perform_create(self, serializer:serializers.Serializer) -> None:
        serializer.save(reported_by=self.request.user)
    

class ReportListAPIView(generics.ListAPIView):
    serializer_class = ReportSerializer
    renderer_classes = [GenericJSONRenderer]
    object_label = "report"

    def get_queryset(self):
        user = self.request.user
        return Report.objects.filter(reported_by=user)