import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { sendPrediction } from "../api/solarApi"; // Import the API function

const api = {
  key: "7e3cac9c1cfbf248f913bcef52361971",
  base: "https://api.openweathermap.org/data/2.5/",
};

const newAPI = {
  base: "https://api.open-meteo.com/v1/",
};

const SolarPredictionForm = ({ loading }) => {
  const [formDataList, setFormDataList] = useState([
    {
      air_temp: "",
      clearsky_dhi: "1",
      clearsky_dni: "1",
      clearsky_ghi: "1",
      cloud_opacity: "",
      precipitation_rate: "",
      relative_humidity: "",
      hour: "1",
      day: "1",
      month: "1",
      day_of_week: "1",
      year: "2024",
    },
  ]);

  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("Indore");

  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    searchPressed();
  }, []);

  async function searchPressed() {
    const response = await fetch(
      `${api.base}weather?q=${search}&APPID=${api.key}`
    );
    const result = await response.json();
    const newResult = await fetch(
      `${newAPI.base}forecast?latitude=${result.coord.lat}&longitude=${result.coord.lon}&hourly=temperature_2m,relative_humidity_2m,precipitation,cloud_cover`
    ).then((res) => res.json());

    // Initialize formDataList with 168 empty sets
    const newFormDataList = Array.from({ length: 24 }, (_, i) => ({
      air_temp: `${newResult.hourly.temperature_2m[i]}` || "",
      clearsky_dhi: "1",
      clearsky_dni: "1",
      clearsky_ghi: "1",
      cloud_opacity: `${newResult.hourly.cloud_cover[i]}` || "",
      precipitation_rate: `${newResult.hourly.precipitation[i]}` || "",
      relative_humidity: `${newResult.hourly.relative_humidity_2m[i]}` || "",
      hour: (i % 24) + 1, // Hour between 1 and 24
      day: Math.floor(i / 24) + 1, // Increment day every 24 hours
      month: "1", // You can modify this as needed
      day_of_week: `${new Date().getDay()}`, // Dynamically set the day of week
      year: "2024",
    }));

    // Update the state with the newly generated form data list for 168 hours
    setFormDataList(newFormDataList);
    console.log(formDataList);
  }

  const handleChange = (e, index) => {
    // const { name, value } = e.target;
    // const newFormDataList = formDataList.map((data, i) =>
    //   i === index ? { ...data, [name]: value } : data
    // );
    // setFormDataList(newFormDataList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Send predictions for all 168 sets of form data
      const predictioning = await Promise.all(
        formDataList.map(async (data) => await sendPrediction(data))
      );
      console.log(predictioning);
      // Save the predictions to state
      const predictionsData = predictioning.map((p) => p.prediction);
      setPredictions(predictionsData);

      // After getting predictions, navigate to the /display route
      navigate("/display", {
        state: { predictions: predictionsData, formData: formDataList },
      });
    } catch (error) {
      console.error("Error in prediction request:", error);
    } finally {
      setIsLoading(false); // Reset loading to false after the request completes
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold pt-6 mb-6 hover:cursor-pointer">
        Solar Prediction
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* Input fields for each formData */}
        <div className="flex flex-col gap-4 items-end">
          {/* Repeat for other fields */}
          {/* Example */}
          <div className="mx-4">
            <label className="font-bold" htmlFor={`location`}>
              Location :
            </label>
            <input
              className="rounded-lg p-1 m-1 border-[1px] border-blue-600 bg-blue-200 text-black"
              name="location"
              id={`location`}
              value="Indore"
              onChange={(e) => handleChange(e)}
              placeholder="Enter City Name"
            />
          </div>
        </div>

        <div className="m-4 mt-14">
          <button
            type="submit"
            disabled={isLoading}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {isLoading ? "Predicting..." : "Predict"}
            </span>
          </button>
        </div>
      </form>

      {predictions.length > 0 && (
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl">Prediction Results</h3>
          {predictions.map((prediction, index) => (
            <div key={index} className="flex gap-3 font-bold">
              <p>
                Prediction {index + 1} : {prediction}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolarPredictionForm;
