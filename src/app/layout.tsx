import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import logo from "../assets/images/logo.svg";
import Arrow from "../assets/images/icones/arrow-up.svg";
import Image from "next/image";
import IframeMap from "./components/MapIframe";
import location from "../assets/images/icones/location.svg";
import callWhite from "../assets/images/icones/call-calling-white.svg";
import sms from "../assets/images/icones/sms-notification.svg";
import telegram from "../assets/images/icones/telegram.svg";
import instagram from "../assets/images/icones/instagram.svg";
import linkedin from "../assets/images/icones/linkedin.svg";
import facebook from "../assets/images/icones/facebook.svg";

export const metadata: Metadata = {
  title: "HyperNova",
  description: "HyperNova - IT company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-greycliff text-mainWhite">
        <nav className="flex justify-between px-[6%]  items-center">
          <Link href="/">
            <Image priority={true} alt="Logo" src={logo} />
          </Link>
          <div className="flex items-center justify-between w-[60%]">
            <Link className="uppercase text-[16px] font-normal " href="/about">
              About us
            </Link>
            <Link
              className="uppercase text-[16px] font-normal "
              href="/services"
            >
              Services
            </Link>
            <Link
              className="uppercase text-[16px] font-normal "
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="uppercase text-[16px] font-normal "
              href="/clients"
            >
              Clients
            </Link>
            <Link
              className="uppercase text-[16px] font-normal "
              href="/vacancies"
            >
              Vacancies
            </Link>
            <button className="flex items-center border-[0.5px] py-[4px] px-[12px] rounded-[12px] gap-[4px]">
              <span>EN</span>
              <span>
                <Image src={Arrow} alt="Arrow up" />
              </span>
            </button>
          </div>
          <p className="flex gap-1 text-[16px] font-medium  ">
            <span className="opacity-60">+998 95</span>
            <span>240 51 11</span>
          </p>
        </nav>
        {children}
        <footer className="flex-col flex px-[6%]">
          <div className="pb-10 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-11  ">
              <div className=" flex w-full justify-between">
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/about"
                >
                  About us
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/clients"
                >
                  Clients
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/vacancies"
                >
                  Vacancies
                </Link>
              </div>
              <div className="flex gap-24 w-full">
                <div className="uppercase flex flex-col gap-2">
                  <p className="text-[16px] ">Email</p>
                  <span className="flex gap-1">
                    <Image width={24} height={24} src={sms} alt="call icon" />
                    <p>info@hypernova.uz</p>
                  </span>
                </div>
                <div className="uppercase flex flex-col gap-2">
                  <p className="text-[16px] ">Phone</p>
                  <span className="flex gap-1">
                    <Image
                      width={24}
                      height={24}
                      src={callWhite}
                      alt="call icon"
                    />
                    <p>+ 998 95 240 51 11</p>
                  </span>
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <Image src={facebook} alt="facebook" />
                <Image src={instagram} alt="instagram" />
                <Image src={linkedin} alt="linkedin" />
                <Image src={telegram} alt="telegram" />
              </div>
            </div>
            <div className="w-full flex-col">
              <IframeMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.25969414265!2d69.22403621164092!3d41.28145220243965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be641775d35%3A0x7affdfebab347428!2sUIS%20group!5e0!3m2!1sru!2s!4v1700319393826!5m2!1sru!2s"
                width={"100%"}
                height={200}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex uppercase text-[15px] text-justify pt-6 gap-1">
                <Image alt="Location icon" src={location} />
                Toshkent shahar. Mirzo Ulug‘bek tumani Amir timur ko‘chasi 12/34
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-t-[0.3px] border-t-[#FBFAFF] border-opacity-20">
            <p className="text-[12px] uppercase tracking-wider">© 2023 Hypernova. All rights reserved</p>
            <Link href="/">
              <Image priority={true} alt="Logo" src={logo} />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
