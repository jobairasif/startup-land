import React from "react";

export default function PremiumFeatures() {
  return (
    <section className="px-4">
      <div className="container mx-4 flex items-center">
        <div>
          <img className="h-fit" src="/images/premium-features-img.svg" alt="" />
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-8 text-[#0F2137]">
            Meet our premium features <br /> that will make you wow
          </h3>
          <p className="mb-8 text-[#0F2137] mb-20">
            Build an incredible workplace and grow your business with <br />{" "}
            Gusto’s all-in-one platform with amazing contents.
          </p>
          <h4 className="text-lg font-semibold mb-4 text-[#0F2137] pl-10">
            Organize your project content
          </h4>
          <p className="text-[#0F2137] pl-10">
            Get your website ads tests delivered at let collect sample from the{" "}
            <br />
            victory of the managments that supplies best design system which{" "}
            <br />
            guidelines ever with multiple features.
          </p>

          <button className="flex mt-8 h-[80px] w-[550px] bg-[#F6F8FB] rounded-[10px] items-center gap-24 pl-10 font-medium">
            Collaborate your multiple team support easily
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6499 7.23588L14.5149 0.316535C14.0796 -0.105512 13.3735 -0.105512 12.9383 0.316535C12.5028 0.739114 12.5028 1.42351 12.9383 1.84556L18.1701 6.91921H1.11477C0.499168 6.91921 0 7.40308 0 8.0004C0 8.59717 0.499168 9.08158 1.11477 9.08158H18.1701L12.9384 14.1552C12.5029 14.5767 12.5029 15.2617 12.9384 15.6837C13.156 15.8945 13.4415 15.9999 13.7268 15.9999C14.0121 15.9999 14.2974 15.8945 14.515 15.6837L21.6499 8.76437C22.0853 8.34288 22.0853 7.65793 21.6499 7.23588Z"
                fill="#0F2137"
              />
            </svg>
          </button>
          <button className="flex mt-8 h-[80px] w-[550px] bg-[#F6F8FB] rounded-[10px] items-center gap-32 pl-10 font-medium">
            Build your team's knowledge base system{" "}
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6499 7.23588L14.5149 0.316535C14.0796 -0.105512 13.3735 -0.105512 12.9383 0.316535C12.5028 0.739114 12.5028 1.42351 12.9383 1.84556L18.1701 6.91921H1.11477C0.499168 6.91921 0 7.40308 0 8.0004C0 8.59717 0.499168 9.08158 1.11477 9.08158H18.1701L12.9384 14.1552C12.5029 14.5767 12.5029 15.2617 12.9384 15.6837C13.156 15.8945 13.4415 15.9999 13.7268 15.9999C14.0121 15.9999 14.2974 15.8945 14.515 15.6837L21.6499 8.76437C22.0853 8.34288 22.0853 7.65793 21.6499 7.23588Z"
                fill="#0F2137"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
