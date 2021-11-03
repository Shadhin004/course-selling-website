from django.urls import path
from base.views import course_views as views


urlpatterns = [
    path("", views.getCourses, name="courses"),
    path("category/science/", views.getCourseCategory, name="coursesBycategory"),
    path("<str:pk>/", views.getCourse, name="course"),
]
