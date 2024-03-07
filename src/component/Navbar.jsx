import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full bg-[#832161] py-2 px-20  ">
      <div>
        <Link to="/">
          <img src="asset/virtual-logo.png" alt="" />
        </Link>
      </div>
      <div className="w-full font-semibold">
        <ul className="flex items-center text-white justify-end h-full">
          <li className="m-1 p-1 px-2 hover:bg-[#a9608f] rounded-md">
            <Link to="/date-conveter">Date Conveter</Link>
          </li>
          <li className="m-1 p-1 px-2 hover:bg-[#a9608f] rounded-md">
            <Link to="/roman-to-nepali">Roman to Nepali Unicode</Link>
          </li>
          <li className="m-1 p-1 px-2 hover:bg-[#a9608f] rounded-md">
            <Link to="/blog">Blog </Link>
          </li>
          <li className="m-1 p-1 px-2 hover:bg-[#a9608f] rounded-md">
            <Link to="/about-us"> About US</Link>
          </li>
          <li className="m-1 p-1 px-2 hover:bg-[#a9608f] rounded-md">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="m-1 p-1 px-2 hover:bg-[#a9608f] rounded-md">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
