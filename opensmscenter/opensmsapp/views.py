import os
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from twilio.rest import Client


from .models import Contact,Outbound
from .serializers import *

@api_view(['GET', 'POST'])
def contacts_list(request):
    if request.method == 'GET':
        data = Contact.objects.all()
        serializer = ContactSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def contacts_detail(request, pk):
    try:
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ContactSerializer(contact, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST','GET'])
def messages(request):
    if request.method == 'GET':
        data = Outbound.objects.all()
        serializer = OutboundSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':

        serializer = OutboundSerializer(data=request.data)
        if serializer.is_valid():
            account_sid = os.environ['TWILIO_ACCOUNT_SID']
            auth_token = os.environ['TWILIO_AUTH_TOKEN']
            client = Client(account_sid, auth_token)
            message=client.messages.create(body=serializer.validated_data.get('text'),from_='+18449263083',to='+14082037554')
            print("Message \""+serializer.validated_data.get('text')+"\" sent with SID "+message.sid)
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
#def hello_world(request):
#    return render(request, 'hello_world.html', {})


