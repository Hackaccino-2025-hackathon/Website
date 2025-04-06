# from django.db import models
# from django.contrib.auth.models import User

# class MarkingScheme(models.Model):
#     teacher = models.ForeignKey(User, on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True)

# class MarkingSchemeQuestion(models.Model):
#     marking_scheme = models.ForeignKey(MarkingScheme, on_delete=models.CASCADE, related_name="questions")
#     question_number = models.IntegerField()
#     correct_answer = models.TextField()
#     total_marks = models.FloatField()
#     partial_grading_criteria = models.JSONField(default=dict)

#     def __str__(self):
#         return f"Q{self.question_number} - {self.total_marks} Marks"

# class StudentAnswerSheet(models.Model):
#     student_name = models.CharField(max_length=255)
#     uploaded_at = models.DateTimeField(auto_now_add=True)
#     processed = models.BooleanField(default=False)

# class StudentAnswer(models.Model):
#     answer_sheet = models.ForeignKey(StudentAnswerSheet, on_delete=models.CASCADE, related_name="answers")
#     student_id = models.ForeignKey(User, on_delete = models.CASCADE)
#     question_number = models.IntegerField()
#     student_answer = models.TextField()
#     marks_awarded = models.FloatField(default = 0.0)



from django.db import models

class MarkingScheme(models.Model):
    # teacher = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    question = models.IntegerField()
    extracted_text = models.TextField()
    uploaded_file = models.FileField(upload_to = "marking_scheme/")

    def __str__(self):
        return f"Question {self.question} - {self.teacher.username}"

class StudentAnswer(models.Model):
    student_name = models.CharField(max_length = 100)
    student_id = models.CharField(max_length = 50)
    question_number = models.IntegerField()
    extracted_text = models.TextField()
    uploaded_file = models.FileField(upload_to = "student_answers/")
    score = models.FloatField(null = True, blank = True)

    def __str__(self):
        return f"{self.student_name} - Q{self.question_number}"