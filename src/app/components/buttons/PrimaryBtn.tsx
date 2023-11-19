import React, { ReactNode, ButtonHTMLAttributes } from 'react';

// Define the props for your button component extending ButtonHTMLAttributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Allow any valid ReactNode inside the button
}

// Button component allowing img and p tags inside
const PrimaryBtn: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button className='text-mainWhite bg-secondary3 rounded-button py-[12px] px-[20px] flex items-center gap-[8px]' {...buttonProps}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
