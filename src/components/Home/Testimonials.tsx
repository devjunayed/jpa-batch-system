import Image from "next/image";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="mt-10 relative">
        <div className="absolute right-20 -top-20 w-8 h-8  ">
          <Image src={"/assets/star.svg"} fill objectFit="contain" alt="" />
        </div>
        <h1 className="text-center text-md md:text-xl  font-semibold text-black">
          Testimonials
        </h1>
        <h3 className="text-xl md:text-3xl font-bold text-black text-center">
          What Our Users <br /> Say About Us?
        </h3>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:mt-20">
        <div className="md:w-1/2 w-full ">
          <div className="w-full relative h-[90vh] md:-my-20">
            <Image
              alt="feature left img"
              fill
              src={"/assets/testimonial-left.svg"}
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full my-4 md:mr-36">
          <div className="space-y-4">
            <div>
              <h3 className="text-black gap-2 font-bold md:justify-start justify-center  flex items-center mb-4">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="text-center md:text-left md:w-96 md:mx-0 mx-4">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
              <div className="w-28 relative mx-auto md:mx-0 md:text-left h-6 mt-4">
                <Image
                  alt="users"
                  fill
                  src={"/assets/users.svg"}
                />
              </div>
              <p className="text-black mt-4 font-bold text-center md:text-left">Nick Jones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
