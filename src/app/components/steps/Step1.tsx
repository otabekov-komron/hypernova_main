import React, { useState, useEffect } from "react";
import "../style.css";

const Step1 = () => {
  const [showStep1, setShowStep1] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleStep1Hover = () => {
    if (!isMobile) {
      const progressBar = document.getElementById("progress_step1");
      if (progressBar) {
        progressBar.style.width = "0%";

        setTimeout(() => {
          setShowStep1(true);
        }, 2500); // Adjust this timeout based on your transition duration
      }
    }
  };

  useEffect(() => {
    const setMobileStatus = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    setMobileStatus();
    window.addEventListener("resize", setMobileStatus);
    return () => window.removeEventListener("resize", setMobileStatus);
  }, []);

  return (
    <div className="flex items-center xs:text-[14px]">
      <p className="pe-4 xs:hidden lg:block lg:text-[32px] xs:text-[14px]">
        Step 1
      </p>
      <span className="circle lg:block xs:hidden"></span>
      <div className="progress-bar-left lg:block xs:hidden">
        <span
          id="progress_step1"
          style={{ width: "100%" }}
          className="percentage-left transition-width duration-[2s] ease-in-out"
        ></span>
      </div>
      <span
        onMouseEnter={handleStep1Hover}
        className={`bg-mainWhite p-8 z-10 inner rounded-full ${
          isMobile ? "pointer-events-none" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
        >
          <g clipPath="url(#clip0_226_1116)">
            <path
              d="M21 17.0122C24.904 17.0122 28.0801 13.8361 28.0801 9.93213C28.0801 6.02816 24.904 2.85205 21 2.85205C17.096 2.85205 13.9199 6.02816 13.9199 9.93213C13.9199 13.8361 17.096 17.0122 21 17.0122ZM21 5.29346C23.5578 5.29346 25.6387 7.37435 25.6387 9.93213C25.6387 12.4899 23.5578 14.5708 21 14.5708C18.4422 14.5708 16.3613 12.4899 16.3613 9.93213C16.3613 7.37435 18.4422 5.29346 21 5.29346Z"
              fill="#3C096C"
            />
            <path
              d="M35.3226 17.0124C37.7906 17.0124 39.7985 15.0045 39.7985 12.5365C39.7985 10.0684 37.7906 8.06055 35.3226 8.06055C32.8546 8.06055 30.8467 10.0684 30.8467 12.5365C30.8467 15.0045 32.8546 17.0124 35.3226 17.0124ZM35.3226 10.502C36.4444 10.502 37.3571 11.4146 37.3571 12.5365C37.3571 13.6583 36.4444 14.571 35.3226 14.571C34.2008 14.571 33.2881 13.6583 33.2881 12.5365C33.2881 11.4146 34.2008 10.502 35.3226 10.502Z"
              fill="#3C096C"
            />
            <path
              d="M36.3075 19.7793H34.4194C32.1946 19.7793 30.274 21.0937 29.3988 22.9818C27.597 21.0148 25.0089 19.7793 22.1375 19.7793H19.8623C16.9909 19.7793 14.4028 21.0148 12.6009 22.9818C11.7257 21.0937 9.80509 19.7793 7.58024 19.7793H5.69222C2.64535 19.7793 0.166504 22.2432 0.166504 25.2716V34.1592C0.166504 35.474 1.24023 36.5436 2.56006 36.5436H10.0248C10.15 38.0003 11.3749 39.1478 12.8636 39.1478H29.1362C30.6248 39.1478 31.8497 38.0003 31.9749 36.5436H39.3544C40.7213 36.5436 41.8333 35.436 41.8333 34.0745V25.2716C41.8332 22.2432 39.3543 19.7793 36.3075 19.7793ZM2.60791 25.2716C2.60791 23.5894 3.99154 22.2207 5.69222 22.2207H7.58024C9.28092 22.2207 10.6646 23.5894 10.6646 25.2716V26.1075C9.84367 28.2449 10.0135 29.5258 10.0135 34.1022H2.60791V25.2716ZM29.5448 36.2978C29.5448 36.5231 29.3615 36.7064 29.1362 36.7064H12.8635C12.6382 36.7064 12.4549 36.523 12.4549 36.2978V29.6281C12.4549 25.5436 15.7778 22.2207 19.8622 22.2207H22.1374C26.2218 22.2207 29.5448 25.5436 29.5448 29.628V36.2978ZM39.3918 34.0745C39.3918 34.1166 39.8468 34.1022 31.9862 34.1022C31.9862 29.4919 32.1547 28.2414 31.3351 26.1075V25.2716C31.3351 23.5894 32.7188 22.2207 34.4194 22.2207H36.3075C38.0081 22.2207 39.3918 23.5894 39.3918 25.2716V34.0745Z"
              fill="#3C096C"
            />
            <path
              d="M6.67708 17.0124C9.1451 17.0124 11.153 15.0045 11.153 12.5365C11.153 10.0684 9.1451 8.06055 6.67708 8.06055C4.20907 8.06055 2.20117 10.0684 2.20117 12.5365C2.20117 15.0045 4.20907 17.0124 6.67708 17.0124ZM6.67708 10.502C7.79891 10.502 8.71159 11.4146 8.71159 12.5365C8.71159 13.6583 7.79891 14.571 6.67708 14.571C5.55526 14.571 4.64258 13.6583 4.64258 12.5365C4.64258 11.4146 5.55526 10.502 6.67708 10.502Z"
              fill="#3C096C"
            />
          </g>
          <defs>
            <clipPath id="clip0_226_1116">
              <rect
                width="41.6667"
                height="41.6667"
                fill="white"
                transform="translate(0.166504 0.166504)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      <div
        className={`${
          isMobile ? 'visible opacity-100' : showStep1 ? 'opacity-100' : 'opacity-0 invisible'
        } bg-gray-200 p-4 lg:ml-24 xs:-ml-4 speech left transition-opacity duration-500 ease-in-out`}
      >
        Studying the client, offering them suitable solutions, signing agreements
      </div>
    </div>
  );
};

export default Step1;
