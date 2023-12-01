'use client'
import Image from "next/image";
import PrimaryBtn from "./components/buttons/PrimaryBtn";
import SecondaryBtn from "./components/buttons/SecondaryBtn";
import { main, text } from "@/assets/images";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";
import Roadmap from "./components/Roadmap";
import Vacancies from "./components/Vacancies";
import ParallaxComponent from "./components/ParallaxComponent";
import {cubicBezier, motion} from 'framer-motion'
export default function Home() {
  return (
    <div className="home">
      <div className="lg:pt-24 xs:pt-4 flex flex-col items-center">
        <div className="grid lg:grid-cols-main xs:grid-cols-1 2xl:flex 2xl:flex-row 2xl:w-full 2xl:justify-between ">
          <motion.div
          initial={{ x: -45, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: cubicBezier(4, 4, 5, 4)  }}
          className="lg:ps-[15%] xs:ps-[5%] 2xl:ps-[5%]   flex flex-col gap-6">
            <p className="lg:text-[25px] xs:w-[75%] lg:w-full xs:text-[16px] spacing-[48px] text-[#EBD9FC] font-medium ">
              Discover Innovation{" "}
              <span className="text-[#FBFAFF] font-bold">HYPERNOVA</span> Where
              Ideas Come to Life!
            </p>
            <div className="flex gap-4">
              <PrimaryBtn>
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
                <p className="capitalize xs:text-[12px] lg:text-base text-[#FBFAFF] font-normal ">
                  {" "}
                  our Portfolio
                </p>
              </PrimaryBtn>
              <SecondaryBtn>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  className="xs:w-[15px] lg:w-min xs:h-[15px] lg:h-min"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M20.3585 26.5416C19.0402 26.5416 17.6518 26.2266 16.2168 25.62C14.8168 25.025 13.4052 24.2083 12.0285 23.2166C10.6635 22.2133 9.34516 21.0933 8.09683 19.8683C6.86016 18.62 5.74016 17.3016 4.7485 15.9483C3.74516 14.5483 2.94016 13.1483 2.3685 11.795C1.76183 10.3483 1.4585 8.94831 1.4585 7.62998C1.4585 6.71998 1.62183 5.85665 1.93683 5.05165C2.2635 4.22331 2.7885 3.45331 3.50016 2.78831C4.3985 1.90165 5.42516 1.45831 6.52183 1.45831C6.97683 1.45831 7.4435 1.56331 7.84016 1.74998C8.29516 1.95998 8.68016 2.27498 8.96016 2.69498L11.6668 6.50998C11.9118 6.84831 12.0985 7.17498 12.2268 7.50165C12.3785 7.85165 12.4602 8.20165 12.4602 8.53998C12.4602 8.98331 12.3318 9.41498 12.0868 9.82331C11.9118 10.1383 11.6435 10.4766 11.3052 10.815L10.5118 11.6433C10.5235 11.6783 10.5352 11.7016 10.5468 11.725C10.6868 11.97 10.9668 12.39 11.5035 13.02C12.0752 13.6733 12.6118 14.2683 13.1485 14.8166C13.8368 15.4933 14.4085 16.03 14.9452 16.4733C15.6102 17.0333 16.0418 17.3133 16.2985 17.4416L16.2752 17.5L17.1268 16.66C17.4885 16.2983 17.8385 16.03 18.1768 15.855C18.8185 15.4583 19.6352 15.3883 20.4518 15.7266C20.7552 15.855 21.0818 16.03 21.4318 16.275L25.3052 19.0283C25.7368 19.32 26.0518 19.6933 26.2385 20.1366C26.4135 20.58 26.4952 20.9883 26.4952 21.3966C26.4952 21.9566 26.3668 22.5166 26.1218 23.0416C25.8768 23.5666 25.5735 24.0216 25.1885 24.4416C24.5235 25.1766 23.8002 25.7016 22.9602 26.04C22.1552 26.3666 21.2802 26.5416 20.3585 26.5416ZM6.52183 3.20831C5.88016 3.20831 5.28516 3.48831 4.7135 4.04831C4.17683 4.54998 3.8035 5.09831 3.57016 5.69331C3.32516 6.29998 3.2085 6.94165 3.2085 7.62998C3.2085 8.71498 3.46516 9.89331 3.9785 11.1066C4.5035 12.3433 5.2385 13.6266 6.17183 14.91C7.10516 16.1933 8.16683 17.4416 9.3335 18.62C10.5002 19.775 11.7602 20.8483 13.0552 21.7933C14.3152 22.715 15.6102 23.4616 16.8935 23.9983C18.8885 24.85 20.7552 25.0483 22.2952 24.4066C22.8902 24.1616 23.4152 23.7883 23.8935 23.2516C24.1618 22.96 24.3718 22.645 24.5468 22.2716C24.6868 21.98 24.7568 21.6766 24.7568 21.3733C24.7568 21.1866 24.7218 21 24.6285 20.79C24.5935 20.72 24.5235 20.5916 24.3018 20.44L20.4285 17.6866C20.1952 17.5233 19.9852 17.4066 19.7868 17.325C19.5302 17.22 19.4252 17.115 19.0285 17.36C18.7952 17.4766 18.5852 17.6516 18.3518 17.885L17.4652 18.76C17.0102 19.2033 16.3102 19.3083 15.7735 19.11L15.4585 18.97C14.9802 18.7133 14.4202 18.3166 13.8018 17.7916C13.2418 17.3133 12.6352 16.7533 11.9002 16.03C11.3285 15.4466 10.7568 14.8283 10.1618 14.14C9.6135 13.4983 9.21683 12.95 8.97183 12.495L8.83183 12.145C8.76183 11.8766 8.7385 11.725 8.7385 11.5616C8.7385 11.1416 8.89016 10.7683 9.18183 10.4766L10.0568 9.56665C10.2902 9.33331 10.4652 9.11165 10.5818 8.91331C10.6752 8.76165 10.7102 8.63331 10.7102 8.51665C10.7102 8.42331 10.6752 8.28331 10.6168 8.14331C10.5352 7.95665 10.4068 7.74665 10.2435 7.52498L7.53683 3.69831C7.42016 3.53498 7.28016 3.41831 7.10516 3.33665C6.9185 3.25498 6.72016 3.20831 6.52183 3.20831ZM16.2752 17.5116L16.0885 18.305L16.4035 17.4883C16.3452 17.4766 16.2985 17.4883 16.2752 17.5116Z"
                    fill="#10002B"
                  />
                  <path
                    d="M21.5833 11.375C21.105 11.375 20.7083 10.9784 20.7083 10.5C20.7083 10.08 20.2883 9.20502 19.5883 8.45835C18.9 7.72335 18.1417 7.29169 17.5 7.29169C17.0217 7.29169 16.625 6.89502 16.625 6.41669C16.625 5.93835 17.0217 5.54169 17.5 5.54169C18.6317 5.54169 19.8217 6.14835 20.86 7.25669C21.8283 8.29502 22.4583 9.56669 22.4583 10.5C22.4583 10.9784 22.0617 11.375 21.5833 11.375Z"
                    fill="#10002B"
                  />
                  <path
                    d="M25.6667 11.375C25.1883 11.375 24.7917 10.9783 24.7917 10.5C24.7917 6.47498 21.525 3.20831 17.5 3.20831C17.0217 3.20831 16.625 2.81165 16.625 2.33331C16.625 1.85498 17.0217 1.45831 17.5 1.45831C22.4817 1.45831 26.5417 5.51831 26.5417 10.5C26.5417 10.9783 26.145 11.375 25.6667 11.375Z"
                    fill="#10002B"
                  />
                </svg>
                <p className="capitalize text-secondary1 xs:text-[12px] lg:text-base  font-medium  ">
                  {" "}
                  Contact us
                </p>
              </SecondaryBtn>
            </div>
          </motion.div>
          {/* <div className="flex flex-col items-center">
            <Image
              className="lg:w-fit xs:w-[70%] xs:pt-10"
              src={text}
              priority={true}
              alt="hypernova text"
            />
            <div>
              <Image
                className="relative xs:bottom-10 lg:bottom-14 w-full"
                src={main}
                priority={true}
                alt="main image"
              />
            </div>
          </div> */}
          <ParallaxComponent/>
        </div>
        <svg
          className="xs:hidden lg:block scroll opacity-40 relative bottom-[18vw] "
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <g filter="url(#filter0_b_347_27)">
            <path
              d="M4.16682 40C4.16682 20.2333 20.2335 4.16663 40.0002 4.16663C59.7668 4.16663 75.8335 20.2333 75.8335 40C75.8335 59.7666 59.7668 75.8333 40.0002 75.8333C20.2335 75.8333 4.16682 59.7666 4.16682 40ZM70.8335 40C70.8335 23 57.0002 9.16663 40.0002 9.16663C23.0002 9.16663 9.16682 23 9.16682 40C9.16682 57 23.0002 70.8333 40.0002 70.8333C57.0002 70.8333 70.8335 57 70.8335 40Z"
              fill="#FBFAFF"
              floodOpacity="0.5"
            />
            <path
              d="M25.7333 35.8C25.7333 35.1667 25.9666 34.5333 26.4666 34.0333C27.4333 33.0667 29.0333 33.0667 30 34.0333L40 44.0333L50 34.0333C50.9666 33.0667 52.5666 33.0667 53.5333 34.0333C54.5 35 54.5 36.6 53.5333 37.5667L41.7666 49.3334C40.8 50.3 39.2 50.3 38.2333 49.3334L26.4666 37.5667C25.9666 37.0667 25.7333 36.4333 25.7333 35.8Z"
              fill="#FBFAFF"
              floodOpacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_347_27"
              x="-395.833"
              y="-395.833"
              width="871.667"
              height="871.667"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="200" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_347_27"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_347_27"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="pb-24">
        <div className="xs:hidden lg:flex opacity-20 -z-10 absolute top-[60vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="379"
            height="677"
            viewBox="0 0 379 677"
            fill="none"
          >
            <path
              d="M-255.683 232.386C-116.919 67.1917 62.5909 2.36366 182.852 63.1776C208.027 75.9158 245.753 101.807 278.978 158.245C245.277 112.806 209.905 92.2398 186.027 82.1911C74.8831 35.3865 -75.3495 94.7286 -187.895 232.386H-255.683Z"
              fill="url(#paint0_linear_239_1299)"
            />
            <path
              d="M-281 404.351C-280.923 421.906 -278.866 516.238 -207.632 580.839C-166.873 617.796 -123.065 627.256 -104.871 630.935C-12.1011 649.708 62.3466 604.014 82.9966 590.312C-5.32492 632.367 -104.46 617.555 -164.777 555.055C-219.397 498.469 -222.072 423.659 -222.213 404.351H-281Z"
              fill="url(#paint1_linear_239_1299)"
            />
            <path
              d="M360.253 404.351C333.045 455.919 271.417 553.824 155.271 615.521C107.568 640.864 -38.9615 718.697 -162.9 646.323C-214.974 615.922 -244.509 569.827 -259.952 539.935C-243.069 566.107 -213.444 603.198 -166.243 626.319C-47.5507 684.47 82.6878 605.513 126.572 578.912C213.839 526.006 264.731 452.909 291.938 404.351H360.266H360.253Z"
              fill="url(#paint2_linear_239_1299)"
            />
            <path
              d="M379 233.055C375.695 212.824 353.387 87.9316 248.774 29.4592C186.285 -5.46363 124.618 0.182794 95.3658 3.26029C-42.0731 17.7245 -149.193 120.018 -147.907 122.159C-147.213 123.323 -69.2035 44.6726 52.2916 30.6633C98.4903 25.3379 178.506 17.7647 242.963 74.7519C305.748 130.254 313.206 211.647 314.53 232.386C336.016 232.614 357.514 232.828 379 233.055Z"
              fill="url(#paint3_linear_239_1299)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_239_1299"
                x1="-281"
                y1="338.645"
                x2="379"
                y2="338.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D4B9D" />
                <stop offset="1" stopColor="#4C1769" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_239_1299"
                x1="379.023"
                y1="324.644"
                x2="-281"
                y2="324.644"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D4B9D" />
                <stop offset="1" stopColor="#4C1769" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_239_1299"
                x1="342.745"
                y1="336.697"
                x2="-319.911"
                y2="336.697"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#854496" />
                <stop offset="1" stopColor="#612C8B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_239_1299"
                x1="-184.038"
                y1="113.813"
                x2="345.017"
                y2="113.813"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D4B9D" />
                <stop offset="1" stopColor="#4C1769" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="services">
          <Services />
        </div>
        <div className="xs:hidden lg:flex justify-end relative bottom-[40vw]  opacity-20 -z-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="409"
            height="697"
            viewBox="0 0 409 697"
            fill="none"
          >
            <path
              d="M6.81195 277.607C126.962 97.3074 298.384 12.0054 424.423 58.4497C450.809 68.1796 491.079 89.5204 530.158 141.741C491.788 100.505 454.428 84.183 429.621 76.9746C314.146 43.3914 171.229 119.836 74.1744 269.723L6.81195 277.607Z"
              fill="url(#paint0_linear_448_1218)"
            />
            <path
              d="M0.124512 451.44C2.08681 468.876 14.2636 562.377 91.9893 618.287C136.463 650.271 181.012 654.577 199.487 656.117C293.693 663.981 362.766 609.914 381.815 593.896C298.564 645.96 198.459 642.772 131.807 587.68C71.4504 537.802 60.7572 463.772 58.5428 444.602L0.124512 451.44Z"
              fill="url(#paint1_linear_448_1218)"
            />
            <path
              d="M637.359 376.85C615.861 431.26 565.135 535.719 456.344 610.54C411.662 641.272 274.411 735.662 143.476 678.158C88.4617 654.005 54.1608 611.634 35.6044 583.726C55.1923 607.77 88.6154 641.182 138.005 658.668C262.199 702.649 383.14 609.037 423.892 577.499C504.93 514.773 547.651 436.215 569.473 384.797L637.372 376.849L637.359 376.85Z"
              fill="url(#paint2_linear_448_1218)"
            />
            <path
              d="M637.589 204.447C632.132 184.727 596.548 63.2122 486.311 17.2746C420.462 -10.1607 359.788 2.62329 331.05 9.08403C196.026 39.4443 100.565 153.556 102.072 155.534C102.887 156.61 171.96 69.3793 291.189 41.3257C336.526 30.6599 415.226 13.8269 485.4 62.9594C553.754 110.81 569.908 190.826 573.451 211.281C594.827 209.008 616.214 206.72 637.589 204.447Z"
              fill="url(#paint3_linear_448_1218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_448_1218"
                x1="0.124512"
                y1="348.379"
                x2="637.589"
                y2="348.379"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D4B9D" />
                <stop offset="1" stopColor="#4C1769" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_448_1218"
                x1="637.612"
                y1="333.953"
                x2="0.124512"
                y2="333.953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D4B9D" />
                <stop offset="1" stopColor="#4C1769" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_448_1218"
                x1="602.572"
                y1="346.372"
                x2="-37.4584"
                y2="346.372"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#854496" />
                <stop offset="1" stopColor="#612C8B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_448_1218"
                x1="65.2714"
                y1="151.444"
                x2="591.515"
                y2="94.5625"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8D4B9D" />
                <stop offset="1" stopColor="#4C1769" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div id="portfolio" className="lg:-mt-[35vw] ">
          <PortfolioSection />
        </div>
        <div id="clients">
          <Clients />
        </div>
        <Roadmap />
        <ContactForm />
        <div id="vacancies">
          <Vacancies />
        </div>
      </div>
    </div>
  );
}
