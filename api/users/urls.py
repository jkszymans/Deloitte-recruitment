from django.urls import path
from users.views import UsersViewSet

from rest_framework import routers

router = routers.SimpleRouter()
router.register("", UsersViewSet, basename="users")
urlpatterns = router.urls
