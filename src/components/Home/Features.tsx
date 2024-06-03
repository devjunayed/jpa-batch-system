import { TFeatures } from "@/interfaces/data.interface";
import Image from "next/image";
import React from "react";

const Features: React.FC<{ data: TFeatures[] }> = ({ data }) => {
  console.log(data);
  return (
    <div className="flex md:flex-row flex-col-reverse">
      <div className="md:w-1/2 w-full ">
        <div className="w-full relative h-[90vh] md:-my-20">
          <Image
            alt="feature left img"
            fill
            src={"/assets/features-left.svg"}
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full my-4">
        <h1 className="uppercase md:text-left text-center text-[#FF5555]">
          Features
        </h1>
        <h3 className="text-xl text-center md:text-left md:text-3xl text-black font-bold ">
          Uifry Premium
        </h3>

        <div className="my-4 space-y-4">
          {data.map((feature, index) => (
            <div key={index}>
              <h3 className="text-black gap-2 font-bold md:justify-start justify-center  flex items-center">
                <div className="w-6 h-6 relative">
                  <Image
                    src={feature.icon}
                    alt="feature.title"
                    fill
                    objectFit="contain"
                  />
                </div>
                {feature.title}
              </h3>
              <p className="text-center md:text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
