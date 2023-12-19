import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import IframeMap from "./components/MapIframe";
import { logo } from "@/assets/images";
import Head from "next/head";
import Navbar from "./components/Navbar";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/public/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/public/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/public/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/public/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/public/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/public/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/public/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/public/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/public/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="font-greycliff text-mainWhite">
        <Navbar />
        {children}
        <footer className="flex-col flex px-[6%]">
          <div className="pb-10 grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
            <div className="flex lg:flex-col gap-11  ">
              <div className=" flex lg:flex-row xs:flex-col w-full justify-between">
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/#about"
                >
                  About us
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/#services"
                >
                  Services
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/#portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/#clients"
                >
                  Clients
                </Link>
                <Link
                  className="uppercase text-[16px] font-normal "
                  href="/#vacancies"
                >
                  Vacancies
                </Link>
              </div>
              <div className="flex flex-col xs:gap-10 lg:gap-24 w-full">
                <div className="flex xs:flex-col lg:flex-row xs:gap-10 lg:gap-24">
                  <div className="uppercase flex flex-col gap-2">
                    <p className="text-[16px] ">Email</p>
                    <span className="flex gap-1 items-center lg:text-base xs:text-[12px]">
                      <svg
                        data-new-gr-c-s-check-loaded
                        data-gr-ext-installed
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H14C14.41 2.75 14.75 3.09 14.75 3.5C14.75 3.91 14.41 4.25 14 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V10.5C21.25 10.09 21.59 9.75 22 9.75C22.41 9.75 22.75 10.09 22.75 10.5V15.5C22.75 19.15 20.65 21.25 17 21.25Z"
                          fill="#FBFAFF"
                        />
                        <path
                          d="M11.9998 12.8698C11.1598 12.8698 10.3098 12.6098 9.65978 12.0798L6.52978 9.57978C6.20978 9.31978 6.14978 8.84978 6.40978 8.52978C6.66978 8.20978 7.13977 8.14978 7.45977 8.40978L10.5898 10.9098C11.3498 11.5198 12.6398 11.5198 13.3998 10.9098L14.5798 9.96978C14.8998 9.70978 15.3798 9.75977 15.6298 10.0898C15.8898 10.4098 15.8398 10.8898 15.5098 11.1398L14.3298 12.0798C13.6898 12.6098 12.8398 12.8698 11.9998 12.8698Z"
                          fill="#FBFAFF"
                        />
                        <path
                          d="M19.5 8.75C17.71 8.75 16.25 7.29 16.25 5.5C16.25 3.71 17.71 2.25 19.5 2.25C21.29 2.25 22.75 3.71 22.75 5.5C22.75 7.29 21.29 8.75 19.5 8.75ZM19.5 3.75C18.54 3.75 17.75 4.54 17.75 5.5C17.75 6.46 18.54 7.25 19.5 7.25C20.46 7.25 21.25 6.46 21.25 5.5C21.25 4.54 20.46 3.75 19.5 3.75Z"
                          fill="#FBFAFF"
                        />
                      </svg>
                      <a className="" href="mailto:hypernova.uz@gmail.com">
                        hypernova.uz@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="uppercase flex flex-col gap-2">
                    <p className="text-[16px] ">Phone</p>
                    <span className="flex gap-1">
                      <svg
                        data-new-gr-c-s-check-loaded
                        data-gr-ext-installed
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                          fill="#FBFAFF"
                        />
                        <path
                          d="M18.5 9.75C18.09 9.75 17.75 9.41 17.75 9C17.75 8.64 17.39 7.89 16.79 7.25C16.2 6.62 15.55 6.25 15 6.25C14.59 6.25 14.25 5.91 14.25 5.5C14.25 5.09 14.59 4.75 15 4.75C15.97 4.75 16.99 5.27 17.88 6.22C18.71 7.11 19.25 8.2 19.25 9C19.25 9.41 18.91 9.75 18.5 9.75Z"
                          fill="#FBFAFF"
                        />
                        <path
                          d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9C21.25 5.55 18.45 2.75 15 2.75C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25C19.27 1.25 22.75 4.73 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z"
                          fill="#FBFAFF"
                        />
                      </svg>
                      <a href="tel:+998952405111">+ 998 95 240 51 11</a>
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 w-full">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/hypernova.uz"
                  >
                    <svg
                      data-new-gr-c-s-check-loaded
                      data-gr-ext-installed
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_226_1005)">
                        <path
                          d="M26.4844 0H3.51562C1.57711 0 0 1.57711 0 3.51562V26.4844C0 28.4229 1.57711 30 3.51562 30H26.4844C28.4229 30 30 28.4229 30 26.4844V3.51562C30 1.57711 28.4229 0 26.4844 0ZM27.6562 26.4844C27.6562 27.1305 27.1305 27.6562 26.4844 27.6562H19.8047V18.1055H23.4252L24.0234 14.4727H19.8047V11.9531C19.8047 10.9585 20.5679 10.1953 21.5625 10.1953H23.9648V6.5625H21.5625C18.5787 6.5625 16.1732 8.97949 16.1732 11.9633V14.4727H12.6562V18.1055H16.1732V27.6562H3.51562C2.86945 27.6562 2.34375 27.1305 2.34375 26.4844V3.51562C2.34375 2.86945 2.86945 2.34375 3.51562 2.34375H26.4844C27.1305 2.34375 27.6562 2.86945 27.6562 3.51562V26.4844Z"
                          fill="#EBD9FC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_226_1005">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/hypernova-uz/about/?viewAsMember=true"
                  >
                    <svg
                      data-new-gr-c-s-check-loaded
                      data-gr-ext-installed
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_287_1311)">
                        <path
                          d="M9.37546 24.7852H5.2739V11.543H9.37546V24.7852ZM9.7847 7.32399C9.7847 5.99808 8.70895 4.92188 7.38373 4.92188C6.05347 4.92188 4.98047 5.99808 4.98047 7.32399C4.98047 8.65036 6.05347 9.72656 7.38373 9.72656C8.70895 9.72656 9.7847 8.65036 9.7847 7.32399ZM24.7266 17.4998C24.7266 13.9451 23.9756 11.3086 19.823 11.3086C17.8276 11.3086 16.4882 12.3065 15.9414 13.3443H15.9375V11.543H11.9531V24.7852H15.9375V18.2103C15.9375 16.4884 16.3758 14.8203 18.5101 14.8203C20.6154 14.8203 20.6836 16.7894 20.6836 18.3197V24.7852H24.7266V17.4998ZM30 26.4844V3.51562C30 1.577 28.423 0 26.4844 0H3.51562C1.577 0 0 1.577 0 3.51562V26.4844C0 28.423 1.577 30 3.51562 30H26.4844C28.423 30 30 28.423 30 26.4844ZM26.4844 2.34375C27.1305 2.34375 27.6562 2.86949 27.6562 3.51562V26.4844C27.6562 27.1305 27.1305 27.6562 26.4844 27.6562H3.51562C2.86949 27.6562 2.34375 27.1305 2.34375 26.4844V3.51562C2.34375 2.86949 2.86949 2.34375 3.51562 2.34375H26.4844Z"
                          fill="#EBD9FC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_287_1311">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/hypernova.uz/"
                  >
                    <svg
                      data-new-gr-c-s-check-loaded
                      data-gr-ext-installed
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_226_1015)">
                        <path
                          d="M21.776 0H8.22404C3.6893 0 0 3.6893 0 8.2241V21.776C0 26.3108 3.6893 30 8.22404 30H21.776C26.3108 30 30 26.3108 30 21.776V8.2241C30 3.6893 26.3108 0 21.776 0ZM28.2284 21.776C28.2284 25.3338 25.3339 28.2284 21.776 28.2284H8.22404C4.66617 28.2284 1.77164 25.3339 1.77164 21.776V8.2241C1.77164 4.66617 4.66617 1.77164 8.22404 1.77164H21.776C25.3339 1.77164 28.2284 4.66617 28.2284 8.2241V21.776Z"
                          fill="#EBD9FC"
                        />
                        <path
                          d="M14.9999 6.77148C10.4627 6.77148 6.77148 10.4627 6.77148 14.9999C6.77148 19.537 10.4627 23.2282 14.9999 23.2282C19.537 23.2282 23.2283 19.537 23.2283 14.9998C23.2283 10.4627 19.537 6.77148 14.9999 6.77148ZM14.9999 21.4567C11.4396 21.4567 8.54307 18.5601 8.54307 14.9998C8.54307 11.4395 11.4396 8.54301 14.9999 8.54301C18.5602 8.54301 21.4567 11.4396 21.4567 14.9999C21.4567 18.5601 18.5602 21.4567 14.9999 21.4567Z"
                          fill="#EBD9FC"
                        />
                        <path
                          d="M23.7207 3.7793C22.3422 3.7793 21.2207 4.90084 21.2207 6.27932C21.2207 7.65779 22.3422 8.77928 23.7207 8.77928C25.0991 8.77928 26.2206 7.65773 26.2206 6.27926C26.2206 4.90078 25.0991 3.7793 23.7207 3.7793ZM23.7207 7.00758C23.3191 7.00758 22.9923 6.68086 22.9923 6.27926C22.9923 5.87766 23.3191 5.55094 23.7207 5.55094C24.1223 5.55094 24.449 5.87771 24.449 6.27926C24.449 6.6808 24.1223 7.00758 23.7207 7.00758Z"
                          fill="#EBD9FC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_226_1015">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a target="_blank" href="https://t.me/HyperNova_Inc">
                    <svg
                      data-new-gr-c-s-check-loaded
                      data-gr-ext-installed
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_226_1025)">
                        <path
                          d="M18.447 8.8604L7.70508 12.441C6.82129 12.7355 6.25 13.5287 6.25 14.4607C6.25 15.3924 6.82129 16.1849 7.70569 16.48L12.067 17.9336L13.5205 22.2955C13.815 23.1786 14.6075 23.7499 15.5392 23.7499C16.4713 23.7499 17.2638 23.1786 17.5589 22.2942L21.1395 11.5524C21.3956 10.783 21.1987 9.94865 20.625 9.37492C20.0513 8.80119 19.2157 8.60313 18.447 8.8604ZM15.5392 20.4467L14.0424 15.9566L9.55261 14.4601L18.5318 11.4669L15.5392 20.4467Z"
                          fill="#EBD9FC"
                        />
                        <path
                          d="M15 0C6.72882 0 0 6.72882 0 15C0 23.2712 6.72882 30 15 30C23.2712 30 30 23.2712 30 15C30 6.72882 23.2712 0 15 0ZM15 27.5C8.1076 27.5 2.5 21.8924 2.5 15C2.5 8.1076 8.1076 2.5 15 2.5C21.8924 2.5 27.5 8.1076 27.5 15C27.5 21.8924 21.8924 27.5 15 27.5Z"
                          fill="#EBD9FC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_226_1025">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex-col">
              <IframeMap
                rel="preconnect"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.283529031945!2d69.22487431164099!3d41.280933402471895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x898bb80d9ac314cd%3A0x2b71c7e01c0fb4ee!2sHyperNova!5e0!3m2!1sru!2s!4v1702370439215!5m2!1sru!2s"
                width={"100%"}
                height={200}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex uppercase text-[15px] text-justify pt-6 gap-1">
                <svg
                  data-new-gr-c-s-check-loaded
                  data-gr-ext-installed
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z"
                    fill="#FBFAFF"
                  />
                  <path
                    d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z"
                    fill="#FBFAFF"
                  />
                </svg>
                Toshkent shahar. Chilonzor tumani Gagarin ko‘chasi 25
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-t-[0.3px] border-t-[#FBFAFF] border-opacity-20">
            <p className="text-[12px] uppercase tracking-wider">
              © 2023 Hypernova. All rights reserved
            </p>
            <Link href="/">
              <Image width={100} priority={true} alt="Logo" src={logo} />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
