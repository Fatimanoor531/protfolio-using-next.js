import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div id="about">
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300] h-[400]"
        alt="hero"
        src={"/assets/Image/profile.jpg"}
        width={450}
        height={650}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me
       
      </h1>
    
      <p className="mb-5 leading-relaxed">
      I am Fatima Noor Sheikh, a passionate and innovative developer. I
            strive to turn dreames into reality through code. I aspire to
            utilize my skills and knowledge to create innovative and effective
            solutions that make people's lives easier..
      </p>

      <p className="mb-5 leading-relaxed">
     I have complete my intermediate degree. Currently,I am a student at GIAIC, Where I am pursuing Artificial Intelligence (AI) Studies..
      </p>


      {/* <div className="flex justify-center">
        <a href={"/public/assets/CV/myCV.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button> */}
        {/* </a> */}
      {/* </div> */}
    </div>
  </div>
</section>

        </div>
    )
}

export default About;