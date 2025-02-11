import React from "react";
import { IoLogoFirefox } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <IoLogoFirefox className="text-4xl" />
            <span className="ml-3 text-xl">Fatima Noor Sheikh</span>
          </a>
          <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 Fatima Noor Sheikh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
