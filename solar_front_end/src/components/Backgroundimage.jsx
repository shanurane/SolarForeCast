import React from "react";

const BackgroundImage = (params) => {
  const backgroundStyle = {
    backgroundImage: params.image,
    backgroundSize: "cover", // Adjust to 'contain' if you want to fit the image
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: `${params.hgh}vh`, // Full height of the viewport
    position: "absolute", // Positions it behind other elements
    top: 0,
    left: 0, // Ensures the background starts from the top left corner
    zIndex: -1,
  };

  return <div className="absolute -z-10" style={backgroundStyle}></div>;
};

export default BackgroundImage;
