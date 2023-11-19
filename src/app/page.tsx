import Image from "next/image";
import PrimaryBtn from "./components/buttons/PrimaryBtn";
import Export from "../assets/images/icones/export.svg";
import SecondaryBtn from "./components/buttons/SecondaryBtn";
import Call from "../assets/images/icones/call-calling.svg";
import MainImg from "../assets/images/main-img.svg";
import Scroll from "../assets/images/icones/scroll.svg";

export default function Home() {
  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="main">
        <div className="ps-[15%] flex flex-col gap-6">
          <p className="text-[25px] spacing-[48px] text-[#EBD9FC] font-medium ">
            Discover Innovation{" "}
            <span className="text-[#FBFAFF] font-bold">HYPERNOVA</span> Where Ideas Come
            to Life!
          </p>
          <div className="flex gap-4">
            <PrimaryBtn>
              <Image width={30} height={30} src={Export} alt="export icon" />
              <p className="capitalize text-[#FBFAFF] font-normal ">
                {" "}
                our Portfolio
              </p>
            </PrimaryBtn>
            <SecondaryBtn>
              <Image width={28} height={28} src={Call} alt="call icon" />
              <p className="capitalize text-secondary1  font-medium  ">
                {" "}
                our Portfolio
              </p>
            </SecondaryBtn>
          </div>
        </div>
        <div>
          <p className="text-center w-full font-stapel text-[100px] opacity-70 tracking-wider text-[#FFFFFF80] uppercase">
            Hypernova
          </p>
          <Image
            className="relative bottom-20"
            src={MainImg}
            alt="main image"
          />
        </div>
      </div>
      <Image className="relative bottom-[40vh] scroll  " src={Scroll} alt='scroll icon'/>
    </div>
  );
}
