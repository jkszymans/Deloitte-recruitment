from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from decimal import Decimal
from rest_framework import status
from products.models import Product


class CreateProductViewTestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse("products")
        self.product_data = {
            "name": "Example product",
            "price": 32.15,
        }

    def test_response_status(self):
        response = self.client.post(self.url, data=self.product_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_object_saved(self):
        response = self.client.post(self.url, data=self.product_data)
        self.assertTrue(Product.objects.filter(**self.product_data).exists())
