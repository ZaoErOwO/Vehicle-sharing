from django.urls import path
# from .views import LocationView
from locations import views

app_name = 'locations'

urlpatterns = [
    path('', views.index, name='index'),
    # path('vehicle/', views.index, name='vehicle'),
    path('order_history/', views.order_history,name='order_history'),
    path('order_history/<int:nid>/details/', views.order_detail, name = 'order_detail'),
    path('create_order/', views.create_order, name='create_order'),
    path('return_order/', views.return_order, name='return_order'),
    path('conclude_order/', views.conclude_order, name='conclude_order'),
    path('deposit/', views.deposit, name='deposit'),
    path('order_history/<int:nid>/payment/', views.payment, name = 'order_payment'),
    path('payment/<int:nid>/', views.payment, name='payment'),
]
