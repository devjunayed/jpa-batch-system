import Image from "next/image";
import React from "react";
import QuestionCard from "./QuestionCard";

const FAQ = () => {
  return (
    <div className="mx-36 mt-16">
      <h1 className="text-[#FF5555]">FAQ</h1>
      <div className=" ">
        <h2 className="relative inline-block text-black font-bold text-xl md:text-4xl">
          Frequently Asked <br /> Questions
          <div className="w-8 h-8 absolute -right-36 bottom-0">
            <Image src="/assets/star.svg" alt="" fill objectFit="contain" />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="">
            <QuestionCard
              bgColor={`${
                index + 1 === 1 || index + 1 === 4 || index + 1 === 5
                  ? "#FF5555"
                  : ""
              }`}
              title="the best financial accounting app ever!"
              description="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
