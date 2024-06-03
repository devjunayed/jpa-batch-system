import Image from "next/image";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-black">
        <aside>
          <div className="relative w-24 h-12">
            <Image src={"/assets/logo.svg"} alt="" fill objectFit="contain" />
          </div>
          <div className="flex gap-2 font-bold">
            <MdEmail className="text-xl text-[#FF5555]" /> help@frybix.com
          </div>
          <div className="flex gap-2 font-bold">
            <MdPhone className="text-xl text-[#FF5555]" /> +1 234 456 678 89
          </div>
        </aside>
        <nav className="text-black">
          <h6 className="text-lg ">Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Bookings</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav className="text-black">
          <h6 className="text-lg">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <nav className="text-black">
          <h6 className="text-lg">Product</h6>
          <a className="link link-hover">Take Tour</a>
          <a className="link link-hover">Live Chat</a>
          <a className="link link-hover">Reviews</a>
        </nav>
        <form className="text-black">
          <h6 className="text-lg">Newsletter</h6>
          <a className="link link-hover">Stay Up To Date</a>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered bg-white text-black"
              />
              <button className="btn text-white border-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className=" w-[60vw] mx-auto h-[0.5px] text-gray-50 bg-gray-300"></div> 
      <footer className="footer footer-center p-4 text-black">
        <aside>
          <p>Copyright{new Date().getFullYear()}Ulfry.Com All right reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
