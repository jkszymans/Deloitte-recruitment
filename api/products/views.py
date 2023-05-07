from rest_framework.generics import ListCreateAPIView
from products.serializers import ProductSerializer
from products.models import Product


class ProductListCreateView(ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
