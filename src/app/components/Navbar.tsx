"use client";
import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" flex justify-between px-[6%]  items-center">
      <Link href="/">
        <Image width={100} priority={true} alt="Logo" src={logo} />
      </Link>
      <div className="xs:hidden lg:flex items-center justify-between w-[60%]">
        <Link className="uppercase text-[16px] font-normal " href="#about">
          About us
        </Link>
        <Link className="uppercase text-[16px] font-normal " href="#services">
          Services
        </Link>
        <Link className="uppercase text-[16px] font-normal " href="#portfolio">
          Portfolio
        </Link>
        <Link className="uppercase text-[16px] font-normal " href="#clients">
          Clients
        </Link>
        <Link className="uppercase text-[16px] font-normal " href="#vacancies">
          Vacancies
        </Link>
      </div>
      <p className="lg:flex xs:hidden gap-1 text-[16px] font-medium  ">
        <span className="opacity-60">+998 95</span>
        <span>240 51 11</span>
      </p>
      <button className="xs:flex lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clipPath="url(#clip0_312_716)">
            <path
              d="M8 6.39999C8 5.51636 8.71638 4.79999 9.6 4.79999H30.4C31.2836 4.79999 32 5.51636 32 6.39999C32 7.28361 31.2836 7.99999 30.4 7.99999H9.6C8.71638 7.99999 8 7.28355 8 6.39999ZM30.4 14.4H1.6C0.716375 14.4 0 15.1164 0 16C0 16.8836 0.716375 17.6 1.6 17.6H30.4C31.2836 17.6 32 16.8836 32 16C32 15.1164 31.2836 14.4 30.4 14.4ZM30.4 24H16C15.1164 24 14.4 24.7164 14.4 25.6C14.4 26.4835 15.1164 27.2 16 27.2H30.4C31.2836 27.2 32 26.4835 32 25.6C32 24.7164 31.2836 24 30.4 24Z"
              fill="#FBFAFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_312_716">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
