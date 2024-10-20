import React, { useState } from "react";
import SolarPredictionForm from "./solarPredictionForm";
import BackgroundImage from "./Backgroundimage";

const App = () => {
  // State to hold the prediction result
  const [prediction, setPrediction] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(false);

  // State to handle any errors
  const [error, setError] = useState("");

  // Function to handle form submission and make the API request
  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError("");
    setPrediction(null);

    try {
      // Send a POST request to the backend with form data
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setPrediction(data.prediction);
      } else {
        setError(data.error || "Error occurred while predicting");
      }
    } catch (err) {
      setError("Server error: Could not connect to backend");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="left-0 top-0 sticky -z-10"></div>
      <div className="text-white">
        <div className="App flex flex-col items-center ">
          <h1 className="font-bold text-4xl md:text-6xl m-9 hover:cursor-pointer">
            Solar Radiation Forecasting
          </h1>

          {/* Use the SolarPredictionForm component for form input */}
          <SolarPredictionForm onSubmit={handleFormSubmit} loading={loading} />

          {/* Display loading state */}
          {loading && <p>Loading...</p>}

          {/* Display the prediction result */}
          {prediction && (
            <div className="prediction-result">
              <h3>Predicted Solar Radiation: {prediction} W/m²</h3>
            </div>
          )}

          {/* Display any errors */}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
