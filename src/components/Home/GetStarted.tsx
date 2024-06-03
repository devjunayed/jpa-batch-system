import Image from "next/image";
import React from "react";

import { FaApple } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="relative ">
      <div className="absolute -top-36 left-0 w-96 h-96  ">
        <Image
          alt=""
          src={"/assets/get-started-bg.svg"}
          fill
          objectFit="contain"
        />
      </div>
      <div className="relative  mx-auto w-[78vw] h-[70vh] rounded-lg mt-10 bg-black">
        <Image
          alt=""
          src={"/assets/get-started-bg-black.svg"}
          fill
          objectFit="contain"
        />
        <div className="mx-30 absolute top-1/4 left-10">
          <h1 className="text-lg md:text-3xl text-white mb-2">Ready To Get Started?</h1>
          <p className="text-white mb-4 w-1/2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            itaque in corporis ut quaerat aut.
          </p>
          <button className="btn border-none hover:bg-gray-100 bg-white text-black">
            Download App <FaApple />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
