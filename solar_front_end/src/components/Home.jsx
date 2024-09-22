import React from "react";
import BackgroundImage from "./Backgroundimage";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleClick = () => {
    navigate("/predict");
  };
  return (
    <div>
      <div className="left-0 top-0 sticky -z-10">
        <BackgroundImage image={`url(/imgs/S3.jpeg)`} hgh={82} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold pt-6 mb-6 hover:cursor-pointer text-orange-700">
          Solar Prediction
        </h2>
      </div>
      <div
        onClick={handleClick}
        className="flex justify-center items-center pt-24"
      >
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Start
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
