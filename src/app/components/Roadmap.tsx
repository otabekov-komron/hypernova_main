"use client";
import React from "react";
import "./style.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";

const Roadmap = () => {

  return (
    <div className="flex flex-col px-[6%] mt-44">
      <b className="text-[40px] ">Work progress</b>
      <div className="flex flex-col items-center gap-10 py-24 ">
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>
        <Step5/>
        <Step6/>
      </div>
    </div>
   
  );
};

export default Roadmap;
