# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .models import MarkingScheme, StudentAnswer
# from .utils import extract_text_from_image, grade_answer
# import tempfile
# import os


# # from rest_framework.permissions import IsAuthenticated
# # from rest_framework.decorators import api_view, permission_classes

# # @api_view(["POST"])
# # # @permission_classes([IsAuthenticated])
# # def upload_marking_scheme(request):
# #     try:
# #         print("Authenticated user:", request.user)  # Debug print
# #         print("Files received:", request.FILES)
# #         print("POST data:", request.POST)
# #         print("Data:", request.data)

# #         file = request.FILES.get('file')
# #         question_number = request.data.get('question_number')

# #         if not file:
# #             return Response({
# #                 "error": "Missing file",
# #                 "received_files": list(request.FILES.keys()),
# #                 "received_data": request.data
# #             }, status=400)

# #         if not question_number:
# #             return Response({"error": "Missing question number"}, status=400)

# #         # Check if file is actually an image
# #         if not file.content_type.startswith('image/'):
# #             return Response({"error": "Uploaded file is not an image"}, status=400)

# #         # Use NamedTemporaryFile instead of temporary_file_path()
# #         with tempfile.NamedTemporaryFile(delete=False) as temp_file:
# #             for chunk in file.chunks():
# #                 temp_file.write(chunk)
# #             temp_file_path = temp_file.name

# #         extracted_text = extract_text_from_image(temp_file_path)
        
# #         # Clean up the temporary file
# #         os.unlink(temp_file_path)
        
# #         marking_scheme = MarkingScheme.objects.create(
# #             teacher=request.user,
# #             question_number=question_number,
# #             extracted_text=extracted_text,
# #             uploaded_file=file
# #         )

# #         return Response({
# #             "message": "Marking scheme uploaded successfully!",
# #             "id": marking_scheme.id
# #         })

# #     except Exception as e:
# #         logging.exception("Error in upload_marking_scheme")
# #         return Response({
# #             "error": "Failed to process upload",
# #             "details": str(e)
# #         }, status=500)
    
# @api_view(["POST"])
# def upload_marking_scheme(request):
#     try:
#         # Debug prints to help identify the issue
#         print("Files received:", request.FILES)
#         print("POST data:", request.POST)
#         print("Data:", request.data)

#         file = request.FILES.get('file')
#         question_number = request.data.get('question_number')

#         if not file:
#             return Response({
#                 "error": "Missing file",
#                 "received_files": list(request.FILES.keys()),
#                 "received_data": request.data
#             }, status=400)

#         if not question_number:
#             return Response({"error": "Missing question number"}, status=400)

#         # Check if file is actually an image
#         if not file.content_type.startswith('image/'):
#             return Response({"error": "Uploaded file is not an image"}, status=400)

#         # Use NamedTemporaryFile instead of temporary_file_path()
#         with tempfile.NamedTemporaryFile(delete=False) as temp_file:
#             for chunk in file.chunks():
#                 temp_file.write(chunk)
#             temp_file_path = temp_file.name

#         extracted_text = extract_text_from_image(temp_file_path)
        
#         # Clean up the temporary file
#         os.unlink(temp_file_path)
        
#         marking_scheme = MarkingScheme.objects.create(
#             question=question_number,  # Ensure field name matches the model
#             extracted_text=extracted_text,
#             uploaded_file=file
#         )

#         return Response({
#             "message": "Marking scheme uploaded successfully!",
#             "id": marking_scheme.id
#         })

#     except Exception as e:
#         return Response({
#             "error": "Failed to process upload",
#             "details": str(e)
#         }, status=500)


# @api_view(["POST"])
# def uploaded_student_answer(request):
#     # Extract data from request
#     file = request.FILES.get('file')
#     student_name = request.data.get('student_name', '').strip()
#     student_id = request.data.get('student_id', '').strip()
#     question_number = request.data.get('question_number')

#     # Comprehensive validation
#     errors = {}
    
#     if not file:
#         errors['file'] = 'File is required'
    
#     if not student_name:
#         errors['student_name'] = 'Student name is required'
    
#     if not student_id:
#         errors['student_id'] = 'Student ID is required'
    
#     if not question_number:
#         errors['question_number'] = 'Question number is required'
    
#     # If any errors, return detailed response
#     if errors:
#         return Response({
#             "error": "Missing or invalid data",
#             "details": errors
#         }, status=400)

#     try:
#         # Convert question_number to integer
#         question_number = int(question_number)
#     except ValueError:
#         return Response({
#             "error": "Invalid question number",
#             "details": "Question number must be an integer"
#         }, status=400)

#     # Validate file type (optional, but recommended)
#     if not file.content_type.startswith('image/'):
#         return Response({
#             "error": "Invalid file type",
#             "details": "Only image files are allowed"
#         }, status=400)

#     try:
#         # Use temporary file path for text extraction
#         with tempfile.NamedTemporaryFile(delete=False) as temp_file:
#             for chunk in file.chunks():
#                 temp_file.write(chunk)
#             temp_file_path = temp_file.name

#         # Extract text from image
#         extracted_text = extract_text_from_image(temp_file_path)
        
#         # Clean up temporary file
#         os.unlink(temp_file_path)

#         # Create student answer record
#         student_answer = StudentAnswer.objects.create(
#             student_name=student_name,
#             student_id=student_id,
#             question_number=question_number,
#             extracted_text=extracted_text,
#             uploaded_file=file
#         )

#         return Response({
#             "message": "Student answer uploaded successfully",
#             "student_answer_id": student_answer.id
#         }, status=201)

#     except Exception as e:
#         # Log the full exception for debugging
#         logging.exception("Error in uploaded_student_answer")
#         return Response({
#             "error": "Upload failed",
#             "details": str(e)
#         }, status=500)
    

# import logging
# from django.db import transaction
# from rest_framework.permissions import IsAuthenticated


# # @api_view(["POST"])
# # # @permission_classes([IsAuthenticated])  # Ensure authentication
# # def start_grading(request):
# #     try:
# #         student_answers = StudentAnswer.objects.all()

# #         if not student_answers.exists():
# #             return Response({"message": "No student answers found."}, status=404)

# #         with transaction.atomic():  # Ensure safe DB transactions
# #             for student_answer in student_answers:
# #                 try:
# #                     marking_scheme = MarkingScheme.objects.get(question_number=student_answer.question_number)
# #                     score = grade_answer(student_answer.extracted_text, marking_scheme.extracted_text)

# #                     # Ensure score field exists before saving
# #                     if hasattr(student_answer, 'score'):
# #                         student_answer.score = score
# #                         student_answer.save()
# #                     else:
# #                         logging.error(f"StudentAnswer model is missing 'score' field for ID {student_answer.id}")

# #                 except MarkingScheme.DoesNotExist:
# #                     logging.warning(f"No MarkingScheme found for question_number: {student_answer.question_number}")
# #                     continue  # Skip to next answer
# #                 except Exception as e:
# #                     logging.error(f"Error grading student ID {student_answer.id}: {str(e)}")

# #         return Response({"message": "Grading Completed"}, status=200)

# #     except Exception as e:
# #         logging.exception("Unexpected error in start_grading")
# #         return Response({"error": "Grading failed", "details": str(e)}, status=500)

# # from django.shortcuts import render
# # from rest_framework.response import Response
# # from rest_framework.decorators import api_view, permission_classes
# # from rest_framework.permissions import IsAuthenticated, AllowAny
# # from .models import MarkingScheme, StudentAnswer
# # from .utils import extract_text_from_image, grade_answer

# # @api_view(["POST"])
# # @permission_classes([AllowAny])  # Ensures only authenticated users can upload
# # def upload_marking_scheme(request):
# #     """
# #     Uploads a marking scheme image, extracts text, and saves it in the database.
# #     """
# #     try:
# #         file = request.FILES.get('file')
# #         question_number = request.data.get('question_number')

# #         if not file or not question_number:
# #             return Response({"error": "Missing file or question number"}, status=400)

# #         # Convert question_number to int for safety
# #         try:
# #             question_number = int(question_number)
# #         except ValueError:
# #             return Response({"error": "Invalid question number format"}, status=400)

# #         # Read file as bytes (fix for temporary_file_path issue)
# #         extracted_text = extract_text_from_image(file.read())

# #         # Save marking scheme in the database
# #         marking_scheme = MarkingScheme.objects.create(
# #             teacher=request.user,
# #             question_number=question_number,
# #             extracted_text=extracted_text,
# #             uploaded_file=file
# #         )

# #         return Response({"message": "Marking scheme uploaded successfully!"}, status=201)

# #     except Exception as e:
# #         print(f"Error in upload_marking_scheme: {str(e)}")
# #         return Response({"error": "Internal server error", "details": str(e)}, status=500)


# # @api_view(["POST"])
# # @permission_classes([AllowAny])
# # def uploaded_student_answer(request):
# #     """
# #     Uploads a student's answer script, extracts text, and saves it in the database.
# #     """
# #     try:
# #         file = request.FILES.get('file')
# #         student_name = request.data.get('student_name')
# #         student_id = request.data.get('student_id')
# #         question_number = request.data.get('question_number')

# #         if not file or not student_name or not student_id or not question_number:
# #             return Response({"error": "Missing file, student name, student ID, or question number"}, status=400)

# #         # Convert question_number to int
# #         try:
# #             question_number = int(question_number)
# #         except ValueError:
# #             return Response({"error": "Invalid question number format"}, status=400)

# #         # Read file as bytes for OCR
# #         extracted_text = extract_text_from_image(file.read())

# #         # Save student answer in the database
# #         student_answer = StudentAnswer.objects.create(
# #             student_name=student_name,
# #             student_id=student_id,
# #             question_number=question_number,
# #             extracted_text=extracted_text,
# #             uploaded_file=file
# #         )

# #         return Response({"message": "Student answer uploaded successfully"}, status=201)

# #     except Exception as e:
# #         print(f"Error in uploaded_student_answer: {str(e)}")
# #         return Response({"error": "Internal server error", "details": str(e)}, status=500)


# # @api_view(["POST"])
# # @permission_classes([AllowAny])
# # def start_grading(request):
# #     """
# #     Grades all student answers by comparing them with the marking scheme.
# #     """
# #     try:
# #         student_answers = StudentAnswer.objects.all()
# #         graded_count = 0

# #         for student_answer in student_answers:
# #             try:
# #                 # Get marking scheme for the same question
# #                 marking_scheme = MarkingScheme.objects.get(question_number=student_answer.question_number)
# #                 score = grade_answer(student_answer.extracted_text, marking_scheme.extracted_text)

# #                 # Save the score in the database
# #                 student_answer.score = score
# #                 student_answer.save()
# #                 graded_count += 1

# #             except MarkingScheme.DoesNotExist:
# #                 print(f"No marking scheme found for question {student_answer.question_number}. Skipping.")
# #                 continue

# #         return Response({"message": f"Grading completed. {graded_count} answers graded."}, status=200)

# #     except Exception as e:
# #         print(f"Error in start_grading: {str(e)}")
# #         return Response({"error": "Internal server error", "details": str(e)}, status=500)





import os
import tempfile
import logging
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import transaction
from sentence_transformers import SentenceTransformer, util
from .models import MarkingScheme, StudentAnswer  # Ensure models are correctly imported
from .utils import extract_text_from_image, grade_answer  # Ensure this function is properly defined

# Load the NLP model once to avoid reloading it each time
nlp_model = SentenceTransformer('all-MiniLM-L6-v2')

def grade_answer(student_text, marking_scheme_text):
    student_embedding = nlp_model.encode(student_text)
    scheme_embedding = nlp_model.encode(marking_scheme_text)

    similarity_score = util.pytorch_cos_sim(student_embedding, scheme_embedding)
    return max(0, round(similarity_score.item() * 100, 2))  # Ensure it's a single float value

# @api_view(["POST"])
# def start_grading(request):
#     try:
#         StudentAnswer.objects.update(score=None)  # Reset all scores

#         student_answers = StudentAnswer.objects.all()

#         if not student_answers.exists():
#             logging.warning("❌ No student answers found.")
#             return Response({"message": "No student answers found."}, status=404)

#         graded_answers = []  # Store grading results

#         with transaction.atomic():  # Ensure safe DB transactions
#             for student_answer in student_answers:
#                 try:
#                     print(f"📌 Processing: {student_answer.student_name} (Q{student_answer.question_number})")

#                     # Ensure we are using `question_number` instead of `question`
#                     marking_scheme = MarkingScheme.objects.filter(question_number=student_answer.question_number).first()
                    
#                     if not marking_scheme:
#                         logging.warning(f"⚠️ No MarkingScheme found for Q{student_answer.question_number}")
#                         continue  # Skip to next answer

#                     print(f"✅ Marking Scheme found for Q{student_answer.question_number}")

#                     # Ensure grade_answer is working correctly
#                     score = grade_answer(student_answer.extracted_text, marking_scheme.extracted_text)
                    
#                     if score is None:
#                         logging.warning(f"⚠️ Score is None for {student_answer.student_name}, Q{student_answer.question_number}")
#                         continue
                    
#                     score = max(0, score)  # Ensure score is not negative
#                     # Save score
#                     student_answer.score = score
#                     student_answer.save()

#                     # Store graded result
#                     graded_answers.append({
#                         "student_name": student_answer.student_name,
#                         "student_id": student_answer.student_id,
#                         "question_number": student_answer.question_number,
#                         "score": score
#                     })

#                     print(f"🎯 Graded: {student_answer.student_name} (Q{student_answer.question_number}) -> Score: {score}")

#                 except Exception as e:
#                     logging.exception(f"❌ Error grading {student_answer.student_name} (Q{student_answer.question_number}): {e}")

#         return Response({
#             "message": "Grading Completed",
#             "graded_answers": graded_answers
#         }, status=200)

#     except Exception as e:
#         logging.exception(f"🚨 Unexpected error: {e}")
#         return Response({"error": "Grading failed", "details": str(e)}, status=500)
# @api_view(["POST"])
# def start_grading(request):
#     try:
#         # 🔴 DELETE previous grading results before starting fresh
#         StudentAnswer.objects.update(score=None)  # Reset all scores
        
#         student_answers = StudentAnswer.objects.all()

#         if not student_answers.exists():
#             logging.warning("❌ No student answers found.")
#             return Response({"message": "No student answers found."}, status=404)

#         graded_answers = []  # Store grading results

#         with transaction.atomic():  # Ensure safe DB transactions
#             for student_answer in student_answers:
#                 try:
#                     print(f"📌 Processing: {student_answer.student_name} (Q{student_answer.question_number})")

#                     marking_scheme = MarkingScheme.objects.filter(question_number=student_answer.question_number).first()
                    
#                     if not marking_scheme:
#                         logging.warning(f"⚠️ No MarkingScheme found for Q{student_answer.question_number}")
#                         continue  # Skip to next answer

#                     print(f"✅ Marking Scheme found for Q{student_answer.question_number}")

#                     # 🟢 Calculate Score (Now `grade_answer()` ensures the score is between 0-100)
#                     score = grade_answer(student_answer.extracted_text, marking_scheme.extracted_text)

#                     # Save score
#                     student_answer.score = score
#                     student_answer.save()

#                     # Store graded result
#                     graded_answers.append({
#                         "student_name": student_answer.student_name,
#                         "student_id": student_answer.student_id,
#                         "question_number": student_answer.question_number,
#                         "score": score
#                     })

#                     print(f"🎯 Graded: {student_answer.student_name} (Q{student_answer.question_number}) -> Score: {score}")

#                 except Exception as e:
#                     logging.exception(f"❌ Error grading {student_answer.student_name} (Q{student_answer.question_number}): {e}")

#         return Response({
#             "message": "Grading Completed",
#             "graded_answers": graded_answers
#         }, status=200)

#     except Exception as e:
#         logging.exception(f"🚨 Unexpected error: {e}")
#         return Response({"error": "Grading failed", "details": str(e)}, status=500)

@api_view(["POST"])
def upload_marking_scheme(request):
    try:
        print("Files received:", request.FILES)
        print("POST data:", request.POST)

        file = request.FILES.get('file')
        question_number = request.data.get('question_number')

        if not file:
            return Response({
                "error": "Missing file",
                "received_files": list(request.FILES.keys()),
                "received_data": request.data
            }, status=400)

        if not question_number:
            return Response({"error": "Missing question number"}, status=400)

        if not file.content_type.startswith('image/'):
            return Response({"error": "Uploaded file is not an image"}, status=400)

        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            for chunk in file.chunks():
                temp_file.write(chunk)
            temp_file_path = temp_file.name

        extracted_text = extract_text_from_image(temp_file_path)
        os.unlink(temp_file_path)

        marking_scheme = MarkingScheme.objects.create(
            question_number=question_number,  # Ensure field name matches the model
            extracted_text=extracted_text,
            uploaded_file=file
        )

        return Response({
            "message": "Marking scheme uploaded successfully!",
            "id": marking_scheme.id
        }, status=201)

    except Exception as e:
        logging.exception("Error in upload_marking_scheme")
        return Response({
            "error": "Failed to process upload",
            "details": str(e)
        }, status=500)

@api_view(["POST"])
def uploaded_student_answer(request):
    file = request.FILES.get('file')
    student_name = request.data.get('student_name', '').strip()
    student_id = request.data.get('student_id', '').strip()
    question_number = request.data.get('question_number')

    errors = {}
    
    if not file:
        errors['file'] = 'File is required'
    
    if not student_name:
        errors['student_name'] = 'Student name is required'
    
    if not student_id:
        errors['student_id'] = 'Student ID is required'
    
    if not question_number:
        errors['question_number'] = 'Question number is required'
    
    if errors:
        return Response({
            "error": "Missing or invalid data",
            "details": errors
        }, status=400)

    try:
        question_number = int(question_number)
    except ValueError:
        return Response({
            "error": "Invalid question number",
            "details": "Question number must be an integer"
        }, status=400)

    if not file.content_type.startswith('image/'):
        return Response({
            "error": "Invalid file type",
            "details": "Only image files are allowed"
        }, status=400)

    try:
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            for chunk in file.chunks():
                temp_file.write(chunk)
            temp_file_path = temp_file.name

        extracted_text = extract_text_from_image(temp_file_path)
        os.unlink(temp_file_path)

        student_answer = StudentAnswer.objects.create(
            student_name=student_name,
            student_id=student_id,
            question_number=question_number,
            extracted_text=extracted_text,
            uploaded_file=file
        )

        return Response({
            "message": "Student answer uploaded successfully",
            "student_answer_id": student_answer.id
        }, status=201)

    except Exception as e:
        logging.exception("Error in uploaded_student_answer")
        return Response({
            "error": "Upload failed",
            "details": str(e)
        }, status=500)


# import os
# import tempfile
# import logging
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from django.db import transaction
# from sentence_transformers import SentenceTransformer, util
# from .models import MarkingScheme, StudentAnswer
# from .utils import extract_text_from_image

# # Load the NLP model once to avoid reloading it each time
# nlp_model = SentenceTransformer('all-MiniLM-L6-v2')

# def grade_answer(student_text, marking_scheme_text):
#     student_embedding = nlp_model.encode(student_text)
#     scheme_embedding = nlp_model.encode(marking_scheme_text)
#     similarity_score = util.pytorch_cos_sim(student_embedding, scheme_embedding)
#     return round(similarity_score.item() * 100, 2)  # Ensure it's a single float value

# @api_view(["POST"])
# def start_grading(request):
#     try:
#         student_answers = StudentAnswer.objects.all()

#         if not student_answers.exists():
#             logging.warning("❌ No student answers found.")
#             return Response({"message": "No student answers found."}, status=404)

#         graded_answers = []  # Store grading results

#         with transaction.atomic():  # Ensure safe DB transactions
#             for student_answer in student_answers:
#                 try:
#                     print(f"📌 Processing: {student_answer.student_name} (Q{student_answer.question_number})")

#                     marking_scheme = MarkingScheme.objects.filter(question=student_answer.question_number).first()
                    
#                     if not marking_scheme:
#                         logging.warning(f"⚠️ No MarkingScheme found for Q{student_answer.question_number}")
#                         continue  # Skip to next answer

#                     print(f"✅ Marking Scheme found for Q{student_answer.question_number}")

#                     # Ensure grade_answer is working correctly
#                     score = grade_answer(student_answer.extracted_text, marking_scheme.extracted_text)
                    
#                     if score is None:
#                         logging.warning(f"⚠️ Score is None for {student_answer.student_name}, Q{student_answer.question_number}")
#                         continue

#                     # Save score
#                     student_answer.score = score
#                     student_answer.save()

#                     # Store graded result
#                     graded_answers.append({
#                         "student_name": student_answer.student_name,
#                         "student_id": student_answer.student_id,
#                         "question_number": student_answer.question_number,  # Fix here
#                         "score": score
#                     })

#                     print(f"🎯 Graded: {student_answer.student_name} (Q{student_answer.question_number}) -> Score: {score}")

#                 except Exception as e:
#                     logging.exception(f"❌ Error grading {student_answer.student_name} (Q{student_answer.question_number}): {e}")

#         return Response({
#             "message": "Grading Completed",
#             "graded_answers": graded_answers
#         }, status=200)
#     except Exception as e:
#         logging.exception(f"🚨 Unexpected error: {e}")
#         return Response({"error": "Grading failed", "details": str(e)}, status=500)



@api_view(["POST"])
def start_grading(request):
    try:
        student_answers = StudentAnswer.objects.all()

        if not student_answers.exists():
            return Response({"message": "No student answers found."}, status=404)

        graded_answers = []

        with transaction.atomic():
            for student_answer in student_answers:
                print(f"📌 Processing: {student_answer.student_name} (Q{student_answer.question_number})")

                marking_scheme = MarkingScheme.objects.filter(question=student_answer.question_number).first()

                if not marking_scheme:
                    print(f"⚠️ No MarkingScheme found for Q{student_answer.question_number}")
                    continue  

                print(f"✅ Marking Scheme found for Q{student_answer.question_number}")

                # Use improved grading
                score = grade_answer(student_answer.extracted_text, marking_scheme.extracted_text)

                if score is None:
                    print(f"⚠️ Score is None for {student_answer.student_name}, Q{student_answer.question_number}")
                    continue

                student_answer.score = score
                student_answer.save()

                graded_answers.append({
                    "student_name": student_answer.student_name,
                    "student_id": student_answer.student_id,
                    "question_number": student_answer.question_number,
                    "score": score
                })

                print(f"🎯 Graded: {student_answer.student_name} (Q{student_answer.question_number}) -> Score: {score}")

        return Response({"message": "Grading Completed", "graded_answers": graded_answers}, status=200)

    except Exception as e:
        print(f"🚨 Unexpected error: {e}")
        return Response({"error": "Grading failed", "details": str(e)}, status=500)
