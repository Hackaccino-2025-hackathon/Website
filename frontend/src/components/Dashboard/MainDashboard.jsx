import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

const MainDashboard = () => {
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const pData = [10, 20, 35, 40, 50, 60];

  // Data for quiz bar chart (graph1)
  const quizData = [15, 10, 20, 34, 25, 20, 30];

  // Data for answers bar chart (graph2)
  const answerData = [65, 72, 80, 78.3, 68, 60, 75];

  return (
    <>
      <h1 className="font-semibold text-3xl">Welcome Bhagwan</h1>
      <div className="flex flex-col gap-[20px] mt-[40px]">
        <div className="flex gap-[5px] flex-wrap justify-evenly items-center content-center ">
          <div className="w-[28%] border-gray-400 border-1 rounded-2xl h-[157px] p-5 ">
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
          <div className="w-[28%] border-gray-400 border-1 rounded-2xl h-[157px] p-3">
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
                      fill="currentColor"
                      d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[28%] border-gray-400 border-1 rounded-2xl h-[157px] p-3">
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
        <div className="graphs-section flex gap-[20px] flex-wrap justify-center items-center content-center">
          <div className="w-[45%] border-gray-400 border-1 rounded-2xl h-[240px] p-3 flex justify-center items-center">
            <LineChart
              width={450}
              height={250}
              series={[
                {
                  data: pData,
                  label: "Hours Spent",
                  color: "#317b74",
                  area: false,
                  showMark: true,
                  lineWidth: 2,
                  markSize: 5,
                },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              yAxis={[
                {
                  tickFormat: () => "",
                  stroke: "none",
                  disableTicks: true,
                  disableAxisLine: true,
                  position: "left",
                  axisLabel: "",
                },
              ]}
              slotProps={{
                legend: {
                  position: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  padding: 0,
                  labelStyle: {
                    fontSize: 14,
                  },
                },
              }}
              sx={{
                ".MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                  display: "none",
                },
                ".MuiChartsAxis-left .MuiChartsAxis-line": {
                  display: "none",
                },
              }}
            />
          </div>
          <div className="w-[45%] border-gray-400 border-1 rounded-2xl h-[240px] p-3">
            <h1 className="font-semibold text-2xl mb-[20px]">Lessons</h1>
            <div className="bg-[#fef0f0] rounded-2xl px-[50px] ">
              <div className="flex flex-row py-[10px] gap-4 justify-between items-center">
                <div className="flex flex-col  leading-0.5">
                  <span className="w-[30%] font-semibold text-xl ">34</span>{" "}
                  <span className="font-normal text-sm">Quizzes</span>
                </div>
                <div>
                  {" "}
                  <BarChart
                    width={100}
                    height={60}
                    series={[
                      {
                        data: quizData,
                        color: "#ff6b6b",
                        barWidth: 0.4,
                      },
                    ]}
                    xAxis={[
                      {
                        data: [1, 2, 3, 4, 5, 6, 7],
                        scaleType: "band",
                        position: "bottom",
                        tickSize: 0,
                        ticksVisible: false,
                        axisBorder: { stroke: "transparent" },
                        labelStyle: { display: "none" },
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    yAxis={[
                      {
                        scaleType: "linear",
                        position: "left",
                        tickSize: 0,
                        ticksVisible: false,
                        axisBorder: { stroke: "transparent" },
                        labelStyle: { display: "none" },
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    sx={{
                      ".MuiChartsAxis-root": { display: "none" },
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row py-[10px] gap-4 justify-between items-center">
                <div className="flex flex-col  leading-0.5">
                  <span className="w-[30%] font-semibold text-xl ">78.3%</span>{" "}
                  <span className="font-normal text-sm">Answers</span>
                </div>
                <div>
                  {" "}
                  <BarChart
                    width={100}
                    height={60}
                    series={[
                      {
                        data: answerData,
                        color: "#317b74",
                        barWidth: 0.4,
                      },
                    ]}
                    xAxis={[
                      {
                        data: [1, 2, 3, 4, 5, 6, 7],
                        scaleType: "band",
                        position: "bottom",
                        tickSize: 0,
                        ticksVisible: false,
                        axisBorder: { stroke: "transparent" },
                        labelStyle: { display: "none" },
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    yAxis={[
                      {
                        scaleType: "linear",
                        position: "left",
                        tickSize: 0,
                        ticksVisible: false,
                        axisBorder: { stroke: "transparent" },
                        labelStyle: { display: "none" },
                        disableTicks: true,
                        disableAxisLine: true,
                        disableGridLines: true,
                      },
                    ]}
                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    sx={{
                      ".MuiChartsAxis-root": { display: "none" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="flex gap-[20px] flex-wrap justify-center items-center content-center">
          <div className="w-[92%] border-gray-400 border-1 rounded-2xl h-auto p-3">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Continue Learning</h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search your courses..."
                    className="border rounded px-3 py-1"
                  />
                  <button className="bg-gray-200 px-3 py-1 rounded">
                    See All
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-3 text-gray-600 font-semibold text-sm pb-2">
                  <div>Course Name</div>
                  <div>Progress</div>
                  <div className="text-right">Status</div>
                </div>

                {/* Course 1 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <p className="font-semibold">Linear Algebra</p>
                    <p className="text-sm text-gray-500">5 hours • Advanced</p>
                    <div className="mt-2 w-full bg-gray-200 h-2 rounded">
                      <div className="bg-green-600 h-2 rounded w-2/5"></div>
                    </div>
                  </div>
                  <span className="bg-gray-200 px-3 py-1 text-sm rounded flex items-center">
                    ⏳ In progress
                  </span>
                  <span className="text-gray-400 text-xl">&gt;</span>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <p className="font-semibold">Designing Algorithms</p>
                    <p className="text-sm text-gray-500">16 hours • Advanced</p>
                    <div className="mt-2 w-full bg-gray-200 h-2 rounded">
                      <div className="bg-green-500 h-2 rounded w-3/5"></div>
                    </div>
                  </div>
                  <span className="bg-gray-200 px-3 py-1 text-sm rounded flex items-center">
                    ⏳ In progress
                  </span>
                  <span className="text-gray-400 text-xl">&gt;</span>
                </div>

                {/* Course 3 */}
                <div className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4">
                  <div className="flex-1">
                    <p className="font-semibold">Blockchain</p>
                    <p className="text-sm text-gray-500">
                      9 hours • Intermediate
                    </p>
                    <div className="mt-2 w-full bg-gray-200 h-2 rounded">
                      <div className="bg-green-700 h-2 rounded w-full"></div>
                    </div>
                  </div>
                  <span className="bg-black text-white px-3 py-1 text-sm rounded flex items-center">
                    ✔ Completed
                  </span>
                  <span className="text-gray-400 text-xl">&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
