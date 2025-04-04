const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const GEMINI_API_KEY = "AIzaSyCaflwoMklUmnTvOyb2EEu0mZKnxxF8mjs";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const summarizeContent = async (textContent) => {
  try {
    console.log("Sending content to Gemini for summarization...");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
Summarize the following content in a clear and concise manner. 
Make sure to preserve key points and important details:

${textContent}

[NOTE: Provide the summary in markdown format for better readability. Do not add extra narration.]
    `;

    const response = await model.generateContent([prompt]);
    const result = response.response.text();

    console.log("Summarized content received:", result);
    return result;
  } catch (error) {
    console.error("Error summarizing content:", error);
    return "Failed to generate summary.";
  }
};

module.exports = summarizeContent;
