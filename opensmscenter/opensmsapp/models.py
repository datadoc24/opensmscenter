from django.db import models

class Contact(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

class Outbound(models.Model):
    text = models.CharField("Message", max_length=240)
    txTimestamp = models.DateTimeField("Sent", auto_now_add=True)

    def __str__(self):
        return self.text

class Inbound(models.Model):
    text = models.CharField("Message", max_length=240)
    senderphone = models.CharField(max_length=20)
    rxTimestamp = models.DateTimeField("Received", auto_now_add=True)

    def __str__(self):
        return self.text
