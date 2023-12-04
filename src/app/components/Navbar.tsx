"use client";
import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import '../globals.css'

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("togled");
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open"); // Add a class to the body
    } else {
      document.body.classList.remove("menu-open"); // Remove the class when the menu is closed
    }
  }, [isMenuOpen]);

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
      <a href="tel:+998952405111" className="lg:flex xs:hidden gap-1 text-[16px] font-medium  ">
        <span className="opacity-60">+998 95</span>
        <span>240 51 11</span>
      </a>
      <button onClick={toggleMenu} className="xs:flex lg:hidden ">
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
      {isMenuOpen && (
        <div className={`lg:hidden transition-transform ease-linear duration-300 rounded-s-[50px] flex flex-col  h-[100vh] bottom-0 top-0 left-[15%] right-0 gap-10 justify-evenly items-center bg-secondary3 fixed text-mainWhite  z-[99999] ${isMenuOpen ? "translate-x-[0] " : "translate-x-[100%]"}`} >
          {/* Mobile Links */}
          <button onClick={toggleMenu} className="xs:flex lg:hidden self-end pe-6 -mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_607_1272)">
                <path
                  d="M0.502207 23.4977C0.837035 23.8325 1.27564 23.9999 1.71425 23.9999C2.15286 23.9999 2.59147 23.8325 2.9263 23.4977L12 14.424L21.0736 23.4977C21.4085 23.8325 21.8471 23.9999 22.2857 23.9999C22.7243 23.9999 23.1629 23.8325 23.4977 23.4977C24.1674 22.828 24.1674 21.7432 23.4977 21.0736L14.4241 11.9999L23.4978 2.92629C24.1674 2.25663 24.1674 1.17181 23.4978 0.502198C22.829 -0.167459 21.7425 -0.167459 21.0737 0.502198L12 9.57584L2.92635 0.502151C2.25754 -0.167506 1.17107 -0.167506 0.502254 0.502151C-0.167402 1.17181 -0.167402 2.25664 0.502207 2.92624L9.57589 11.9999L0.502207 21.0736C-0.167402 21.7432 -0.167402 22.8281 0.502207 23.4977Z"
                  fill="#EBD9FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_607_1272">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="flex flex-col gap-10">
            <Link className="uppercase text-[24px] font-normal " href="#about">
              About us
            </Link>
            <Link
              className="uppercase text-[24px] font-normal "
              href="#services"
            >
              Services
            </Link>
            <Link
              className="uppercase text-[24px] font-normal "
              href="#portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="uppercase text-[24px] font-normal "
              href="#clients"
            >
              Clients
            </Link>
            <Link
              className="uppercase text-[24px] font-normal "
              href="#vacancies"
            >
              Vacancies
            </Link>
          </div>
          <div className="flex justify-center    gap-5 w-full">
            <svg
              data-new-gr-c-s-check-loaded
              data-gr-ext-installed
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_226_1005)">
                <path
                  d="M26.4844 0H3.51562C1.57711 0 0 1.57711 0 3.51562V26.4844C0 28.4229 1.57711 30 3.51562 30H26.4844C28.4229 30 30 28.4229 30 26.4844V3.51562C30 1.57711 28.4229 0 26.4844 0ZM27.6562 26.4844C27.6562 27.1305 27.1305 27.6562 26.4844 27.6562H19.8047V18.1055H23.4252L24.0234 14.4727H19.8047V11.9531C19.8047 10.9585 20.5679 10.1953 21.5625 10.1953H23.9648V6.5625H21.5625C18.5787 6.5625 16.1732 8.97949 16.1732 11.9633V14.4727H12.6562V18.1055H16.1732V27.6562H3.51562C2.86945 27.6562 2.34375 27.1305 2.34375 26.4844V3.51562C2.34375 2.86945 2.86945 2.34375 3.51562 2.34375H26.4844C27.1305 2.34375 27.6562 2.86945 27.6562 3.51562V26.4844Z"
                  fill="#EBD9FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_226_1005">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              data-new-gr-c-s-check-loaded
              data-gr-ext-installed
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_287_1311)">
                <path
                  d="M9.37546 24.7852H5.2739V11.543H9.37546V24.7852ZM9.7847 7.32399C9.7847 5.99808 8.70895 4.92188 7.38373 4.92188C6.05347 4.92188 4.98047 5.99808 4.98047 7.32399C4.98047 8.65036 6.05347 9.72656 7.38373 9.72656C8.70895 9.72656 9.7847 8.65036 9.7847 7.32399ZM24.7266 17.4998C24.7266 13.9451 23.9756 11.3086 19.823 11.3086C17.8276 11.3086 16.4882 12.3065 15.9414 13.3443H15.9375V11.543H11.9531V24.7852H15.9375V18.2103C15.9375 16.4884 16.3758 14.8203 18.5101 14.8203C20.6154 14.8203 20.6836 16.7894 20.6836 18.3197V24.7852H24.7266V17.4998ZM30 26.4844V3.51562C30 1.577 28.423 0 26.4844 0H3.51562C1.577 0 0 1.577 0 3.51562V26.4844C0 28.423 1.577 30 3.51562 30H26.4844C28.423 30 30 28.423 30 26.4844ZM26.4844 2.34375C27.1305 2.34375 27.6562 2.86949 27.6562 3.51562V26.4844C27.6562 27.1305 27.1305 27.6562 26.4844 27.6562H3.51562C2.86949 27.6562 2.34375 27.1305 2.34375 26.4844V3.51562C2.34375 2.86949 2.86949 2.34375 3.51562 2.34375H26.4844Z"
                  fill="#EBD9FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_287_1311">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              data-new-gr-c-s-check-loaded
              data-gr-ext-installed
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_226_1015)">
                <path
                  d="M21.776 0H8.22404C3.6893 0 0 3.6893 0 8.2241V21.776C0 26.3108 3.6893 30 8.22404 30H21.776C26.3108 30 30 26.3108 30 21.776V8.2241C30 3.6893 26.3108 0 21.776 0ZM28.2284 21.776C28.2284 25.3338 25.3339 28.2284 21.776 28.2284H8.22404C4.66617 28.2284 1.77164 25.3339 1.77164 21.776V8.2241C1.77164 4.66617 4.66617 1.77164 8.22404 1.77164H21.776C25.3339 1.77164 28.2284 4.66617 28.2284 8.2241V21.776Z"
                  fill="#EBD9FC"
                />
                <path
                  d="M14.9999 6.77148C10.4627 6.77148 6.77148 10.4627 6.77148 14.9999C6.77148 19.537 10.4627 23.2282 14.9999 23.2282C19.537 23.2282 23.2283 19.537 23.2283 14.9998C23.2283 10.4627 19.537 6.77148 14.9999 6.77148ZM14.9999 21.4567C11.4396 21.4567 8.54307 18.5601 8.54307 14.9998C8.54307 11.4395 11.4396 8.54301 14.9999 8.54301C18.5602 8.54301 21.4567 11.4396 21.4567 14.9999C21.4567 18.5601 18.5602 21.4567 14.9999 21.4567Z"
                  fill="#EBD9FC"
                />
                <path
                  d="M23.7207 3.7793C22.3422 3.7793 21.2207 4.90084 21.2207 6.27932C21.2207 7.65779 22.3422 8.77928 23.7207 8.77928C25.0991 8.77928 26.2206 7.65773 26.2206 6.27926C26.2206 4.90078 25.0991 3.7793 23.7207 3.7793ZM23.7207 7.00758C23.3191 7.00758 22.9923 6.68086 22.9923 6.27926C22.9923 5.87766 23.3191 5.55094 23.7207 5.55094C24.1223 5.55094 24.449 5.87771 24.449 6.27926C24.449 6.6808 24.1223 7.00758 23.7207 7.00758Z"
                  fill="#EBD9FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_226_1015">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              data-new-gr-c-s-check-loaded
              data-gr-ext-installed
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_226_1025)">
                <path
                  d="M18.447 8.8604L7.70508 12.441C6.82129 12.7355 6.25 13.5287 6.25 14.4607C6.25 15.3924 6.82129 16.1849 7.70569 16.48L12.067 17.9336L13.5205 22.2955C13.815 23.1786 14.6075 23.7499 15.5392 23.7499C16.4713 23.7499 17.2638 23.1786 17.5589 22.2942L21.1395 11.5524C21.3956 10.783 21.1987 9.94865 20.625 9.37492C20.0513 8.80119 19.2157 8.60313 18.447 8.8604ZM15.5392 20.4467L14.0424 15.9566L9.55261 14.4601L18.5318 11.4669L15.5392 20.4467Z"
                  fill="#EBD9FC"
                />
                <path
                  d="M15 0C6.72882 0 0 6.72882 0 15C0 23.2712 6.72882 30 15 30C23.2712 30 30 23.2712 30 15C30 6.72882 23.2712 0 15 0ZM15 27.5C8.1076 27.5 2.5 21.8924 2.5 15C2.5 8.1076 8.1076 2.5 15 2.5C21.8924 2.5 27.5 8.1076 27.5 15C27.5 21.8924 21.8924 27.5 15 27.5Z"
                  fill="#EBD9FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_226_1025">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
