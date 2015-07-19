from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from authentication.models import Account

class AccountSerializer(serializers.ModelSerializer):
	password = serializers.CharField(write_only=True, required=False)
	confirm_password = serializers.CharField(write_only=True, required=False)

	class Meta:
		model = Account
		"""	
			By default, all the model fields on the class will be mapped to 
			a corresponding serializer fields.
			If you only want a subset of the default fields to be used in a 
			model serializer, you can do so using fields or exclude options
		"""
		fields = ('id', 'email', 'username', 'created_at', 'updated_at',
				  'first_name', 'last_name', 'tagline', 'password',
				  'confirm_password',)
		read_only_fields = ('created_at', 'updated_at',)


		"""	
			Deserialization is handled by the .create() and .update() methods. 
			When creating a new object, such as an Account, .create() is used. 
			When we later update that Account, .update() is used.
		"""
		def create(self, validated_data):
			return Account.objects.create(**validated_data)
		
		def update(self, instance, validated_data):
			instance.username = validated_data.get('username', instance.username)
			instance.tagline = validated_data.get('tagline', instance.tagline)

			instance.save()

			password = validated_data.get('password', None)
			confirm_password = validated_data.get('confirm_password', None)
			
			if password and confirm_password and password == confirm_password:
				instance.set_password(password)
				instance.save()

			update_session_auth_hash(self.context.get('request'), instance)
			
			return instance
				
