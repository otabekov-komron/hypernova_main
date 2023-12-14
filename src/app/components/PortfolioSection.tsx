import React from "react";
import PrimaryBtn from "./buttons/PrimaryBtn";
import Image from "next/image";
import { arken, evomed, ofiyat } from "@/assets/images";

const PortfolioSection = () => {
  return (
    <div className="flex flex-col px-[6%] xs:mt-24 lg:mt-0">
      <p className="capitalize xs:text-[20px] lg:text-[40px] font-medium lg:pb-10 xs:pb-5">
        Portfolio
      </p>
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-10 lg:gap-10">
        <a target="_blank" href="https://arkengenerator.uz">
          <Image
            priority={true}
            className=" xs:rounded-lg  lg:rounded-button object-cover"
            src={arken}
            alt="Arken Client"
          />
        </a>
        <a target="_blank" href="https://ofiyatmed.com">
          <Image
            priority={true}
            className="xs:rounded-lg  lg:rounded-button"
            src={ofiyat}
            alt="Ofiyat Client"
          />
        </a>
        <a target="_blank" href="https://evomed.uz">
          <Image
            priority={true}
            className="xs:rounded-lg object-cover lg:rounded-button"
            src={evomed}
            alt="Ofiyat Client"
          />
        </a>
      </div>
      <div className="mt-10">
        <PrimaryBtn>
          <p className="capitalize xs:text-[12px] lg:text-base text-[#FBFAFF] font-normal">
            {" "}
            All projects
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            className="xs:w-[15px] lg:w-min xs:h-[15px] lg:h-min"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM21.5625 15.4125C21.5625 15.925 21.1375 16.35 20.625 16.35C20.1125 16.35 19.6875 15.925 19.6875 15.4125V11.6375L10.0375 21.2875C9.85 21.475 9.6125 21.5625 9.375 21.5625C9.1375 21.5625 8.9 21.475 8.7125 21.2875C8.35 20.925 8.35 20.325 8.7125 19.9625L18.3625 10.3125H14.5875C14.075 10.3125 13.65 9.8875 13.65 9.375C13.65 8.8625 14.075 8.4375 14.5875 8.4375H20.625C21.1375 8.4375 21.5625 8.8625 21.5625 9.375V15.4125Z"
              fill="#FBFAFF"
            />
          </svg>
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default PortfolioSection;
