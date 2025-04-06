import openai
import os

# Set your API key
client = openai.OpenAI(api_key="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")  # Alternatively, use os.environ["OPENAI_API_KEY"]

# Test request to OpenAI's GPT model
response = client.chat.completions.create(
    model="gpt-4",  # Use "gpt-3.5-turbo" if needed
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello, how are you?"}
    ]
)

# Print the response
print(response.choices[0].message.content)
