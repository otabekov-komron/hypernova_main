import React, { useState, useEffect } from "react";
import "../style.css";

const Step3 = () => {
  const [showStep3, setShowStep3] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleStep3Hover = () => {
    if (!isMobile) {
      const progressBar = document.getElementById("progress_step3");
      if (progressBar) {
        progressBar.style.width = "0%";

        setTimeout(() => {
          setShowStep3(true);
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
        Step 3
      </p>
      <span className="circle lg:block xs:hidden"></span>
      <div className="progress-bar-left lg:block xs:hidden">
        <span
          id="progress_step3"
          style={{ width: "100%" }}
          className="percentage-left transition-width duration-[2s] ease-in-out"
        ></span>
      </div>
      <span
        onMouseEnter={handleStep3Hover}
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
          <g clipPath="url(#clip0_226_1124)">
            <path
              d="M36.5578 5.58499H36.0635C37.0058 4.05076 36.6579 1.99099 35.1454 0.868858C33.5158 -0.340103 31.2 0.0490493 30.0628 1.74856L27.4956 5.58507H5.44224C3.62953 5.58507 2.15479 7.05982 2.15479 8.87253V29.8905C2.15479 31.7032 3.62953 33.178 5.44224 33.178H18.2117L17.2469 37.2304H15.1645C13.8073 37.2304 12.7032 38.3344 12.7032 39.6916V40.2055H10.1361C9.68662 40.2055 9.32229 40.5699 9.32229 41.0193C9.32229 41.4687 9.68662 41.8331 10.1361 41.8331H31.8641C32.3135 41.8331 32.6779 41.4687 32.6779 41.0193C32.6779 40.5699 32.3135 40.2055 31.8641 40.2055H29.297V39.6916C29.297 38.3344 28.1929 37.2304 26.8357 37.2304H24.7533L23.7885 33.178H36.5579C38.3706 33.178 39.8454 31.7032 39.8454 29.8905V25.2658V8.87245C39.8454 7.05974 38.3706 5.58499 36.5578 5.58499ZM24.8978 19.8913C23.6254 20.782 21.2417 19.5713 18.9654 20.7859C18.41 17.9007 18.7602 15.1871 21.6512 14.5882C22.0248 14.5103 22.427 14.475 22.7695 14.4819C23.748 15.2079 24.7377 15.9421 25.7134 16.6662C26.1406 17.9086 25.9802 19.1336 24.8978 19.8913ZM25.7179 11.1685L28.0215 12.8776L26.2499 15.0374C25.5206 14.4964 24.8937 14.0312 24.1644 13.49C24.3158 13.2637 25.5795 11.3752 25.7179 11.1685ZM31.4155 2.65373C32.0319 1.73245 33.2889 1.5181 34.1756 2.17604C35.0627 2.83407 35.2215 4.09918 34.5187 4.95618C33.2715 6.47658 30.3066 10.0915 29.0547 11.6178L26.624 9.81424L31.4155 2.65373ZM27.6693 39.6916V40.2055H14.3307V39.6916C14.3307 39.232 14.7048 38.8579 15.1645 38.8579H26.8356C27.2953 38.8579 27.6693 39.232 27.6693 39.6916ZM23.0802 37.2304H18.9199L19.8847 33.178H22.1153L23.0802 37.2304ZM38.2178 29.8905C38.2178 30.8058 37.4732 31.5504 36.5579 31.5504C35.2661 31.5504 6.89476 31.5504 5.44232 31.5504C4.52705 31.5504 3.78244 30.8058 3.78244 29.8905V26.0795H6.10791C6.55737 26.0795 6.9217 25.7151 6.9217 25.2658C6.9217 24.8164 6.55737 24.452 6.10791 24.452H3.78228V8.87245C3.78228 7.95718 4.52689 7.21257 5.44216 7.21257H26.4065C25.6269 8.37766 23.3525 11.7767 22.632 12.8532C21.0372 12.8676 19.4451 13.4232 18.4028 14.64C16.9844 16.2956 16.7352 18.8972 17.6621 22.3722C17.8206 22.9664 18.562 23.1793 19.0107 22.7508C21.1149 20.7401 23.7356 22.9333 26.0825 21.0337C27.5151 19.8741 27.8541 18.0306 27.3139 16.3066C28.0441 15.4163 34.041 8.10496 34.7729 7.21257H36.5578C37.473 7.21257 38.2176 7.95718 38.2176 8.87245V24.4519H12.618C12.1686 24.4519 11.8043 24.8163 11.8043 25.2657C11.8043 25.7151 12.1686 26.0795 12.618 26.0795H38.2178V29.8905Z"
              fill="#3C096C"
            />
            <path
              d="M9.20605 24.4676C8.81429 24.5477 8.55176 24.8863 8.55176 25.266C8.55176 25.775 9.01717 26.1649 9.52425 26.0635C9.97485 25.9721 10.2493 25.5378 10.1631 25.1065C10.0725 24.6614 9.64071 24.3801 9.20605 24.4676Z"
              fill="#3C096C"
            />
          </g>
          <defs>
            <clipPath id="clip0_226_1124">
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
          isMobile
            ? "visible opacity-100"
            : showStep3
            ? "opacity-100"
            : "opacity-0 invisible"
        } bg-gray-200 p-4 lg:ml-24 xs:-ml-4 speech left transition-opacity duration-500 ease-in-out`}
      >
        Studying the client, offering them suitable solutions, signing
        agreements
      </div>
    </div>
  );
};

export default Step3;
