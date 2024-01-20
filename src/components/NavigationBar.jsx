import React from "react";

export default function NavigationBar() {
  return (
    <nav className="p-4">
      <div className="mx-auto container flex justify-between items-center">
        <a href="/">
          <img className="w-[155px]" src="/images/logo.svg" alt="" />
        </a>

        <ul className="flex gap-8">
          <li>
            <a href="#" className="font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-medium">
              Advertise
            </a>
          </li>
          <li>
            <a href="#" className="font-medium">
              Supports
            </a>
          </li>
          <li>
            <a href="#" className="font-medium">
              About
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <button className="mr-8 font-semibold flex gap-2">
            <svg
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1582 20.2717V12.0984C18.1582 10.6229 16.9545 9.4192 15.479 9.4192H14.8046V5.64871C14.8046 2.53396 12.2706 0 9.15586 0C6.04111 0 3.51183 2.53864 3.51183 5.64871V6.29977C3.51183 6.74473 3.87249 7.1007 4.31277 7.1007C4.75305 7.1007 5.11839 6.74005 5.11839 6.29977V5.64871C5.11839 3.4192 6.93104 1.60656 9.16055 1.60656C11.3901 1.60656 13.2027 3.4192 13.2027 5.64871V9.4192H2.83736C1.36195 9.4192 0.158203 10.6183 0.158203 12.0984V20.2717C0.158203 21.7471 1.36195 22.9508 2.83736 22.9508H15.4837C16.9591 22.9461 18.1582 21.7471 18.1582 20.2717ZM1.76944 20.2717V12.0984C1.76944 11.5082 2.25188 11.0258 2.84204 11.0258H15.4837C16.0739 11.0258 16.5563 11.5082 16.5563 12.0984V20.2717C16.5563 20.8618 16.0739 21.3443 15.4837 21.3443H2.83736C2.2472 21.3396 1.76944 20.8618 1.76944 20.2717Z"
                fill="black"
              />
              <path
                d="M9.16051 14.3887C8.71554 14.3887 8.35489 14.7493 8.35489 15.1896V17.2645C8.35489 17.7095 8.71554 18.0655 9.16051 18.0655C9.60547 18.0655 9.96145 17.7048 9.96145 17.2645V15.1896C9.96145 14.7493 9.60547 14.3887 9.16051 14.3887Z"
                fill="black"
              />
            </svg>
            Login
          </button>

          <button className="w-[124px] h-[45px] bg-[#FFF0D7] rounded-[5px] font-bold text-[#E5A740]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
