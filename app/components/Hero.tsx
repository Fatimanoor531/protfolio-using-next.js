"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-gray-300">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Fatima Noor Sheikh", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-800"></div>
          <p className="mb-8 leading-relaxed">
            I am Fatima Noor Sheikh, a passionate and innovative developer. I
            strive to turn dreames into reality through code. I aspire to
            utilize my skills and knowledge to create innovative and effective
            solutions that make people's lives easier..
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[28rem]"
            alt="hero"
            width={300}
            height={500}
            src={"/assets/Image/profile.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
