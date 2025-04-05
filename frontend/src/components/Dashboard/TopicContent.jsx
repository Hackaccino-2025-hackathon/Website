import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TopicContent = () => {
  const navigate = useNavigate();
  const { courseName, chapterNumber, topicName } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/file-content?courseName=${encodeURIComponent(
            courseName
          )}&chapterNumber=${encodeURIComponent(
            chapterNumber
          )}&topicName=${encodeURIComponent(topicName)}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch content");
        }

        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching topic content:", error);
        setError(`Error loading content: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [courseName, chapterNumber, topicName]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="topic-content-container max-w-4xl mx-auto p-4">
      {/* Header with back button */}
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="ml-2">Back to Roadmap</span>
        </button>
      </div>

      {/* Content header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{topicName}</h1>
        <div className="text-gray-600">
          <span className="font-medium">{courseName}</span>
          <span className="mx-2">•</span>
          <span>Chapter {chapterNumber}</span>
        </div>
      </div>

      {/* Main content */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default TopicContent;
