import React from "react";

const MainDashboard = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl">Welcome Bhagwan</h1>
      <div className="flex flex-col gap-[20px] mt-[40px]">
        <div class="flex gap-[5px] flex-wrap justify-evenly items-center content-center ">
          <div class="w-[31%] border-gray-400 border-1 rounded-2xl h-[157px] p-5 ">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row gap-[10px]">
                <div className="bg-[#317b74] w-[22%] border-green-100 border-[3px] flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2L0 9l12 7l10-5.833V17.5h2V9zM3.999 13.49V18a9.99 9.99 0 0 0 8 4A9.99 9.99 0 0 0 20 18v-4.509l-8 4.667z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">32</span>{" "}
                  <span className="t font-normal text-gray-600">
                    Enrolled Courses
                  </span>
                </div>
              </div>
              <hr className="mx-[25px] text-gray-600" />
              <div className="flex flex-row justify-between items-center text-gray-600">
                <span className="text-gray-600">View Details</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-[31%] border-gray-400 border-1 rounded-2xl h-[157px] p-3">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row gap-[10px]">
                <div className="bg-[#8fffa4] w-[22%] border-green-100 border-[3px] flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2L0 9l12 7l10-5.833V17.5h2V9zM3.999 13.49V18a9.99 9.99 0 0 0 8 4A9.99 9.99 0 0 0 20 18v-4.509l-8 4.667z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">2</span>{" "}
                  <span className="t font-normal text-gray-600">
                    Completed Roadmaps
                  </span>
                </div>
              </div>
              <hr className="mx-[25px] text-gray-600" />
              <div className="flex flex-row justify-between items-center text-gray-600">
                <span className="text-gray-600">View Details</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillCourses="currentColor"
                      d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-[31%] border-gray-400 border-1 rounded-2xl h-[157px] p-3">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row gap-[10px]">
                <div className="bg-[#ff9e00] w-[22%] border-yellow-100 border-[3px] flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2L0 9l12 7l10-5.833V17.5h2V9zM3.999 13.49V18a9.99 9.99 0 0 0 8 4A9.99 9.99 0 0 0 20 18v-4.509l-8 4.667z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">34</span>{" "}
                  <span className="t font-normal text-gray-600">Quizes</span>
                </div>
              </div>
              <hr className="mx-[25px] text-gray-600" />
              <div className="flex flex-row justify-between items-center text-gray-600">
                <span className="text-gray-600">View Details</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div class="flex gap-[20px] flex-wrap justify-center items-center content-center">
          <div class="w-[48%] border-gray-400 border-1 rounded-2xl h-[240px] p-3">
            1
          </div>
          <div class="w-[48%] border-gray-400 border-1 rounded-2xl h-[240px] p-3">
            2
          </div>
        </div>
      </div>
      <br />
      <div>
        <div class="flex gap-[20px] flex-wrap justify-center items-center content-center">
          <div class="w-[98%] border-gray-400 border-1 rounded-2xl h-[240px] p-3">
            2
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
