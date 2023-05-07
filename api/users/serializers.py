from django.shortcuts import render
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "first_name", "last_name", "username", "email", "date_joined")
        read_only_fields = (
            "id",
            "date_joined",
        )
