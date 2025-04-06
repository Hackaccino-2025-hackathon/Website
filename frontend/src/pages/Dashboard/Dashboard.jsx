import React, { useState } from "react";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import Roadmaps from "../../components/Dashboard/Roadmaps";
import Mycourses from "../../components/Dashboard/Mycourses";
import QnA from "../../components/Dashboard/Qna";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");

  const renderContent = () => {
    switch (activeNav) {
      case "home":
        return <MainDashboard />;
      case "roadmaps":
        return <Roadmaps />;
      case "courses":
        return <Mycourses />;
      case "quiz":
        return <div>Quiz Component</div>;
      case "chatbot":
        return <div>Chatbot Component</div>;
      case "grading":
        return <QnA />;
     
        return <div>Grading Component</div>;
      case "resources":
        return <div>Resources Component</div>;
      default:
        return <MainDashboard />;
    }
  };

  // Helper function to determine if a navigation item is active
  const isActive = (navItem) => activeNav === navItem;

  return (
    <div className="grid grid-cols-[240px_1fr_240px] h-screen">
      {/* Left Sidebar - Based on Image 1 */}
      <div className="bg-orange-100 flex flex-col">
        <div className="p-4 flex items-center">
          <div className="p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="px-2 space-y-1">
            <li className={`flex items-center p-3 rounded ${isActive("home") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("home")}>
              <svg className="mr-3" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20V14H15V20H19V12H22L12 3L2 12H5V20H9Z" fill="currentColor"/>
              </svg>
              Home
            </li>
            
            <li className={`flex items-center p-3 rounded ${isActive("courses") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("courses")}>
              <svg className="mr-3 text-blue-500" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
              </svg>
              Courses
            </li>
            
            <li className={`flex items-center p-3 rounded ${isActive("resources") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("resources")}>
              <svg className="mr-3 text-red-500" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM17 17H11V15H17V17ZM17 13H11V11H17V13ZM17 9H11V7H17V9Z" fill="currentColor"/>
              </svg>
              Resources
            </li>
            
            <li className={`flex items-center p-3 rounded ${isActive("quiz") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("quiz")}>
              <svg className="mr-3 text-yellow-500" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 7H15M9 11H15M9 15H13M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Quiz
            </li>
            
            <li className={`flex items-center p-3 rounded ${isActive("chatbot") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("chatbot")}>
              <svg className="mr-3 text-purple-500" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C17.5228 3 22 6.58172 22 11C22 15.4183 17.5228 19 12 19C11.3509 19 10.7154 18.9478 10.0988 18.8497C7.15465 20.5104 5.9195 20.9963 5 21C6.25 19.8587 6.75 18.5803 6.75 17.5C4.02099 15.8652 2 13.589 2 11C2 6.58172 6.47715 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Chatbot
            </li>
          </ul>
          
          <div className="border-t my-4"></div>
          
          <ul className="px-2 space-y-1">
            <li className={`flex items-center p-3 rounded ${isActive("roadmaps") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("roadmaps")}>
              <svg className="mr-3" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L20 6M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Roadmaps
            </li>
            
            <li className={`flex items-center p-3 rounded ${isActive("grading") ? "bg-white text-black font-medium" : "text-gray-700 hover:bg-white hover:bg-opacity-50"}`} onClick={() => setActiveNav("grading")}>
              <svg className="mr-3" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12L9 15H15L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Grading
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto p-5">
          <div className="text-red-600 font-bold text-2xl">
            <span className="text-red-600">L</span>earnify
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-5 shadow-md overflow-y-auto">
        {renderContent()}
      </div>

      {/* Right Sidebar - Leaderboard based on Image 2 */}
      <div className="bg-white p-14 border-l">
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
          <div className="flex items-center mb-4">
            <select className="border rounded px-2 py-1 text-sm">
              <option>This month</option>
              <option>Last month</option>
              <option>All time</option>
            </select>
          </div>
          
          {/* Bar chart */}
          <div className="flex items-end h-32 mb-2">
            <div className="w-1/3 bg-blue-300 h-20 flex justify-center rounded-t"></div>
            <div className="w-1/3 bg-orange-400 h-32 flex justify-center rounded-t"></div>
            <div className="w-1/3 bg-green-400 h-16 flex justify-center rounded-t relative">
              <div className="absolute -top-6">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
                  <span className="text-white text-xs">N</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex text-xs text-center font-medium">
            <div className="w-1/3">Mohak</div>
            <div className="w-1/3">Siddhesh</div>
            <div className="w-1/3">Nikhil</div>
          </div>
        </div>
        
        {/* Leaderboard list */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-2">S</div>
              <span>Siddesh</span>
              <span className="text-xs text-gray-500 ml-1">+10 hours</span>
            </div>
            <div className="flex items-center text-green-500">
              <span>+1</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5L18 11H6L12 5Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-2">M</div>
              <span>Mohak</span>
              <span className="text-xs text-gray-500 ml-1">+24 hours</span>
            </div>
            <div className="flex items-center text-red-500">
              <span>-2</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 19L18 13H6L12 19Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-2">N</div>
              <span>Nikhil</span>
              <span className="text-xs text-gray-500 ml-1">+12 hours</span>
            </div>
            <div className="flex items-center text-green-500">
              <span>+2</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5L18 11H6L12 5Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-2">S</div>
              <span>Sriram</span>
              <span className="text-xs text-gray-500 ml-1">+4 hours</span>
            </div>
            <div className="flex items-center text-red-500">
              <span>-2</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 19L18 13H6L12 19Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-2">N</div>
              <span>Nikhil</span>
              <span className="text-xs text-gray-500 ml-1">+8 hours</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span>+0</span>
              <div className="w-4 h-1 bg-gray-400 ml-1"></div>
            </div>
          </div>
        </div>
        
        {/* Badges section */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <div className="flex">
              <svg className="text-yellow-500" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"/>
              </svg>
              <svg className="text-yellow-500" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"/>
              </svg>
              <svg className="text-yellow-500" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"/>
              </svg>
            </div>
            <span className="ml-2 font-medium">3/39 Badges earned</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '8%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;