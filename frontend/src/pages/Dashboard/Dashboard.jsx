// import React from "react";
// import MainDashboard from "../../components/Dashboard/MainDashboard";

// const Dashboard = () => {
//   return (
//     <div className="grid grid-cols-[17%_1fr_22%] h-screen">
//       <div className="bg-[#F3F3F3] py-4">
//         <ul className="list-disc p-5 text-sm ">
//           <ul className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
//               />
//             </svg>
//             Home
//           </ul>
//           <ul className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 32 32"
//             >
//               <path
//                 fill="currentColor"
//                 d="M23.188 3.735a1.766 1.766 0 0 0-3.532-.001c0 .975 1.766 4.267 1.766 4.267s1.766-3.292 1.766-4.267zm-2.61 0a.844.844 0 1 1 1.687-.001a.844.844 0 0 1-1.687.001m4.703 14.76c-.56 0-1.097.047-1.59.123L11.1 13.976c.2-.18.312-.38.312-.59a.66.66 0 0 0-.088-.315l8.41-2.238c.46.137 1.023.22 1.646.22c1.52 0 2.75-.484 2.75-1.082c0-.6-1.23-1.083-2.75-1.083s-2.75.485-2.75 1.083q.002.105.054.202L9.896 12.2a8 8 0 0 0-2.265-.303c-2.087 0-3.78.667-3.78 1.49s1.693 1.49 3.78 1.49c.574 0 1.11-.055 1.598-.145l11.99 4.866c-.19.192-.306.4-.306.623c0 .19.096.364.236.533L8.695 25.415q-.236-.009-.477-.01c-3.24 0-5.87 1.036-5.87 2.31c0 1.277 2.63 2.313 5.87 2.313s5.87-1.034 5.87-2.312c0-.22-.083-.432-.23-.633l10.266-5.214c.37.04.753.065 1.155.065c2.413 0 4.37-.77 4.37-1.723c0-.944-1.957-1.716-4.37-1.716z"
//               />
//             </svg>
//             Roadmaps
//           </ul>
//         </ul>

//         <hr className=" text-[#cfcfcf] p-[2px]" />

//         <ul className="list-disc p-5 text-sm">
//           <ul className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="1.5"
//                 color="currentColor"
//               >
//                 <path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846" />
//                 <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17" />
//               </g>
//             </svg>
//             Courses
//           </ul>
//           <ul className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
//               />
//             </svg>
//             Quiz
//           </ul>
//           <ul className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//               >
//                 <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9.5 9h.01m4.99 0h.01" />
//                 <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
//               </g>
//             </svg>
//             Chatbot
//           </ul>
//           <ul className="m-[20px] py-[8px] flex flex-row items-center gap-[10px] text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 22 22"
//             >
//               <g fill="none" fill-rule="evenodd">
//                 <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//                 <path
//                   fill="currentColor"
//                   d="M8.017 2.861a4.218 4.218 0 1 1 5.89 6.04l-.166.149l-1.241 1.06l4.099 4.783c.33-.688.661-1.482.988-2.399a1.5 1.5 0 1 1 2.826 1.01c-.477 1.335-.981 2.488-1.51 3.48l-.2.364l1.436 1.675a1.5 1.5 0 0 1-2.172 2.064l-.106-.112l-.947-1.105a9 9 0 0 1-.964.915C14.232 22.192 12.484 22.5 11 22.5c-3.23 0-6.5-2.576-6.5-6.5c0-1.136.43-2.183.945-3.043c.521-.871 1.193-1.659 1.827-2.307q.37-.377.726-.701l.232-.21l-.599-.698a4.44 4.44 0 0 1 .073-5.858l.159-.167zm2.166 9.157c-.247.22-.508.466-.767.731c-.538.55-1.038 1.15-1.396 1.748c-.365.61-.52 1.114-.52 1.503c0 2.076 1.73 3.5 3.5 3.5c1.016 0 2.018-.192 3.05-1.036c.23-.188.466-.412.709-.683l.183-.21zm1.678-7.035a1.22 1.22 0 0 0-1.623-.09l-.1.09l-.154.154l-.1.11c-.402.495-.43 1.2-.066 1.724l.09.118l.64.745l1.244-1.064l.1-.097a1.22 1.22 0 0 0-.03-1.69Z"
//                 />
//               </g>
//             </svg>
//             Q&A
//           </ul>
//         </ul>

//         <ul className="list-disc p-5 text-sm absolute bottom-0">
//           <ul className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
//               />
//             </svg>
//             Help Mode
//           </ul>
//           <ul className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="17"
//               height="16"
//               viewBox="0 0 25 24"
//             >
//               <path
//                 fill="currentColor"
//                 d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z"
//               />
//             </svg>
//             Dark Mode
//           </ul>
//         </ul>
//       </div>
//       <div className="bg-white p-5 shadow-md overflow-y-auto">
//         <MainDashboard />
//       </div>
//       <div className="bg-gray-200 p-4">Right Sidebar</div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import Roadmaps from "../../components/Dashboard/Roadmaps";
import Mycourses from "../../components/Dashboard/Mycourses";

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
      case "qa":
        return <div>Q&A Component</div>;
      default:
        return <MainDashboard />;
    }
  };

  // Helper function to determine if a navigation item is active
  const isActive = (navItem) => activeNav === navItem;

  return (
    <div className="grid grid-cols-[17%_1fr_22%] h-screen">
      <div className="bg-[#F3F3F3] py-4">
        <ul className="list-disc p-5 text-sm ">
          <ul
            className={`m-[20px] py-[8px] flex flex-row items-center gap-[10px] ${
              isActive("home")
                ? "font-medium"
                : "text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
            }`}
            onClick={() => setActiveNav("home")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
              />
            </svg>
            Home
          </ul>
          <ul
            className={`m-[20px] py-[8px] flex flex-row items-center gap-[10px] ${
              isActive("roadmaps")
                ? "font-medium"
                : "text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
            }`}
            onClick={() => setActiveNav("roadmaps")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M23.188 3.735a1.766 1.766 0 0 0-3.532-.001c0 .975 1.766 4.267 1.766 4.267s1.766-3.292 1.766-4.267zm-2.61 0a.844.844 0 1 1 1.687-.001a.844.844 0 0 1-1.687.001m4.703 14.76c-.56 0-1.097.047-1.59.123L11.1 13.976c.2-.18.312-.38.312-.59a.66.66 0 0 0-.088-.315l8.41-2.238c.46.137 1.023.22 1.646.22c1.52 0 2.75-.484 2.75-1.082c0-.6-1.23-1.083-2.75-1.083s-2.75.485-2.75 1.083q.002.105.054.202L9.896 12.2a8 8 0 0 0-2.265-.303c-2.087 0-3.78.667-3.78 1.49s1.693 1.49 3.78 1.49c.574 0 1.11-.055 1.598-.145l11.99 4.866c-.19.192-.306.4-.306.623c0 .19.096.364.236.533L8.695 25.415q-.236-.009-.477-.01c-3.24 0-5.87 1.036-5.87 2.31c0 1.277 2.63 2.313 5.87 2.313s5.87-1.034 5.87-2.312c0-.22-.083-.432-.23-.633l10.266-5.214c.37.04.753.065 1.155.065c2.413 0 4.37-.77 4.37-1.723c0-.944-1.957-1.716-4.37-1.716z"
              />
            </svg>
            Roadmaps
          </ul>
        </ul>

        <hr className=" text-[#cfcfcf] p-[2px]" />

        <ul className="list-disc p-5 text-sm">
          <ul
            className={`m-[20px] py-[8px] flex flex-row items-center gap-[10px] ${
              isActive("courses")
                ? "font-medium"
                : "text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
            }`}
            onClick={() => setActiveNav("courses")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846" />
                <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17" />
              </g>
            </svg>
            Courses
          </ul>
          <ul
            className={`m-[20px] py-[8px] flex flex-row items-center gap-[10px] ${
              isActive("quiz")
                ? "font-medium"
                : "text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
            }`}
            onClick={() => setActiveNav("quiz")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
              />
            </svg>
            Quiz
          </ul>
          <ul
            className={`m-[20px] py-[8px] flex flex-row items-center gap-[10px] ${
              isActive("chatbot")
                ? "font-medium"
                : "text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
            }`}
            onClick={() => setActiveNav("chatbot")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9.5 9h.01m4.99 0h.01" />
                <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
              </g>
            </svg>
            Chatbot
          </ul>
          <ul
            className={`m-[20px] py-[8px] flex flex-row items-center gap-[10px] ${
              isActive("qa")
                ? "font-medium"
                : "text-gray-600 hover:text-black hover:font-medium hover:cursor-pointer"
            }`}
            onClick={() => setActiveNav("qa")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M8.017 2.861a4.218 4.218 0 1 1 5.89 6.04l-.166.149l-1.241 1.06l4.099 4.783c.33-.688.661-1.482.988-2.399a1.5 1.5 0 1 1 2.826 1.01c-.477 1.335-.981 2.488-1.51 3.48l-.2.364l1.436 1.675a1.5 1.5 0 0 1-2.172 2.064l-.106-.112l-.947-1.105a9 9 0 0 1-.964.915C14.232 22.192 12.484 22.5 11 22.5c-3.23 0-6.5-2.576-6.5-6.5c0-1.136.43-2.183.945-3.043c.521-.871 1.193-1.659 1.827-2.307q.37-.377.726-.701l.232-.21l-.599-.698a4.44 4.44 0 0 1 .073-5.858l.159-.167zm2.166 9.157c-.247.22-.508.466-.767.731c-.538.55-1.038 1.15-1.396 1.748c-.365.61-.52 1.114-.52 1.503c0 2.076 1.73 3.5 3.5 3.5c1.016 0 2.018-.192 3.05-1.036c.23-.188.466-.412.709-.683l.183-.21zm1.678-7.035a1.22 1.22 0 0 0-1.623-.09l-.1.09l-.154.154l-.1.11c-.402.495-.43 1.2-.066 1.724l.09.118l.64.745l1.244-1.064l.1-.097a1.22 1.22 0 0 0-.03-1.69Z"
                />
              </g>
            </svg>
            Q&A
          </ul>
        </ul>

        <ul className="list-disc p-5 text-sm absolute bottom-0">
          <ul className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
            Help Mode
          </ul>
          <ul className="m-[10px] py-[2px] flex flex-row items-center gap-[10px] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 25 24"
            >
              <path
                fill="currentColor"
                d="m16.07 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.78-1.428zM2.226 12c0-5.523 4.477-10 10-10h1.734l-.868 1.5c-.579 1-.866 2.189-.866 3.5a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626A10 10 0 0 1 12.227 22c-5.523 0-10-4.477-10-10m18.5-5.584l.914 1.67L23.31 9l-1.67.914l-.914 1.67l-.913-1.67L18.143 9l1.67-.914z"
              />
            </svg>
            Dark Mode
          </ul>
        </ul>
      </div>
      <div className="bg-white p-5 shadow-md overflow-y-auto">
        {renderContent()}
      </div>
      <div className="bg-gray-200 p-4">.</div>
    </div>
  );
};

export default Dashboard;
