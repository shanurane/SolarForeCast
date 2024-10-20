import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-4 py-3 flex justify-center text-white border-black bg-opacity-80">
        <div className="font-bold flex justify-center items-center">
          <img src="/imgs/logo.webp" alt="..." className="w-6 rounded-full" />
          <span>/SOFO\&copy; </span>
        </div>
        <div> 2024 All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
