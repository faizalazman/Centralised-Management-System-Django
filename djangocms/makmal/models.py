from django.db import models
from django.contrib.auth.models import User


class Report(models.Model):
    project_name = models.CharField(max_length = 250 )
    contractor_name = models.CharField(max_length = 250)
    pipe_type = models.CharField(max_length = 50)
    pipe_size = models.CharField(max_length = 50)
    done_on = models.DateTimeField()
    created_on = models.DateTimeField(auto_now_add = True)
    updated_on = models.DateTimeField(auto_now = True)
    result_1 = models.IntegerField()
    result_2 = models.IntegerField()
    result_3 = models.IntegerField(blank = True, null = True)
    result_4 = models.IntegerField(blank = True, null = True)
    result_5 = models.IntegerField(blank = True, null = True)
    result_6 = models.IntegerField(blank = True, null = True)
    result_7 = models.IntegerField(blank = True, null = True)
    result_8 = models.IntegerField(blank = True, null = True)
    result_9 = models.IntegerField(blank = True, null = True)
    result_10 = models.IntegerField(blank = True, null = True)

    def __str__(self):
        return self.project_name

    class Meta:
        ordering = ['done_on']