from django.urls import path
from products.views import ProductListCreateView

urlpatterns = [
    path("", ProductListCreateView.as_view(), name="products"),
]
