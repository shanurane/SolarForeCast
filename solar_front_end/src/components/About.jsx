import React from "react";
import BackgroundImage from "./Backgroundimage";

const About = () => {
  return (
    <div className="relative h-screen">
      <div className="left-0 top-0 sticky -z-10">
        <BackgroundImage image={`url(/imgs/S1.jpeg)`} hgh={91} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center overflow-y-auto p-6 text-red-600 backdrop-blur-md bg-opacity-60">
        <h1 className="text-4xl font-bold mb-4">About Solar Prediction App</h1>
        <p className="text-lg max-w-3xl text-center">
          Welcome to the Solar Prediction App! This application allows users to
          predict solar energy generation using various weather parameters like
          temperature, humidity, cloud cover, and more. By leveraging weather
          data from reliable APIs, it provides accurate solar predictions for up
          to 24 hours.
        </p>
        <p className="text-lg max-w-3xl text-center mt-4">
          The application uses cutting-edge machine learning models to analyze
          weather data and forecast potential solar energy output. Whether
          you're a solar energy enthusiast, a researcher, or someone looking to
          optimize your solar panel usage, this app is designed to help you make
          informed decisions.
        </p>
        <p className="text-lg max-w-3xl text-center mt-4">
          Feel free to explore the application, input weather parameters, and
          generate solar energy predictions for your area.
        </p>
        <p className="text-lg max-w-3xl text-center mt-4 font-bold">
          Technologies Used:
        </p>
        <ul className="list-disc text-lg max-w-3xl mt-4">
          <li>React for building the user interface</li>
          <li>OpenWeather and Open-Meteo APIs for weather data</li>
          <li>Machine learning models for solar prediction</li>
          <li>React Router for smooth navigation</li>
        </ul>
        <p className="text-lg max-w-3xl text-center mt-4">
          Thank you for using the Solar Prediction App. We hope it helps you in
          your solar energy journey!
        </p>
      </div>
    </div>
  );
};

export default About;
