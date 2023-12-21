from rest_framework import serializers
from .models import Contact,Outbound

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact 
        fields = ('pk', 'name', 'email', 'phone', 'registrationDate')

class OutboundSerializer(serializers.ModelSerializer):

    class Meta:
        model = Outbound 
        fields = ('text',)
