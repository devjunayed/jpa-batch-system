import { TUiData } from "@/interfaces/data.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero: React.FC<{ data: TUiData }> = ({ data }) => {
  return (
    <div className="lg:flex-row flex-col-reverse flex justify-between min-h-screen">
      <div className="w-full md:w-1/2 relative">
        <div className="z-0 absolute -left-10 -top-10 w-full h-[50vh]">
          <Image
            src="/assets/hero-bg.svg"
            alt="Background"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-black relative z-50 space-y-4 ml-10 md:ml-28 my-4 md:my-10">
          <h1 className="text-2xl md:text-5xl font-bold">
            {data?.hero?.headline}
          </h1>
          <p>{data?.hero?.subheadline}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {data.hero.ctaButtons.map((btn, index) => (
              <Link
                className={`btn ${
                  index === 0
                    ? "text-white"
                    : "text-black bg-white border-none hover:bg-gray-100"
                }`}
                key={index}
                href={btn.link}
              >
                {btn.text}
                {index === 0 ? (
                  <IoMdCloudDownload />
                ) : (
                  <IoIosArrowRoundForward />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative w-full h-[50vh] mt-10">
          <Image
            src="/assets/hero-ribon.svg"
            alt="Ribbon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:absolute md:top-10 md:-right-20">
        <div className="relative w-full h-screen">
          <Image
            src="/assets/hero-right-img.png"
            alt="Hero Right"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
