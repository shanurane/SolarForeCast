import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-4 py-3 border-[1.5px] border-b-0 border-black bg-blue-400 bg-opacity-20 rounded-t-2xl">
        <div className="font-bold hover:cursor-pointer">/SOFO\</div>
        <li className="flex gap-12">
          <ul className="hover:cursor-pointer hover:font-bold">
            <a href="/">Home</a>
          </ul>
          <ul className="hover:cursor-pointer hover:font-bold">
            <a href="/about">About</a>
          </ul>
          <ul className="hover:cursor-pointer hover:font-bold">
            <a href="/contact">Contact</a>
          </ul>
        </li>
      </div>
    </>
  );
};

export default Navbar;
