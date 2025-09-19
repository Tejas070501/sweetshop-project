# core/urls.py

from django.urls import path
from . import views

urlpatterns = [
    # Sweets endpoints
    path('sweets/', views.SweetListCreateView.as_view()),
    path('sweets/<int:pk>/', views.SweetDetailView.as_view()),      # GET (detail), PUT (update)
    path('sweets/<int:pk>/delete/', views.SweetDeleteView.as_view()),  # DELETE (admin-only)
    path('sweets/search/', views.SweetSearchView.as_view()),

    # Inventory endpoints (purchase/restock)
    path('inventory/<int:sweet_id>/purchase/', views.SweetPurchaseView.as_view()),
    path('inventory/<int:sweet_id>/restock/', views.SweetRestockView.as_view()),  # (admin-only)
]