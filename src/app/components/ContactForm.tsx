import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
  });

  const { message, name, email } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const telegramBotToken = '6835382333:AAGiZSftW-BWkSx13jWP8Ba1DP2bi4aBLKk';
      const chatId = '-1001869878240';

      const text = `New Contact Form Submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}`;

      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );

      setFormData({
        message: '',
        name: '',
        email: '',
      });

      alert('All data sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="lg:grid xs:flex xs:flex-col-reverse xs:gap-6 lg:gap-0  lg:grid-cols-2 px-[6%] xs:my-24 lg:my-24">
      <div className="bg-mainWhite text-secondary2 xs:pt-5 lg:pt-10 xs:rounded-button lg:rounded-s-button ">
        <b className="xs:text-[30px] lg:text-[64px] xs:p-5 lg:p-10">Contact us</b>
        <div className="flex flex-col xs:p-5 lg:p-10 xs:text-[14px] lg:text-[24px]">
          <div className="flex flex-col xs:gap-2 lg:gap-4 ">
            <b>Email</b>
            <span className="flex gap-2 items-center xs:pb-5 lg:pb-10">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-[24px] lg:w-[24px] xs:h-[14px] xs:w-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H14C14.41 2.75 14.75 3.09 14.75 3.5C14.75 3.91 14.41 4.25 14 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V10.5C21.25 10.09 21.59 9.75 22 9.75C22.41 9.75 22.75 10.09 22.75 10.5V15.5C22.75 19.15 20.65 21.25 17 21.25Z"
                    fill="#240046"
                  />
                  <path
                    d="M11.9998 12.8698C11.1598 12.8698 10.3098 12.6098 9.65978 12.0798L6.52978 9.57978C6.20978 9.31978 6.14978 8.84978 6.40978 8.52978C6.66978 8.20978 7.13977 8.14978 7.45977 8.40978L10.5898 10.9098C11.3498 11.5198 12.6398 11.5198 13.3998 10.9098L14.5798 9.96978C14.8998 9.70978 15.3798 9.75977 15.6298 10.0898C15.8898 10.4098 15.8398 10.8898 15.5098 11.1398L14.3298 12.0798C13.6898 12.6098 12.8398 12.8698 11.9998 12.8698Z"
                    fill="#240046"
                  />
                  <path
                    d="M19.5 8.75C17.71 8.75 16.25 7.29 16.25 5.5C16.25 3.71 17.71 2.25 19.5 2.25C21.29 2.25 22.75 3.71 22.75 5.5C22.75 7.29 21.29 8.75 19.5 8.75ZM19.5 3.75C18.54 3.75 17.75 4.54 17.75 5.5C17.75 6.46 18.54 7.25 19.5 7.25C20.46 7.25 21.25 6.46 21.25 5.5C21.25 4.54 20.46 3.75 19.5 3.75Z"
                    fill="#240046"
                  />
                </svg>
              </span>
              <span>HyperNova@gmail.com</span>
            </span>
          </div>
          <div className="flex flex-col xs:gap-2 lg:gap-4">
            <b>Phone</b>
            <span className="flex gap-2  items-center xs:pb-5 lg:pb-10">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-[24px] lg:w-[24px] xs:h-[14px] xs:w-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                    fill="#240046"
                  />
                  <path
                    d="M18.5 9.75C18.09 9.75 17.75 9.41 17.75 9C17.75 8.64 17.39 7.89 16.79 7.25C16.2 6.62 15.55 6.25 15 6.25C14.59 6.25 14.25 5.91 14.25 5.5C14.25 5.09 14.59 4.75 15 4.75C15.97 4.75 16.99 5.27 17.88 6.22C18.71 7.11 19.25 8.2 19.25 9C19.25 9.41 18.91 9.75 18.5 9.75Z"
                    fill="#240046"
                  />
                  <path
                    d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9C21.25 5.55 18.45 2.75 15 2.75C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25C19.27 1.25 22.75 4.73 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z"
                    fill="#240046"
                  />
                </svg>
              </span>
              <span>+ 998 71 345 12 12</span>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <b>Address</b>
            <span className="flex gap-2  pb-2 items-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-[24px] lg:w-[24px] xs:h-[14px] xs:w-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z"
                    fill="#240046"
                  />
                  <path
                    d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z"
                    fill="#240046"
                  />
                </svg>
              </span>
              <span>
                Toshkent shahar. Mirzo Ulug‘bek tumani Amir timur ko‘chasi 12/34
              </span>
            </span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="503"
          className="xs:hidden lg:block opacity-10"
          height="236"
          viewBox="0 0 503 236"
          fill="none"
        >
          <path
            d="M-131.683 222.425C7.0806 63.6801 186.591 1.38327 306.852 59.8228C332.027 72.0636 369.753 96.9438 402.978 151.179C369.277 107.513 333.905 87.7503 310.027 78.0939C198.883 33.1167 48.6505 90.1419 -63.8954 222.425H-131.683Z"
            fill="url(#paint0_linear_239_1306)"
          />
          <path
            d="M-157 387.676C-156.923 404.545 -154.866 495.194 -83.6324 557.272C-42.8726 592.786 0.93454 601.877 19.1286 605.413C111.899 623.453 186.347 579.542 206.997 566.376C118.675 606.788 19.54 592.555 -40.7767 532.495C-95.3974 478.119 -98.0719 406.23 -98.2133 387.676H-157Z"
            fill="url(#paint1_linear_239_1306)"
          />
          <path
            d="M484.253 387.676C457.046 437.23 395.417 531.312 279.271 590.6C231.568 614.953 85.0385 689.748 -38.8996 620.199C-90.9744 590.986 -120.509 546.69 -135.952 517.966C-119.069 543.116 -89.4443 578.758 -42.2427 600.977C76.4493 656.857 206.688 580.983 250.572 555.421C337.839 504.581 388.731 434.337 415.939 387.676H484.266H484.253Z"
            fill="url(#paint2_linear_239_1306)"
          />
          <path
            d="M503 223.068C499.695 203.627 477.387 83.6103 372.774 27.4209C310.285 -6.13842 248.618 -0.712453 219.366 2.24488C81.9269 16.1444 -25.193 114.444 -23.9072 116.501C-23.2129 117.62 54.7965 42.0403 176.292 28.578C222.49 23.4605 302.506 16.183 366.963 70.9451C429.748 124.28 437.206 202.495 438.53 222.425C460.016 222.643 481.514 222.849 503 223.068Z"
            fill="url(#paint3_linear_239_1306)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_239_1306"
              x1="-157"
              y1="324.535"
              x2="503"
              y2="324.535"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8D4B9D" />
              <stop offset="1" stopColor="#4C1769" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_239_1306"
              x1="503.023"
              y1="311.08"
              x2="-157"
              y2="311.08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8D4B9D" />
              <stop offset="1" stopColor="#4C1769" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_239_1306"
              x1="466.745"
              y1="322.663"
              x2="-195.911"
              y2="322.663"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#854496" />
              <stop offset="1" stopColor="#612C8B" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_239_1306"
              x1="-60.0384"
              y1="108.481"
              x2="469.017"
              y2="108.481"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8D4B9D" />
              <stop offset="1" stopColor="#4C1769" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="bg-secondary2 lg:-ml-5 text-mainWhite rounded-button xs:py-10 lg:py-0 flex flex-col items-center">
        <b className=" xs:text-[40px] lg:text-[64px]  lg:p-10">Get in Touch</b>
        <form className="flex flex-col w-full xs:p-4 lg:p-7 gap-6" onSubmit={handleSubmit}>
      <input
        className="lg:p-4 xs:p-3 outline-none text-primary xs:rounded-xl lg:rounded-2xl"
        type="text"
        required
        placeholder="Your name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        className="lg:p-4 xs:p-3 outline-none text-primary xs:rounded-xl lg:rounded-2xl"
        type="email"
        required
        placeholder="Your email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <textarea
        className="lg:p-4 xs:p-3 outline-none text-primary rounded-2xl resize-none"
        rows={10}
        cols={50}
        name="message"
        id="message"
        placeholder="Your message"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button
        className="xs:rounded-xl lg:rounded-button bg-[#EBD9FC] text-secondary1 lg:text-[20px] xs:text-[14px] xs:px-5 xs:py-2 self-end lg:mt-4  w-fit lg:px-[20px] lg:py-[12px] font-medium"
        type="submit"
      >
        Send Message
      </button>
    </form>
      </div>
    </div>
  );
};

export default ContactForm;
