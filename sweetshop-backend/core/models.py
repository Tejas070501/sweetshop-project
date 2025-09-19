from django.db import models

class Sweet(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()

class Inventory(models.Model):
    sweet = models.ForeignKey(Sweet, on_delete=models.CASCADE)
    action = models.CharField(max_length=10)
    amount = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)