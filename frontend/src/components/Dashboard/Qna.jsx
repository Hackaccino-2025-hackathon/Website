import React, { useState } from 'react';

const QnA = () => {
  const [questionNumber, setQuestionNumber] = useState('');
  const [markingSchemeFile, setMarkingSchemeFile] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentAnswerFile, setStudentAnswerFile] = useState(null);

  const [uploadMessage, setUploadMessage] = useState('');
  const [answerMessage, setAnswerMessage] = useState('');
  const [gradingResults, setGradingResults] = useState([]);
  const [gradingMessage, setGradingMessage] = useState('');

  const API_BASE = 'http://localhost:8000/api';

  const handleUploadScheme = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', markingSchemeFile);
    formData.append('question_number', questionNumber);

    try {
      const res = await fetch(`${API_BASE}/upload-marking-scheme/`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setUploadMessage('✅ Marking scheme uploaded successfully.');
      } else {
        setUploadMessage('❌ Failed to upload marking scheme.');
      }
    } catch {
      setUploadMessage('❌ Network error during upload.');
    }
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', studentAnswerFile);
    formData.append('student_name', studentName);
    formData.append('student_id', studentId);
    formData.append('question_number', questionNumber);

    try {
      const res = await fetch(`${API_BASE}/upload-student-answer/`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        setAnswerMessage('❌ Failed to submit answer.');
        return;
      }

      setAnswerMessage('⏳ Answer submitted. Grading in progress...');

      const gradeRes = await fetch(`${API_BASE}/start-grading/`, {
        method: 'POST'
      });

      if (!gradeRes.ok) {
        setAnswerMessage('❌ Grading failed.');
        return;
      }

      const data = await gradeRes.json();
      setGradingResults(data.graded_answers || []);
      setGradingMessage(data.message || '');
      setAnswerMessage('✅ Grading completed!');
    } catch {
      setAnswerMessage('❌ Network error during grading.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 md:px-10 space-y-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          Automated <span className="text-orange-500">Grading</span> System
        </h1>
        
        {/* Section 1: Upload Marking Scheme */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-4 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">1. Upload Marking Scheme</h2>
          </div>
          
          <form onSubmit={handleUploadScheme} className="p-8 space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <input
                  type="text"
                  value={questionNumber}
                  onChange={(e) => setQuestionNumber(e.target.value)}
                  placeholder="Question #"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-32 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div className="relative flex-grow md:flex-grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-700">Marking Scheme File</label>
                <input
                  type="file"
                  onChange={(e) => setMarkingSchemeFile(e.target.files[0])}
                  className="block w-full text-gray-700 bg-orange-50 border border-orange-200 rounded-xl cursor-pointer focus:outline-none py-2 px-3"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg ml-auto mt-4 md:mt-0"
              >
                Upload Scheme
              </button>
            </div>
            
            {uploadMessage && (
              <div className={`mt-4 p-3 rounded-lg ${uploadMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {uploadMessage}
              </div>
            )}
          </form>
        </div>

        {/* Section 2: Submit Answer & Grade */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mt-10">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-4 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">2. Submit Answer & Grade</h2>
          </div>
          
          <form onSubmit={handleSubmitAnswer} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Student Name</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Enter student ID"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Question Number</label>
                <input
                  type="text"
                  value={questionNumber}
                  onChange={(e) => setQuestionNumber(e.target.value)}
                  placeholder="Question #"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Upload Answer File</label>
              <input
                type="file"
                onChange={(e) => setStudentAnswerFile(e.target.files[0])}
                className="block w-full text-gray-700 bg-orange-50 border border-orange-200 rounded-xl cursor-pointer focus:outline-none py-2 px-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-6"
            >
              Submit & Grade
            </button>

            {answerMessage && (
              <div className={`mt-4 p-4 rounded-lg ${answerMessage.includes('✅') ? 'bg-green-50 text-green-700' : answerMessage.includes('⏳') ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}`}>
                {answerMessage}
              </div>
            )}
          </form>
        </div>

        {/* Grading Message */}
        {gradingMessage && (
          <div className="text-2xl font-semibold text-orange-500 text-center mt-10 bg-white p-6 rounded-3xl shadow-lg">
            {gradingMessage}
          </div>
        )}

        {/* Results Table */}
        {gradingResults.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mt-10">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-4 px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">📊 Grading Results</h2>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-orange-100 text-orange-800">
                    <th className="px-6 py-4 text-left font-semibold rounded-tl-xl">Student Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Student ID</th>
                    <th className="px-6 py-4 text-left font-semibold">Question #</th>
                    <th className="px-6 py-4 text-left font-semibold rounded-tr-xl">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {gradingResults.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-orange-100 hover:bg-orange-50 transition-colors duration-150 ${idx === gradingResults.length - 1 ? 'border-none' : ''}`}
                    >
                      <td className="px-6 py-4">{row.student_name}</td>
                      <td className="px-6 py-4">{row.student_id}</td>
                      <td className="px-6 py-4">{row.question_number}</td>
                      <td className="px-6 py-4 font-medium text-orange-600">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-orange-50 p-4 text-center text-orange-800">
              <p className="font-medium">Learn, Share and Grow Together!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QnA;