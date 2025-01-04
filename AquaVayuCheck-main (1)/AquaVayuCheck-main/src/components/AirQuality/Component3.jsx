import React, { useState } from "react";

const Component3 = () => {
  const [selectedOption, setSelectedOption] = useState("Real Time");
  const [AqiSelect, setAqiSelect] = useState("AQI");

  const citiesData = [
    {
      id: null,
      City: "Chengalpattu",
      CO: 48.33,
      NH3: 2.0,
      NO2: 10.88,
      OZONE: 6.0,
      PM25: 9.67,
      PM10: 377.38,
      SO2: 0.0,
      AQI: 377,
    },
    {
      id: null,
      City: "Dhanbad",
      CO: 188.0,
      NH3: 0.0,
      NO2: 0.0,
      OZONE: 12.77,
      PM25: 42.62,
      PM10: 0.0,
      SO2: 40.08,
      AQI: 188,
    },
    {
      id: null,
      City: "Fatehabad",
      CO: 43.0,
      NH3: 10.0,
      NO2: 30.0,
      OZONE: 113.38,
      PM25: 31.6,
      PM10: 0.0,
      SO2: 6.0,
      AQI: 113,
    },
    {
      id: null,
      City: "Pali",
      CO: 44.56,
      NH3: 3.0,
      NO2: 14.0,
      OZONE: 10.86,
      PM25: 79.93,
      PM10: 89.91,
      SO2: 0.0,
      AQI: 90,
    },
    {
      id: null,
      City: "Ambala",
      CO: 84.0,
      NH3: 9.24,
      NO2: 11.33,
      OZONE: 43.3,
      PM25: 26.05,
      PM10: 35.2,
      SO2: 0.0,
      AQI: 84,
    },
    {
      id: null,
      City: "Munger",
      CO: 2.17,
      NH3: 5.4,
      NO2: 29.17,
      OZONE: 16.32,
      PM25: 29.47,
      PM10: 79.55,
      SO2: 0.0,
      AQI: 80,
    },
    {
      id: null,
      City: "Samastipur",
      CO: 2.0,
      NH3: 4.0,
      NO2: 10.44,
      OZONE: 0.0,
      PM25: 21.23,
      PM10: 67.38,
      SO2: 23.0,
      AQI: 78,
    },
    {
      id: null,
      City: "Kochi",
      CO: 77.44,
      NH3: 1.6,
      NO2: 1.0,
      OZONE: 0.0,
      PM25: 19.89,
      PM10: 23.58,
      SO2: 0.0,
      AQI: 77,
    },
    {
      id: null,
      City: "Udupi",
      CO: 36.0,
      NH3: 0.0,
      NO2: 5.0,
      OZONE: 73.0,
      PM25: 0.0,
      PM10: 28.6,
      SO2: 17.0,
      AQI: 73,
    },
    {
      id: null,
      City: "Bettiah",
      CO: 48.12,
      NH3: 5.0,
      NO2: 0.0,
      OZONE: 9.88,
      PM25: 25.85,
      PM10: 72.0,
      SO2: 10.0,
      AQI: 72,
    },
  ].slice(0, 6);

  const options = ["Real Time", "Last 7 Days", "Last Day", "Last Month"];

  const AqiOptions = ["CO", "CO2", "NO2", "OZONE", "SO2", "AQI", "PM10", "NH3"];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const AqiChange = (event) => {
    setAqiSelect(event.target.value);
  };

  return (
    <>
      <div className="C3-container flex flex-col gap-3 m-8 rounded-2xl">
        <div className="C3-txt">
          <div className="C3-heading flex flex-row items-center gap-2">
            <h3 className="text-xl text-[#33a0d3]">
              Most polluted cities in India
            </h3>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 128 128"
                fill="none"
              >
                {/* ... your SVG content */}
              </svg>
            </span>
          </div>
          <p className="text-sm text-slate-500 my-3 mb-4">
            Real Time worst city rankings
          </p>
          <div className="select flex flex-row gap-4">
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
            <select
              className="border border-gray-300 p-2 rounded-md mt-3"
              onChange={AqiChange}
              value={AqiSelect}
            >
              {AqiOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="C3-table">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rank
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  City
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  AQI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {citiesData.map((city, index) => (
                <tr key={index + 1}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{city.City}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        city.AQI > 150
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {city.AQI}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Component3;