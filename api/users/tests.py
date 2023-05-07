from rest_framework.test import APIClient, APITestCase
from django.urls import reverse
from decimal import Decimal
from rest_framework import status
from products.models import Product
from datetime import timedelta, datetime
from django.contrib.auth.models import User


class UsersListViewTestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse("users-list")
        self.example_user_data = {
            "first_name": "Judie",
            "last_name": "Doe",
            "username": "Username123",
            "email": "example@ex.com",
        }
        self.example_user = User.objects.create(**self.example_user_data)
        self.example_user_data[
            "date_joined"
        ] = self.example_user.date_joined.isoformat()
        self.example_user_data["id"] = self.example_user.id

    def test_response_status(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_response_data(self):
        response = self.client.get(self.url)
        response_data = response.data
        expected_response = [self.example_user_data]
        self.assertEqual(expected_response, response_data)

    def test_username_filter(self):
        response = self.client.get(self.url + "?username__icontains=Username123")
        response_data = response.data
        expected_response = [self.example_user_data]
        self.assertEqual(expected_response, response_data)

        response = self.client.get(self.url + "?username__icontains=nonexisting")
        response_data = response.data
        expected_response = []
        self.assertEqual(expected_response, response_data)

    def test_email_filter(self):
        response = self.client.get(self.url + "?email__icontains=example@ex.com")
        response_data = response.data
        expected_response = [self.example_user_data]
        self.assertEqual(expected_response, response_data)

        response = self.client.get(self.url + "?email__icontains=nonexisting")
        response_data = response.data
        expected_response = []
        self.assertEqual(expected_response, response_data)

    def test_date_joined_filter(self):
        response = self.client.get(
            self.url
            + f"?date_joined__date__gte={(datetime.now().date() - timedelta(days=1))}"
        )
        response_data = response.data
        expected_response = [self.example_user_data]
        self.assertEqual(expected_response, response_data)

        response = self.client.get(
            self.url
            + f"?date_joined__date__gte={(datetime.now().date() + timedelta(days=1))}"
        )
        response_data = response.data
        expected_response = []
        self.assertEqual(expected_response, response_data)
