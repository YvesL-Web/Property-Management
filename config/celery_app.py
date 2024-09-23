import os 
from celery import Celery
from django.conf import settings

os.environ.setdefault("DJANGO_SETTINGS_MODULE","config.settings.local") # enable celery to read config from settings

app = Celery("ama_apartements")

app.config_from_object("django.conf:settings", namespace="CELERY")

app.autodiscover_tasks(lambda:settings.INSTALLED_APPS)