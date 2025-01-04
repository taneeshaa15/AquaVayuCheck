import React, { useState } from "react";
import { Chart } from "react-google-charts";

const Component6 = () => {
  const rawdata = [
    {
      id: null,
      City: "Greater Noida",
      Date: "2023-07-21",
      CO: 34.2,
      NH3: 2.0,
      NO2: 28.0,
      OZONE: 16.8,
      PM25: 121.67,
      PM10: 146.67,
      SO2: 12.33,
      AQI: 147,
    },
    {
      id: null,
      City: "Greater Noida",
      Date: "2023-07-22",
      CO: 21.92,
      NH3: 1.0,
      NO2: 16.0,
      OZONE: 23.6,
      PM25: 57.33,
      PM10: 93.33,
      SO2: 16.55,
      AQI: 93,
    },
    {
      id: null,
      City: "Greater Noida",
      Date: "2023-07-23",
      CO: 15.57,
      NH3: 0.0,
      NO2: 9.89,
      OZONE: 37.14,
      PM25: 39.89,
      PM10: 66.67,
      SO2: 22.33,
      AQI: 67,
    },
    {
      id: null,
      City: "Greater Noida",
      Date: "2023-07-24",
      CO: 29.0,
      NH3: 1.86,
      NO2: 12.4,
      OZONE: 26.7,
      PM25: 43.6,
      PM10: 75.67,
      SO2: 27.17,
      AQI: 76,
    },
    {
      id: null,
      City: "Greater Noida",
      Date: "2023-07-25",
      CO: 24.4,
      NH3: 2.0,
      NO2: 13.46,
      OZONE: 168.44,
      PM25: 45.42,
      PM10: 72.08,
      SO2: 23.19,
      AQI: 168,
    },
    {
      id: null,
      City: "Greater Noida",
      Date: "2023-07-26",
      CO: 41.25,
      NH3: 0.0,
      NO2: 0.0,
      OZONE: 7.17,
      PM25: 47.0,
      PM10: 65.5,
      SO2: 24.0,
      AQI: 66,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("CO");

  const options = ["CO", "CO2", "NO2", "OZONE", "SO2", "AQI", "PM10", "NH3"];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredData = rawdata.map((entry) => [
    new Date(entry.Date),
    entry[selectedOption],
  ]);

  const chartData = [
    [{ type: "date", label: "Date" }, selectedOption],
    ...filteredData,
  ];

  const chartOptions = {
    title: "Air Quality Data",
    hAxis: { title: "Date" },
    vAxis: { title: selectedOption },
    series: {
      0: { color: "red" },
    },
    areaOpacity: 0.3,
  };
  return (
    <>
      <div className="C6-container m-8 flex flex-col">
        <div className="C6-top flex flex-row justify-between">
          <div className="C6-txt flex flex-col">
            <h1 className="C6-heading text-2xl text-[#33a0d3]">
              Historic Air quality Data{" "}
            </h1>
            <span className="text-sm text-slate-500 mt-5">
              Explore the insightful air pollution data for last
            </span>
            <span className="text-sm text-slate-500">
              24 hours, 7days and 1 month
            </span>
          </div>
          <div className="flex flex-row gap-4">
            <div className="best p-3 bg-[#43a53d] text-white w-32 h-14 rounded-xl flex flex-row justify-between items-center">
              <span className="text-xs">
                Best <br /> AQI
              </span>
              <h3 className="text-lg">354</h3>
            </div>
            <div className="worst p-3 bg-[#c22c3d] text-white w-32 h-14 rounded-xl flex flex-row justify-between items-center">
              <span className="text-xs">
                Worst <br /> AQI
              </span>
              <h3 className="text-lg">784</h3>
            </div>
          </div>
        </div>
        <div className="C6-graph">
          <div className="flex flex-row items-center ">
            {/* <label className="text-sm mr-2">Select Parameter:</label> */}
            <select
              className="border border-gray-300 p-2 rounded-md mt-3"
              onChange={handleChange}
              value={selectedOption}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <Chart
            chartType="LineChart"
            data={chartData}
            options={chartOptions}
            width="100%"
            height="400px"
            legendToggle
          />
        </div>
      </div>
    </>
  );
};

export default Component6;
