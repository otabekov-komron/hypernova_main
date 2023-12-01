"use client";
import { motion } from "framer-motion";
import MoonComponent from "./MoonComponent";
import TextComponent from "./TextComponent";

const ParallaxComponent = () => {
  //   const { scrollY } = useScroll();

  //   const moonY = useTransform(scrollY, [0, 500], [0, -500]); // Adjust the scroll range and motion range
  //   const textY = useTransform(scrollY, [0, 500], [0, -1000]); // Adjust the scroll range and motion range

  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <TextComponent />
      <MoonComponent />
    </div>
  );
};

export default ParallaxComponent;
