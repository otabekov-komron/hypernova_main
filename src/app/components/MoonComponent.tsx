// MoonComponent.js
import { main } from "@/assets/images";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";

const MoonComponent = () => {
  return (
    <motion.div
    className="flex justify-center w-full items-center"
      initial={{  y: -105, z: 100, }}
      animate={{  y: 0, z: 100,  }}
      transition={{ duration: 0.8, ease: cubicBezier(4, 4, 5, 4)  }}
    >
      <Image
        className="relative  z-10 xs:bottom-10 lg:bottom-14 w-full"
        src={main}
        priority={true}
        alt="main image"
      />
    </motion.div>
  );
};

export default MoonComponent;
