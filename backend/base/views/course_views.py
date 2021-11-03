from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Course
from base.serializer import CourseSerializer

from rest_framework import status


@api_view(["GET"])
def getCourses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getCourse(request, pk):
    course = Course.objects.get(_id=pk)
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)


@api_view(["GET"])
def getCourseCategory(request):
    courseBycat = Course.objects.filter(category="science")
    serializer = CourseSerializer(courseBycat, many=False)
    return Response(serializer.data)
