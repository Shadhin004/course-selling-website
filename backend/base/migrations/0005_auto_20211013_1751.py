# Generated by Django 3.1.12 on 2021-10-13 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_course_ratingwidth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='certificate',
            field=models.CharField(blank=True, default='Yes', max_length=20, null=True),
        ),
    ]
