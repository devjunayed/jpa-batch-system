import { TPricing } from "@/interfaces/data.interface";
import React from "react";

const Pricing: React.FC<{ data: TPricing[] }> = ({ data }) => {
  return (
    <div className="my-10">
      <h1 className="text-xl md:text-3xl text-black text-center fotn-bold">
        Our Packages
      </h1>
      <div className="mx-30 flex justify-center flex-col md:flex-row gap-4 mt-10">
        {data.map((pricing, index) => (
          <div
            key={index}
            className="shadow p-5 rounded-lg border-t-4 border-[#FF5555] bg-white"
          >
            <p className="uppercase text-sm font-medium text-gray-500">
              {pricing.plan}
            </p>

            <p className="mt-4 text-3xl text-gray-700 font-medium">
              {pricing.price}
            </p>

            <div className="mt-8">
              <ul className="grid grid-cols-1 gap-4">
                {pricing.features.map((feature, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-[#FF5555]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
