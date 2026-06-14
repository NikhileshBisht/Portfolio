import React from "react";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f9f9f9] w-full py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-between">

        {/* Left Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-[#2d2e32] text-3xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h2>

          <p className="text-[#555555] text-base md:text-lg leading-relaxed">
            I'm interested in freelance opportunities — especially ambitious
            or large projects. However, if you have another request or
            question, don't hesitate to contact me.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-[#2d2e32] text-xl font-bold mb-4">
            SAY HELLO
          </h3>

          <div className="flex items-center gap-3">
            <CiMail className="text-3xl text-[#2d2e32]" />

            <a
              href="mailto:nikhileshbisht2002@gmail.com"
              className="text-[#555555] break-all hover:text-black transition"
            >
              nikhileshbisht2002@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;