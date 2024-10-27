from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, health_check, home

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('healthz', health_check, name='health_check'),
    path('home', home, name='home'),
]