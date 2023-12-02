// TextComponent.js
import { text } from "@/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";

const TextComponent = () => {
  return (
    <motion.div
    className="flex justify-center w-full items-center"
      initial={{ opacity: 0, y: 85, zIndex: -100 }}
      animate={{ opacity: 1,  y: 0, zIndex: -100 }}
      transition={{ duration: 1 }}
    >
      <Image
        className="lg:w-fit xs:w-[70%] xs:pt-10"
        src={text}
        priority={true}
        alt="hypernova text"
      />
    </motion.div>
  );
};

export default TextComponent;
