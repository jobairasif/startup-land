import React from "react";

export default function HeroSection() {
  return (
    <section className="px-4 pt-28 ">
      <div className="mx-auto container grid grid-cols-2 gap-10 items-center ">
        <div>
          <h1 className="text-7xl font-bold mb-8 text-[#02073E]">
            Ultimate support system for leading agencies
          </h1>
          <p className="text-xl font-medium leading-[42px] text-[#02073E] mb-7">
            Get your tests delivered at let home collect sample from <br /> the
            victory of the managments that supplies best <br /> design system
            guidelines ever.
          </p>

          <div className="flex gap-5 ">
            <input
              className="h-[60px] w-[350px] bg-[#FFFFFF] rounded-[5px] shadow-[0_8px_30px_rgb(72,59,16,0.08)] rounded-[5px] pl-7 "
              type="text"
              placeholder="Enter Email Address"
            />
            <button className="bg-[#FFC059] w-[163px] h-[60px] rounded-[5px] font-bold text-white">Get Started</button>
          </div>
        </div>

        <div>
          <img className="w-full" src="/images/hero-section-img.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
