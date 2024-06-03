import Image from "next/image";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="lg:flex-row flex-col-reverse flex justify-between">
      <div className="w-full md:w-1/2 relative">
        <div className="z-0 absolute -left-10 -top-10 w-full h-[50vh]">
          <Image
            src={"/assets/hero-bg.svg"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-black  relative z-50 space-y-4 ml-10 md:ml-28 my-4 md:my-10">
          <h1 className="text-2xl md:text-5xl font-bold">
            Make The Best <br /> Financial Decisions{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            harum quibusdam itaque aliquid officiis iure suscipit in quas fugit
            dolorum, quam corrupti, omnis libero quasi? Nisi, adipisci?
            Pariatur, est placeat.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="btn text-white font-light">Get Started  &#8594;	</button>
            <button className="btn font-light bg-white text-black border-none"><FaRegCirclePlay /> Watch Video</button>
          </div>
        </div>
        <div className="relative w-full h-[50vh]">
          <Image
            src={"/assets/hero-ribon.svg"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:absolute md:top-10  md:-right-20">
        <div className="relative w-full  h-screen">
          <Image
            src={"/assets/hero-right-img.png"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
