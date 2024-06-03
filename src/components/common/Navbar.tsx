import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="text-[#FF5555]">Home</li>
      <li>About Us</li>
      <li>Pricing</li>
      <li>Feature</li>
    </>
  );

  return (
    <div className="navbar w-full justify-between text-black">
      <div className="navbar-start w-[90%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-base gap-2  menu-sm dropdown-content mt-3 z-[1] p-2  bg-white-100 shadow-xl rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link href="/">
          <div className="relative h-[32px] w-[100px]">
            <Image alt="" fill objectFit="contain" src="assets/logo.svg" />
          </div>
        </Link>
        <div className="navbar-start ml-8 hidden lg:flex">
          <ul className="menu text-lg gap-4 menu-horizontal px-1">{menuItems}</ul>


          
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn text-white">Download</a>
      </div>
    </div>
  );
};

export default Navbar;
