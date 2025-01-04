import React from "react";
import AnimatedBackground from "../animations/AnimatedBackground";

const Component1 = () => {
  return (
    <>
      <div className="relative rounded-2xl h-full">
        <div className="absolute inset-0 rounded-2xl">
          <AnimatedBackground />
        </div>
        <div className=" p-12 rounded-2xl relative z-10 flex flex-col gap-9">
          <div className="C1-txt-1 mb-11">
            <h1 className="text-4xl mb-3">Noida (AQI)</h1>
            <p className="text-gray-800">
              Real-time PM2.5, PM1O air pollution level Uttar Pradesh
            </p>
          </div>
          <div className="C1-txt-2 flex flex-row">
            <div className="C1-p1 flex flex-col justify-center gap-1">
              <p className="text-slate-500">
                Last Update: 04 Nov 2023, 09:49pm
              </p>
              <button className="Warning bg-red-600 p-1 rounded-2xl px-3 mt-2 text-white mr-14">
                HAZARDOUS
              </button>
            </div>
            <div className="C1-p2 mx-auto flex flex-col items-center">
              <h1 className="text-6xl font-bold text-red-500">400</h1>
              <p className="text-slate-600">(AQI)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
