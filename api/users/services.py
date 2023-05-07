from django.contrib.auth.models import User


class UserManager:
    def __init__(self, user: User = None):
        self.user = user
        self.fields = ("username", "email", "first_name", "last_name")

    def create_user(self, **kwargs):
        self.user = User.objects.create(
            username=kwargs.get("username", ""),
            email=kwargs.get("email", ""),
            first_name=kwargs.get("first_name", ""),
            last_name=kwargs.get("last_name", ""),
        )

    def update_user(self, **kwargs):
        assert self.user != None

        for key in self.fields:
            setattr(self.user, key, kwargs.get(key, ""))
        return self.user.save()

    def delete_user(self):
        assert self.user != None

        self.user.delete()
        self.user = None

    def get_user_info(self):
        assert self.user != None

        data = {}
        for field in self.fields:
            data[field] = getattr(self.user, field)

        return data
