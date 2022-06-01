import React from "react";

function Overview() {
  return (
    <div className="flex flex-col gap-3 p-8 bg-gray-200 flex-grow">
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
    </div>
  );
}

function StatsChart() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4"></div>
    </div>
  );
}

export default Overview;
