import React, { useEffect, useState } from "react";
import "../style.css";

const Step6 = () => {
  const [showStep6, setShowStep6] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleStep6Hover = () => {
    if (!isMobile) {
      const progressBar = document.getElementById("progress_step6");
      if (progressBar) {
        progressBar.style.width = "100%";

        setTimeout(() => {
          setShowStep6(true);
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
        Step 6
      </p>
      <span className="circle lg:block xs:hidden"></span>
      <div className="progress-bar-right lg:block xs:hidden">
        <span
          id="progress_step6"
          style={{ width: "0%" }}
          className="percentage-right transition-width duration-[2s] ease-in-out"
        ></span>
      </div>
      <span
        onMouseEnter={handleStep6Hover}
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1693 9.90819C16.6154 8.29316 13.5487 7.69465 10.575 8.23087C9.0723 8.50184 7.97917 9.80971 7.97917 11.3366V13.1872C7.97917 13.9064 7.3962 14.4893 6.67708 14.4893C5.95797 14.4893 5.375 13.9064 5.375 13.1872V11.3366C5.375 8.54974 7.3702 6.16259 10.1128 5.66803C13.7281 5.01613 17.4564 5.74376 20.5611 7.70719L22.8715 9.16823C25.1236 10.5924 27.8764 10.9882 30.4385 10.2562C33.5388 9.37038 36.625 11.6983 36.625 14.9227V25.8454C36.625 27.9427 35.3751 29.8383 33.4474 30.6645C28.8721 32.6253 23.5815 31.829 19.7861 28.6086L17.3393 26.5327C16.0604 25.4475 14.2732 25.1908 12.7406 25.8719L11.6004 26.3786C10.9433 26.6707 10.1738 26.3747 9.88176 25.7176C9.58969 25.0604 9.88565 24.291 10.5428 23.999L11.6829 23.4922C14.1294 22.4048 16.9827 22.8147 19.0241 24.5469L21.4708 26.6229C24.5133 29.2044 28.7542 29.8426 32.4215 28.2708C33.3918 27.8549 34.0208 26.901 34.0208 25.8454V14.9227C34.0208 13.4284 32.5906 12.3497 31.1539 12.7601C27.8783 13.6961 24.359 13.1901 21.4796 11.3692L19.1693 9.90819Z"
            fill="#3C096C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.67708 17.0933C7.3962 17.0933 7.97917 17.6762 7.97917 18.3953V35.3224C7.97917 36.0416 7.39621 36.6245 6.67708 36.6245C5.95797 36.6245 5.375 36.0416 5.375 35.3224V18.3953C5.375 17.6762 5.95797 17.0933 6.67708 17.0933Z"
            fill="#3C096C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8856 10.583C12.6047 10.583 13.1877 11.166 13.1877 11.8851V19.6976C13.1877 20.4167 12.6047 20.9997 11.8856 20.9997C11.1665 20.9997 10.5835 20.4167 10.5835 19.6976V11.8851C10.5835 11.166 11.1665 10.583 11.8856 10.583Z"
            fill="#3C096C"
          />
        </svg>
      </span>
      <div
        className={`${
          isMobile
            ? "visible opacity-100"
            : showStep6
            ? "opacity-100"
            : "opacity-0 invisible"
        } bg-gray-200 p-4 lg:mr-24 xs:-ml-4 speech lg:right transition-opacity duration-500 ease-in-out`}
      >
        Studying the client, offering them suitable solutions, signing
        agreements
      </div>
    </div>
  );
};

export default Step6;
