import Image from "next/image";
import React from "react";

const Customizable: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse md:mt-20">
      <div className="md:w-1/2 w-full ">
        <div className="w-full relative h-[90vh] md:-my-20">
          <Image
            alt="feature left img"
            fill
            src={"/assets/customizable-left.svg"}
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full my-4 md:mr-36">
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="text-black gap-2 font-bold md:justify-start justify-center  flex items-center mb-4">
              <div className="w-6 h-6 relative">
                <Image
                  src={"/assets/crossair.svg"}
                  alt="feature.title"
                  fill
                  objectFit="contain"
                />
              </div>
              Fully Customizable
            </h3>
            <p className="text-center md:text-left md:mx-0 mx-4">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizable;
