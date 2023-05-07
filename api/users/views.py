from rest_framework.viewsets import ModelViewSet
from users.serializers import UserSerializer
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend


class UsersViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {
        "username": ["icontains"],
        "email": ["icontains"],
        "date_joined": [
            "date",
            "date__gt",
            "date__gte",
            "date__lt",
            "date__lte",
        ],
    }
