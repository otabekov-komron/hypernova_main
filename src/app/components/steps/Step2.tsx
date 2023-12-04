import React, { useEffect, useState } from "react";
import "../style.css";

const Step2 = () => {

  const [showStep2, setShowStep2] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleStep2Hover = () => {
    if (!isMobile) {
      const progressBar = document.getElementById("progress_step2");
      if (progressBar) {
        progressBar.style.width = "100%";

        setTimeout(() => {
          setShowStep2(true);
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
    <div className="flex xs:flex-row lg:flex-row-reverse items-center xs:text-[14px]">
      <p className="ps-4 xs:hidden lg:block lg:text-[32px] xs:text-[14px]">
        Step 2
      </p>
      <span className="circle lg:block xs:hidden"></span>
      <div className="progress-bar-right lg:block xs:hidden">
        <span
          id="progress_step2"
          style={{ width: "0%" }}
          className="percentage-right transition-width duration-[2s] ease-in-out"
        ></span>
      </div>
      <span
        onMouseEnter={handleStep2Hover}
        className={`bg-mainWhite p-8 z-10 inner rounded-full ${
          isMobile ? "pointer-events-none" : ""
        }`}
      >
       <svg xmlns="http://www.w3.org/2000/svg" className="xs:w-[30px] lg:w-[42px] xs:h-[30px] lg:h-[42px]"viewBox="0 0 42 42" fill="none">
  <path d="M33.1528 17.5276H8.84722C6.93229 17.5276 5.375 19.0849 5.375 20.9998V34.8887C5.375 36.8036 6.93229 38.3609 8.84722 38.3609H33.1528C35.0677 38.3609 36.625 36.8036 36.625 34.8887V20.9998C36.625 19.0849 35.0677 17.5276 33.1528 17.5276ZM8.84722 34.8887V20.9998H33.1528L33.1563 34.8887H8.84722ZM8.84722 10.5831H33.1528V14.0553H8.84722V10.5831ZM12.3194 3.63867H29.6806V7.11089H12.3194V3.63867Z" fill="#3C096C"/>
</svg>
      </span>
      <div
        className={`${
          isMobile ? 'visible opacity-100 left' : showStep2 ? 'opacity-100' : 'opacity-0 invisible'
        } bg-gray-200 p-4 lg:mr-24 xs:-ml-4 speech right transition-opacity duration-500 ease-in-out`}
      >
        Show the client the approximate view of the project, visually confirm it with a presentation and sign the contract between the two parties.
      </div>
    </div>
  );
};

export default Step2;
