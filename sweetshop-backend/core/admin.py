from django.contrib import admin
from .models import Sweet, Inventory

@admin.register(Sweet)
class SweetAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'quantity']
    list_filter = ['category']
    search_fields = ['name']

@admin.register(Inventory)
class InventoryAdmin(admin.ModelAdmin):
    list_display = ['sweet', 'action', 'amount', 'timestamp']
    list_filter = ['action', 'timestamp']
    search_fields = ['sweet__name']