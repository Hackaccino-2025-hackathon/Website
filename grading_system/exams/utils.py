import openai
import base64
from django.conf import settings
from sentence_transformers import SentenceTransformer, util
import google.generativeai as genai



def extract_text_from_image(image_path):
    try:
        # Load image and convert it to base64
        with open(image_path, "rb") as image_file:
            base64_image = base64.b64encode(image_file.read()).decode("utf-8")

        # Configure Gemini API with your API key
        genai.configure(api_key = settings.GEMINI_API_KEY)

        # Load the Gemini model
        model = genai.GenerativeModel("gemini-1.5-pro")

        # Generate a response
        response = model.generate_content([
            "Extract all text from this image.",
            {"mime_type": "image/jpeg", "data": base64_image}
        ])

        # Extract the response text
        extracted_text = response.text if response else "No text extracted."
        return extracted_text

    except Exception as e:
        print(f"Error extracting text: {e}")
        return ""

nlp_model = SentenceTransformer('all-MiniLM-L6-v2')

def grade_answer(student_text, marking_scheme_text):
    student_embedding = nlp_model.encode(student_text)
    scheme_embedding = nlp_model.encode(marking_scheme_text)

    similarity_score = util.pytorch_cos_sim(student_embedding, scheme_embedding)
    scaled_score = (similarity_score + 1) / 2 * 100  # Converts -1 → 0 and 1 → 100

    return round(scaled_score, 2)


# import numpy as np
# from sentence_transformers import SentenceTransformer, util
# from sklearn.feature_extraction.text import TfidfVectorizer
# from nltk.tokenize import word_tokenize
# from difflib import SequenceMatcher
# import nltk

# nltk.download('punkt')

# nlp_model = SentenceTransformer('all-MiniLM-L6-v2')

# def jaccard_similarity(text1, text2):
#     words1 = set(word_tokenize(text1.lower()))
#     words2 = set(word_tokenize(text2.lower()))
#     if not words1 or not words2:
#         return 0  # Prevent NaN issues
#     return len(words1.intersection(words2)) / len(words1.union(words2))

# def sequence_similarity(text1, text2):
#     return SequenceMatcher(None, text1.lower(), text2.lower()).ratio()

# def tfidf_similarity(text1, text2):
#     vectorizer = TfidfVectorizer()
#     vectors = vectorizer.fit_transform([text1, text2]).toarray()
#     if np.linalg.norm(vectors[0]) == 0 or np.linalg.norm(vectors[1]) == 0:
#         return 0  # Prevent division by zero errors
#     cosine = np.dot(vectors[0], vectors[1]) / (np.linalg.norm(vectors[0]) * np.linalg.norm(vectors[1]))
#     return round(cosine * 100, 2)

# def grade_answer(student_text, marking_scheme_text):
#     if not student_text.strip() or not marking_scheme_text.strip():
#         return 0  # Ensure empty answers don't cause errors

#     # Compute BERT similarity and scale to 100
#     student_embedding = nlp_model.encode(student_text)
#     scheme_embedding = nlp_model.encode(marking_scheme_text)
#     bert_score = (util.pytorch_cos_sim(student_embedding, scheme_embedding).item() + 1) / 2 * 100  # Scale 0-100

#     # Compute other similarities
#     jaccard_score = jaccard_similarity(student_text, marking_scheme_text) * 100
#     seq_score = sequence_similarity(student_text, marking_scheme_text) * 100
#     tfidf_score = tfidf_similarity(student_text, marking_scheme_text)

#     # Weighted Score Combination
#     final_score = (bert_score * 0.4) + (tfidf_score * 0.3) + (jaccard_score * 0.2) + (seq_score * 0.1)

#     return round(final_score, 2) if 0 <= final_score <= 100 else 0  # Ensure score stays valid
