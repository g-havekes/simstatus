# Generated by Django 2.2.4 on 2019-08-17 21:50

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instances', '0010_auto_20190729_1841'),
    ]

    operations = [
        migrations.CreateModel(
            name='Simuconf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(unique=True)),
                ('data', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='instance',
            name='debug',
            field=models.IntegerField(default=2, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)]),
        ),
        migrations.AlterUniqueTogether(
            name='pak',
            unique_together={('name', 'version')},
        ),
        migrations.AlterUniqueTogether(
            name='save',
            unique_together={('name', 'version')},
        ),
    ]
