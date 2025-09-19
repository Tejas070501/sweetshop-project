from rest_framework import generics
from .models import Sweet
from .serializers import SweetSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Sweet, Inventory
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserRegisterSerializer

class SweetListCreateView(generics.ListCreateAPIView):
    queryset = Sweet.objects.all()
    serializer_class = SweetSerializer
    permission_classes = [permissions.IsAuthenticated]

class SweetDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sweet.objects.all()
    serializer_class = SweetSerializer

class SweetSearchView(APIView):
    def get(self, request):
        name = request.query_params.get("name", "")
        category = request.query_params.get("category", "")
        price_min = request.query_params.get("price_min")
        price_max = request.query_params.get("price_max")

        sweets = Sweet.objects.all()
        if name:
            sweets = sweets.filter(name__icontains=name)
        if category:
            sweets = sweets.filter(category__icontains=category)
        if price_min:
            sweets = sweets.filter(price__gte=price_min)
        if price_max:
            sweets = sweets.filter(price__lte=price_max)

        serializer = SweetSerializer(sweets, many=True)
        return Response(serializer.data)
    
class SweetPurchaseView(APIView):
    def post(self, request, sweet_id):
        try:
            sweet = Sweet.objects.get(id=sweet_id)
            amount = int(request.data.get("amount", 1))
            if sweet.quantity < amount:
                return Response({"error": "Not enough quantity in stock"}, status=400)
            sweet.quantity -= amount
            sweet.save()
            Inventory.objects.create(sweet=sweet, action="purchase", amount=amount)
            return Response({"message": "Purchase successful"})
        except Sweet.DoesNotExist:
            return Response({"error": "Sweet not found"}, status=404)
        
class SweetRestockView(APIView):
    def post(self, request, sweet_id):
        try:
            sweet = Sweet.objects.get(id=sweet_id)
            amount = int(request.data.get("amount", 1))
            sweet.quantity += amount
            sweet.save()
            Inventory.objects.create(sweet=sweet, action="restock", amount=amount)
            return Response({"message": "Restock successful"})
        except Sweet.DoesNotExist:
            return Response({"error": "Sweet not found"}, status=404)
        
class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]

class SweetRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Sweet.objects.all()
    serializer_class = SweetSerializer
    permission_classes = [permissions.IsAuthenticated]

class SweetDeleteView(generics.DestroyAPIView):
    queryset = Sweet.objects.all()
    serializer_class = SweetSerializer
    permission_classes = [permissions.IsAdminUser]  # Only admin can delete

from rest_framework.views import APIView

class SweetSearchView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        qs = Sweet.objects.all()
        name = request.GET.get('name')
        category = request.GET.get('category')
        price_min = request.GET.get('price_min')
        price_max = request.GET.get('price_max')

        if name:
            qs = qs.filter(name__icontains=name)
        if category:
            qs = qs.filter(category__icontains=category)
        if price_min:
            qs = qs.filter(price__gte=price_min)
        if price_max:
            qs = qs.filter(price__lte=price_max)
        data = SweetSerializer(qs, many=True).data
        return Response(data)