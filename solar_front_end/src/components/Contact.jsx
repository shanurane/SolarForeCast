import React from "react";
import BackgroundImage from "./Backgroundimage";

const Contact = () => {
  return (
    <div>
      <div className="left-0 top-0 sticky -z-10">
        <BackgroundImage image={`url(/imgs/S4.jpeg)`} hgh={82} />
      </div>
      <div className="backdrop-blur-lg bg-white bg-opacity-10"></div>
    </div>
  );
};

export default Contact;
