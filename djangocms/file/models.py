from django.db import models
from django.utils import timezone
from datetime import datetime,timedelta
from django.contrib.auth.models import User

DEPARTMENT_CHOICES = (
    ('Pentadbiran', 'Pentadbiran'),
    ('Operasi', 'Operasi'),
    ('Pembangunan','Pembangunan'),
    ('Pelanggan','Pelanggan')
)

class File(models.Model):
    assigned_to = models.ManyToManyField(User, blank = True)
    file_name = models.CharField(max_length = 200)
    file_number = models.CharField(max_length = 100)
    department = models.CharField(choices = DEPARTMENT_CHOICES , max_length = 100, blank= True)
    checkout_on = models.DateTimeField(null=True, blank=True)
    overdue = models.BooleanField(default = False)
    returned = models.BooleanField(default = True)

    def __str__(self):
        return self.file_name

    # If duration > 14 days and returned is False, set overdue to True
    def overdue_status(self):
        if (timezone.now() - self.checkout_on) > timedelta(days = 14):
            if self.returned == False:
                is_overdue = File.objects.get(id = self.id)
                is_overdue.overdue = True
                is_overdue.save()
                return True
        else:
            is_returned = File.objects.get(id = self.id)
            is_returned.overdue = False
            is_returned.save()
            return False

    class Meta:
        ordering = ['-overdue','id','department', '-checkout_on']
