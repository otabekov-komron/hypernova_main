import React, { useState, useEffect } from "react";
import "../style.css";

const Step5 = () => {
  const [showStep5, setShowStep5] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleStep5Hover = () => {
    if (!isMobile) {
      const progressBar = document.getElementById("progress_step5");
      if (progressBar) {
        progressBar.style.width = "0%";

        setTimeout(() => {
          setShowStep5(true);
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
        Step 5
      </p>
      <span className="circle lg:block xs:hidden"></span>
      <div className="progress-bar-left lg:block xs:hidden">
        <span
          id="progress_step5"
          style={{ width: "100%" }}
          className="percentage-left transition-width duration-[2s] ease-in-out"
        ></span>
      </div>
      <span
        onMouseEnter={handleStep5Hover}
        className={`bg-mainWhite p-8 z-10 inner rounded-full ${
          isMobile ? "pointer-events-none" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="xs:w-[30px] lg:w-[42px] xs:h-[30px] lg:h-[42px]"
          viewBox="0 0 42 42"
          fill="none"
        >
          <path
            d="M36.5103 40.5312H5.55722C4.0442 40.5312 2.69654 39.6862 2.03899 38.3242C1.38144 36.9622 1.55722 35.3815 2.49732 34.1966L8.12883 27.1016L10.1679 28.7214L4.53639 35.8164C4.21868 36.2174 4.16139 36.7305 4.38404 37.1914C4.6054 37.6523 5.0442 37.9271 5.55592 37.9271H36.5103C37.0195 37.9271 37.457 37.6536 37.6796 37.1966C37.9036 36.7383 37.8502 36.2266 37.539 35.8255L32.0051 28.7096L34.0598 27.1094L39.5937 34.2253C40.5169 35.4128 40.6796 36.9883 40.0195 38.3398C39.358 39.6901 38.0142 40.5312 36.5103 40.5312Z"
            fill="#3C096C"
          />
          <path
            d="M32.544 40.5309H9.45546L7.32785 25.6429C7.11301 24.1481 7.55832 22.6351 8.5479 21.4932C9.53749 20.3512 10.9724 19.6963 12.4828 19.6963H29.5167C31.0271 19.6963 32.4607 20.3499 33.4502 21.4919C34.4411 22.6338 34.8877 24.1455 34.6729 25.6429L32.544 40.5309ZM11.7133 37.9268H30.2862L32.0948 25.2744C32.2015 24.527 31.9789 23.7705 31.4828 23.1989C30.988 22.6286 30.2719 22.3018 29.5167 22.3018H12.4828C11.7276 22.3018 11.0101 22.6286 10.5154 23.1989C10.0206 23.7692 9.7979 24.527 9.90468 25.2744L11.7133 37.9268Z"
            fill="#3C096C"
          />
          <path
            d="M6.02718 7.0778C6.7463 7.0778 7.32926 6.49484 7.32926 5.77572C7.32926 5.0566 6.7463 4.47363 6.02718 4.47363C5.30806 4.47363 4.7251 5.0566 4.7251 5.77572C4.7251 6.49484 5.30806 7.0778 6.02718 7.0778Z"
            fill="#3C096C"
          />
          <path
            d="M6.02718 13.6715C6.7463 13.6715 7.32926 13.0886 7.32926 12.3695C7.32926 11.6503 6.7463 11.0674 6.02718 11.0674C5.30806 11.0674 4.7251 11.6503 4.7251 12.3695C4.7251 13.0886 5.30806 13.6715 6.02718 13.6715Z"
            fill="#3C096C"
          />
          <path
            d="M37.3424 5.10286C37.3424 4.38374 36.7595 3.80078 36.0404 3.80078C35.3212 3.80078 34.7383 4.38374 34.7383 5.10286V12.9167C34.7383 13.6358 35.3212 14.2188 36.0404 14.2188C36.7595 14.2188 37.3424 13.6358 37.3424 12.9167V5.10286Z"
            fill="#3C096C"
          />
          <path
            d="M21 34.0205C18.8464 34.0205 17.0938 32.2679 17.0938 30.1143C17.0938 27.9606 18.8464 26.208 21 26.208C23.1536 26.208 24.9062 27.9606 24.9062 30.1143C24.9062 32.2679 23.1536 34.0205 21 34.0205ZM21 28.8122C20.2826 28.8122 19.6979 29.3955 19.6979 30.1143C19.6979 30.833 20.2826 31.4163 21 31.4163C21.7174 31.4163 22.3021 30.833 22.3021 30.1143C22.3021 29.3955 21.7188 28.8122 21 28.8122Z"
            fill="#3C096C"
          />
          <path
            d="M21.0337 18.0571C16.7251 18.0571 13.2212 14.5532 13.2212 10.2446C13.2212 5.93604 16.7251 2.43213 21.0337 2.43213C25.3423 2.43213 28.8462 5.93604 28.8462 10.2446C28.8462 14.5532 25.3423 18.0571 21.0337 18.0571ZM21.0337 5.0363C18.1613 5.0363 15.8254 7.37223 15.8254 10.2446C15.8254 13.117 18.1613 15.453 21.0337 15.453C23.9061 15.453 26.242 13.117 26.242 10.2446C26.242 7.37223 23.9048 5.0363 21.0337 5.0363Z"
            fill="#3C096C"
          />
        </svg>
      </span>
      <div
        className={`${
          isMobile
            ? "visible opacity-100"
            : showStep5
            ? "opacity-100"
            : "opacity-0 invisible"
        } bg-gray-200 p-4 lg:ml-24 xs:-ml-4 speech left transition-opacity duration-500 ease-in-out`}
      >
        Comprehensive testing of the finished project and preparing it for
        market entry.
      </div>
    </div>
  );
};

export default Step5;
