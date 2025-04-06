from django.urls import path
from .views import upload_marking_scheme, uploaded_student_answer, start_grading

urlpatterns = [
    path('upload-marking-scheme/', upload_marking_scheme, name = 'upload_marking_scheme'),
    path('upload-student-answer/', uploaded_student_answer, name = 'uploaded-student-answer'),
    path('start-grading/', start_grading, name = 'start_grading'),
]
