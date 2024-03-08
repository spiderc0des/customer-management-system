from django.urls import path, include
from .views import CustomerViewSet

from rest_framework.routers import DefaultRouter

customer_router = DefaultRouter()

customer_router.register('', CustomerViewSet, 'customer_viewset')


urlpatterns = [
    path('customer/', include(customer_router.urls)),
    
    
]