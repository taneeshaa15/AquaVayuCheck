import React from "react";
import Searchbox from "./Searchbox";

const NewNavbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-xl border-slate-800">
      <div className=" mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-10">
            <span className="text-2xl text-black font-semibold">
              AquaVayuCheck
            </span>
          </div>

          <div className="flex space-x-4 text-black items-center">
            <a
              href="/air-quality"
              className="hover:text-slate-600 transition ease-in-out delay-100"
            >
              Air Quality
            </a>
            <a
              href="/water-quality"
              className="hover:text-slate-600 transition ease-in-out delay-100"
            >
              Water Quaity
            </a>
            <a
              href="/stats"
              className="hover:text-slate-600 transition ease-in-out delay-100"
            >
              Weather
            </a>
            <Searchbox />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;

