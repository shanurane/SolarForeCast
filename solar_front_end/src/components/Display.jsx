import React from "react";
import BackgroundImage from "./Backgroundimage";
import { useLocation } from "react-router-dom";

const Display = (params) => {
  const location = useLocation();
  const { predictions, formData } = location.state || {};
  return (
    <div>
      <div className="w-full h-full">
        <div className="flex h-72 w-full">
          <div className="flex flex-col w-[60%]">
            <div className="m-2">
              <div></div>
              <div className="w-full h-full rounded-xl">
                <img
                  src="/imgs/S8.jpeg"
                  alt=".."
                  className="rounded-xl w-full h-[50%]"
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] m-2 inset-0 backdrop-blur-sm">
            <div className="w-full h-full border-[1.5px] border-white rounded-xl shadow-[0_0_20px_theme('colors.white')]">
              <div className="flex justify-center items-center text-3xl font-bold text-white">
                <h1>Weather</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 w-full p-2 inset-0 backdrop-blur-sm">
          <div className="w-full h-full flex border-[1.5px] border-white rounded-xl shadow-[0_0_20px_theme('colors.white')]">
            <div className="flex flex-col justify-around rounded-l-xl text-white border-r-[1px] border-white p-2 px-4">
              <p>Time</p>
              <p>GHI</p>
              <p>DNI</p>
              <p>DHI</p>
            </div>
            <div className="flex flex-row justify-between overflow-x-auto max-w-full">
              {predictions ? (
                predictions.slice(0, 24).map((prediction, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around text-white border-r-[1px] border-white p-2 px-4"
                  >
                    <p>
                      {index}-{index + 1}
                    </p>
                    <p>{prediction[0][0]}</p>
                    <p>{prediction[0][1]}</p>
                    <p>{prediction[0][2]}</p>
                  </div>
                ))
              ) : (
                <p>No Prediction Available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
