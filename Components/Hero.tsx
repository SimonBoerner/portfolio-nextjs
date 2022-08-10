import Image from "next/image";
import headshot from "../public/pics/headshot2.jpg";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-palette21 relative min-h-screen flex flex-col items-center justify-center xs:pt-20 snap-start"
    >
      <motion.div
        className="w-[200px] h-[200px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <Image
          src={headshot}
          layout="intrinsic"
          height={250}
          width={250}
          className="rounded-full select-none drop-shadow-md p-10"
          alt="a picture of my face"
        ></Image>
      </motion.div>

      <div className="py-10 text-center w-5/6">
        <h1 className="text-4xl pb-8 font-sans">
          Hi, I&apos;m <span className="text-accentblue">Simon</span>.
        </h1>
        <p className="text-xl">
          A Leipzig-based Junior Frontend Developer. <br />I am currently
          looking for a job. Feel free to contact me!
        </p>
      </div>

      <div>
        <HiOutlineChevronDoubleDown className="h-16 w-8 animate-bounce mx-auto left-0 right-0 bottom-5 drop-shadow-md" />
      </div>
    </div>
  );
};

export default Hero;
