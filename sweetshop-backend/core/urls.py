from django.urls import path
from . import views

urlpatterns = [
    path('sweets/', views.SweetListCreateView.as_view()),
    path('sweets/<int:pk>/', views.SweetDetailView.as_view()),    
    path('sweets/<int:pk>/delete/', views.SweetDeleteView.as_view()), 
    path('sweets/search/', views.SweetSearchView.as_view())
    path('inventory/<int:sweet_id>/purchase/', views.SweetPurchaseView.as_view()),
    path('inventory/<int:sweet_id>/restock/', views.SweetRestockView.as_view()), 
]
