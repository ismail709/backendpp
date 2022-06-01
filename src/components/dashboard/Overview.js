import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function Overview() {
  return (
    <div className="flex flex-col gap-3 p-8 bg-gray-200 flex-grow overflow-scroll">
      <p className="text-4xl font-body font-bold bg-white p-4 rounded-lg shadow-md">
        Welcome Ismail!
      </p>
      <div className="flex flex-col gap-4 p-4 bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-300">App_name</p>
        <div className="grid grid-cols-2 gap-3 p-3">
          <div className="">subdomain</div>
          <div className="text-right">api.backendplusplus.com</div>
          <div className="">APP ID</div>
          <div className="text-right">F249-FF7E-BA3955030000</div>
          <div className="">API Key</div>
          <div className="text-right">F249-FF7E-BA3955030000</div>
        </div>
      </div>
      <StatsChart />
      <div className="font-body flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.75C12.8301 1.74995 13.6288 2.06755 14.2322 2.63767C14.8356 3.20779 15.198 3.98719 15.245 4.816L15.25 5H20.5C20.69 5.00006 20.8729 5.07224 21.0118 5.20197C21.1506 5.3317 21.2351 5.5093 21.248 5.69888C21.261 5.88846 21.2015 6.07589 21.0816 6.2233C20.9617 6.37071 20.7902 6.4671 20.602 6.493L20.5 6.5H19.704L18.424 19.52C18.3599 20.1691 18.0671 20.7743 17.598 21.2275C17.1289 21.6806 16.5139 21.9523 15.863 21.994L15.687 22H8.313C7.66046 22 7.02919 21.7679 6.53201 21.3453C6.03482 20.9227 5.70412 20.337 5.599 19.693L5.576 19.519L4.295 6.5H3.5C3.31876 6.49999 3.14366 6.43436 3.00707 6.31523C2.87048 6.19611 2.78165 6.03155 2.757 5.852L2.75 5.75C2.75001 5.56876 2.81564 5.39366 2.93477 5.25707C3.05389 5.12048 3.21845 5.03165 3.398 5.007L3.5 5H8.75C8.75 4.13805 9.09241 3.3114 9.7019 2.7019C10.3114 2.09241 11.138 1.75 12 1.75V1.75ZM18.197 6.5H5.802L7.069 19.372C7.09706 19.6592 7.22362 19.9279 7.42722 20.1324C7.63082 20.3369 7.89892 20.4647 8.186 20.494L8.313 20.5H15.687C16.287 20.5 16.796 20.075 16.912 19.498L16.932 19.372L18.196 6.5H18.197ZM13.75 9.25C13.9312 9.25001 14.1063 9.31564 14.2429 9.43477C14.3795 9.55389 14.4684 9.71845 14.493 9.898L14.5 10V17C14.4999 17.19 14.4278 17.3729 14.298 17.5118C14.1683 17.6506 13.9907 17.7351 13.8011 17.748C13.6115 17.761 13.4241 17.7015 13.2767 17.5816C13.1293 17.4617 13.0329 17.2902 13.007 17.102L13 17V10C13 9.80109 13.079 9.61032 13.2197 9.46967C13.3603 9.32902 13.5511 9.25 13.75 9.25ZM10.25 9.25C10.4312 9.25001 10.6063 9.31564 10.7429 9.43477C10.8795 9.55389 10.9684 9.71845 10.993 9.898L11 10V17C10.9999 17.19 10.9278 17.3729 10.798 17.5118C10.6683 17.6506 10.4907 17.7351 10.3011 17.748C10.1115 17.761 9.92411 17.7015 9.7767 17.5816C9.62929 17.4617 9.5329 17.2902 9.507 17.102L9.5 17V10C9.5 9.80109 9.57902 9.61032 9.71967 9.46967C9.86032 9.32902 10.0511 9.25 10.25 9.25ZM12 3.25C11.5608 3.25002 11.1377 3.41517 10.8146 3.71268C10.4915 4.01019 10.2921 4.4183 10.256 4.856L10.25 5H13.75C13.75 4.53587 13.5656 4.09075 13.2374 3.76256C12.9092 3.43437 12.4641 3.25 12 3.25Z"
              fill="#DE061A"
            />
          </svg>
          <p className="text-[#DE061A] text-base">DANGER ZONE</p>
        </div>
        <button className="bg-[#DE061A] text-white px-6 py-2 rounded-lg">
          Delete My App
        </button>
      </div>
    </div>
  );
}
const labels = ["January", "February", "March", "April", "May", "June"];
const data1 = {
  labels: labels,
  datasets: [
    {
      label: "daily API calls",
      backgroundColor: "rgba(255, 99, 132,0.3)",
      borderColor: "rgb(255, 99, 132)",
      fill: true,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "daily API calls",
      backgroundColor: "rgba(255, 99, 132,0.3)",
      borderColor: "rgb(255, 99, 132)",
      fill: true,
      data: [8, 2, 30, 10, 12, 4, 25],
    },
  ],
};
function StatsChart() {
  const [view, setview] = useState(1);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-4 rounded-r-lg rounded-l-lg overflow-hidden">
        <div
          onClick={() => setview(1)}
          className={`flex flex-col gap-3 px-3 py-7 justify-center items-center bg-gradient-to-b from-gray-200 to-white ${view == 1 && "bg-gradient-to-t"}`}
        >
          <p className="font-body">Users</p>
          <p className="text-3xl">12,584</p>
          <p className="text-xs">+321</p>
          <p className="text-sm text-blue-500">see all</p>
        </div>
        <div
          onClick={() => setview(2)}
          className={`flex flex-col gap-3 px-3 py-7 justify-center items-center bg-gradient-to-b from-gray-200 to-white ${view == 2 && "bg-gradient-to-t"}`}
        >
          <p className="font-body">daily API calls</p>
          <p className="text-3xl">29,013</p>
          <p className="text-xs">-272</p>
          <p className="text-sm text-blue-500">see all</p>
        </div>
        <div
          onClick={() => setview(3)}
          className={`flex flex-col gap-3 px-3 py-7 justify-center items-center bg-gradient-to-b from-gray-200 to-white ${view == 3 && "bg-gradient-to-t"}`}
        >
          <p className="font-body">Data records</p>
          <p className="text-3xl">6702</p>
          <p className="text-xs">+11</p>
          <p className="text-sm text-blue-500">see all</p>
        </div>
        <div
          onClick={() => setview(4)}
          className={`flex flex-col gap-3 px-3 py-7 justify-center items-center bg-gradient-to-b from-gray-200 to-white ${view == 4 && "bg-gradient-to-t"}`}
        >
          <p className="font-body">Files</p>
          <p className="text-3xl">19</p>
          <p className="text-xs">+0</p>
          <p className="text-sm text-blue-500">see all</p>
        </div>
      </div>
      <div className="p-3">
        {view == 1 && <Line data={data1} />}
        {view == 2 && <Line data={data2} />}
        {view == 3 && <Line data={data1} />}
        {view == 4 && <Line data={data2} />}
      </div>
    </div>
  );
}

export default Overview;
