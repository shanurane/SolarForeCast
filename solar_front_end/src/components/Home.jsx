import React from "react";
import BackgroundImage from "./Backgroundimage";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Searchbar from "./Searchbar";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleClick = () => {
    navigate("/predict");
  };
  return (
    <div className="min-h-screen">
      <div className="w-full flex justify-end p-5 pt-10">
        <Searchbar />
      </div>
      <div className="left-0 top-0 sticky -z-10"></div>
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold pt-6 mb-6 hover:cursor-pointer text-white">
          Solar Prediction
        </h2>
      </div>
      <div className="flex justify-center items-center pt-24">
        <button
          onClick={handleClick}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Start
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
