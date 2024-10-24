'use client';
import Image from "next/image";
import { useTransform, motion } from "framer-motion";
import Profile from './Profile'; 
import Experience from './Experience'; 
import Footer from "./Footer";
import { CardHoverEffectDemo } from './Skills';
import RecentProjects from "./RecentProjects";
import backgroundImg1 from '../../../public/images/pfpbg.png'
import backgroundImg2 from '../../../public/images/skillsbg.png'
import backgroundImg3 from '../../../public/images/xpbg.png'
import backgroundImg4 from '../../../public/images/projectsbg.png'
import backgroundImg5 from '../../../public/images/footerbg.png'

export const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.div
      id="Section1"
      style={{ scale }}
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <Profile />
      </div>
    </motion.div>
  );
};

export const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  return (
    <motion.div
      id="Section2"
      style={{ scale }}
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg2}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <CardHoverEffectDemo />
      </div>
    </motion.div>
  );
};

export const Section3 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.9, 1]);
  return (
    <motion.div
      id="Section3"
      style={{ scale }}
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg3}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <Experience />
      </div>
    </motion.div>
  );
};

export const Section4 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.9, 1]);
  return (
    <motion.div
      id="Section4"
      style={{ scale }}
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg4}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <RecentProjects />
      </div>
    </motion.div>
  );
};

export const Section5 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  return (
    <motion.div
      id="Section5"
      style={{ scale }}
      className="sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg5}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <Footer />
      </div>
    </motion.div>
  );
};
