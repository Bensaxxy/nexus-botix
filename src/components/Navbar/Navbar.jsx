/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gray3 w-full">
      <div className=" bg-gray3 w-full fixed z-50 ">
        <div className=" container flex items-center justify-between py-4">
          <Link to="/">
            <img src="/Logo.svg" alt="Logo" className="h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
