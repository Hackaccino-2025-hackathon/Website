# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # from langchain.prompts import PromptTemplate
# # from langchain.chains import LLMChain
# # from langchain_ollama import OllamaLLM
# # from dotenv import load_dotenv
# # import logging
# # import os

# # # Load environment variables
# # load_dotenv()

# # # Set up logging
# # logging.basicConfig(level=logging.INFO)
# # logger = logging.getLogger(__name__)

# # app = Flask(__name__)
# # CORS(app)  # Enable Cross-Origin Requests

# # # Define prompt template
# # prompt = PromptTemplate(
# #     input_variables=["course_name"],
# #     template="""
# #     You are an AI assistant that generates structured course content just like a teacher who wants to teach a topic to their students by breaking it into chapters. 
# #     Create a course structure for "{course_name}" with a maximum of 6 chapters.
# #     Each chapter should contain 4-6 topics.

# #     Example format:
    
# #     Course Name: {course_name}

# #     Chapter 1: <Chapter Name>
# #       - Topic 1: <Topic Name>
# #       - Topic 2: <Topic Name>
    
# #     Chapter 2: <Chapter Name>
# #       - Topic 1: <Topic Name>
# #       - Topic 2: <Topic Name>

# #     Generate the course outline in the given format.
# #     """
# # )

# # # Initialize Ollama model
# # try:
# #     llm = OllamaLLM(model="mistral", temperature=0.7)
# #     logger.info("Ollama model loaded successfully.")
# # except Exception as e:
# #     logger.error(f"Error initializing Ollama model: {e}")
# #     llm = None  # Prevent app from crashing

# # @app.route('/generate_course', methods=['POST'])
# # def generate_course():
# #     """Generate a structured course outline using an AI model."""
# #     data = request.get_json()

# #     # Input validation
# #     if not data or "course_name" not in data:
# #         return jsonify({"error": "Invalid input, 'course_name' is required"}), 400

# #     course_name = data["course_name"]

# #     if not llm:
# #         return jsonify({"error": "LLM Model not initialized"}), 500

# #     try:
# #         chain = LLMChain(llm=llm, prompt=prompt)
# #         result = chain.invoke({"course_name": course_name})
# #         return jsonify({"course_outline": result})

# #     except Exception as e:
# #         logger.error(f"Error generating course outline: {e}")
# #         return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True)

# from flask import Flask, request, jsonify
# from langchain.prompts import PromptTemplate
# from langchain.chains import LLMChain
# from langchain_ollama import OllamaLLM

# app = Flask(__name__)

# # Define the prompt template
# prompt = PromptTemplate(
#     input_variables=["course_name"],
#     template="""
#     You are an AI assistant that generates structured course content like a teacher. 
#     Create a course structure for "{course_name}" with a maximum of 6 chapters.
#     Each chapter should contain 4-6 topics.

#     Example:

#     Course Name: {course_name}

#     Chapter 1: <Chapter Name>
#       - Topic 1: <Topic Name>
#       - Topic 2: <Topic Name>

#     ...
#     """
# )

# # Load model
# llm = OllamaLLM(model="mistral", temperature=0.7)

# @app.route('/')
# def home():
#     return "Flask is running!"

# @app.route("/generate_course", methods=["GET", "POST"])
# def generate_course():
#     data = request.get_json()
#     if not data or "course_name" not in data:
#         return jsonify({"error": "Missing course_name in request"}), 400

#     course_name = data["course_name"]
#     chain = LLMChain(llm=llm, prompt=prompt)
#     result = chain.invoke({"course_name": course_name})

#     return jsonify({"course_outline": result})

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, jsonify
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_ollama import OllamaLLM

app = Flask(__name__)

# Define the prompt template
prompt = PromptTemplate(
    input_variables=["course_name"],
    template="""
    You are an AI assistant that generates structured course content like a teacher. 
    Create a course structure for "{course_name}" with a maximum of 6 chapters.
    Each chapter should contain 4-6 topics.

    Example:

    Course Name: {course_name}

    Chapter 1: <Chapter Name>
      - Topic 1: <Topic Name>
      - Topic 2: <Topic Name>
    
    ...
    """
)

# Load the LLM model
llm = OllamaLLM(model="mistral", temperature=0.7)

@app.route("/", methods=["GET"])
def home():
    return "Flask is running!"

@app.route("/generate_course", methods=["POST"])
def generate_course():
    """Only allows POST requests to generate course content."""
    
    # Ensure JSON request
    if request.content_type != "application/json":
        return jsonify({"error": "Content-Type must be application/json"}), 400

    data = request.get_json()
    if not data or "course_name" not in data:
        return jsonify({"error": "Missing 'course_name' in request"}), 400

    course_name = data["course_name"]
    chain = LLMChain(llm=llm, prompt=prompt)
    result = chain.invoke({"course_name": course_name})

    return jsonify({"course_outline": result})

# Only allow POST requests, block other methods
@app.route("/generate_course", methods=["GET", "PUT", "DELETE", "PATCH", "OPTIONS"])
def method_not_allowed():
    return jsonify({"error": "Method Not Allowed"}), 405

if __name__ == "__main__":
    app.run(debug=True)
