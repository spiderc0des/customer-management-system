from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):

    username = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['user', 'username', 'first_name', 'last_name', 'date_of_birth', 'country', 'city']
        extra_kwargs = {'user': {'read_only': True}}

    def get_username(self, obj):
        return obj.user.username

