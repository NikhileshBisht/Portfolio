"use client";

import Link from "next/link";
import { useState } from "react";

export default function FlowGraph() {
  const [activeStep, setActiveStep] = useState(1);

  const educationData = {
    1: {
      image:
        "https://mayurpublicschool.com/wp-content/uploads/2024/10/Building-Photo_karan.jpg",
      title: "Class 10",
      school: "Mayur Public School",
      link: "https://mayurpublicschool.com/",
      description: (
        <>
          Year : 2018 <br />
          Boards : C.B.S.E <br />
          Percentage : 74%
        </>
      )
    },

    2: {
      image:
        "https://content.jdmagicbox.com/v2/comp/delhi/r6/011pxx11.xx11.200705161805.b2r6/catalogue/h-m-d-a-v-sr-sec-school-darya-ganj-delhi-schools-ztrqfuvmar.jpg",
      title: "Class 12",
      school: "H.M.D.A.V. Senior Secondary School",
      link: "https://davcmc.net.in/",
      description: (
        <>
          Year : 2018-2020 <br />
          Boards : C.B.S.E <br />
          Percentage : 74%
        </>
      )
    },

    3: {
      image:
        "https://edsathi.com/wp-content/uploads/2024/03/2021-07-19-11.jpg",
      title: "B.Tech",
      school: "Maharaja Agrasen Institute of Technology",
      link: "https://mait.ac.in/",
      description: (
        <>
          Year : 2020-2024 <br />
          Jee Mains : 105754 <br />
          CGPA : 8.62
        </>
      )
    },
  };

  const cardClass = (step) => `
  relative
  w-[240px] sm:w-[300px] md:w-[340px] lg:w-[360px]
  h-[150px] sm:h-[180px] md:h-[210px] lg:h-[230px]
  rounded-2xl sm:rounded-3xl
  overflow-hidden
  cursor-pointer
  transition-all
  duration-500
  hover:scale-[1.03]
  ${activeStep === step
      ? "shadow-[0_15px_40px_rgba(0,0,0,0.3)] scale-[1.02]"
      : "opacity-75"
    }
`;

  return (
    <div className="w-full flex justify-center py-10 sm:py-20 px-4">
      <div className="w-full max-w-6xl">

        {/* CARDS */}
        <div className="flex flex-col sm:flex-row gap-6 sm:justify-between items-center sm:items-stretch">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              onClick={() => setActiveStep(step)}
              className={cardClass(step)}
            >
              <img
                src={educationData[step].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className={`absolute inset-0 transition-all duration-500 ${activeStep === step
                  ? "bg-black/65"
                  : "bg-white/80 backdrop-blur-sm"
                  }`}
              />

              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center">
                <h3
                  className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-bold ${activeStep === step ? "text-white" : "text-gray-900"
                    }`}
                >
                  {educationData[step].title}
                  <br />
                  {educationData[step].school}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILS PANEL */}
        <div
          key={activeStep}
          className="mt-10 sm:mt-16 px-2 sm:px-4 animate-[fadeSmoke_0.5s_ease]"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {educationData[activeStep].school}

            <Link
              href={educationData[activeStep].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-3 text-indigo-600 font-semibold"
            >
              📌
            </Link>
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-9 text-gray-600 max-w-4xl">
            {educationData[activeStep].description}
          </p>
        </div>
      </div>
    </div>
  );
}