# Generated by Django 2.2.3 on 2019-07-13 13:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('instances', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instance',
            name='pak',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='instances.Pak'),
        ),
        migrations.AlterField(
            model_name='instance',
            name='save',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='instances.Save'),
        ),
        migrations.AlterField(
            model_name='pak',
            name='file',
            field=models.FileField(upload_to='paks'),
        ),
        migrations.AlterField(
            model_name='save',
            name='file',
            field=models.FileField(upload_to='saves'),
        ),
    ]