from rest_framework import serializers

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'