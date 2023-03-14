import Image from "next/image";
import avatar from "../public/pics/sticker8.webp";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <video
        muted
        autoPlay
        loop
        className="fixed min-h-screen w-screen top-0 left-0 object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-fluid-acid-trip-shapes-in-motion-30855-large.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video>
      <div
        id="home"
        className=" relative min-h-screen flex flex-col items-center justify-center xs:pt-20 snap-start select-none drop-shadow-md"
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
                delay: 0.1,
              },
            },
          }}
        >
          <Image
            src={avatar}
            layout="intrinsic"
            height={300}
            width={300}
            className="rounded-full select-none p-20 overflow-visible"
            alt="a picture of my face"
          ></Image>
        </motion.div>

        <div className="py-10 text-center w-5/6 text-white">
          <h1 className="text-4xl pb-8 font-sans drop-shadow-md">
            Hi, I&apos;m Simon.
          </h1>
          <p className="text-3xl drop-shadow-md">
            A Leipzig-based Junior Frontend Developer. <br />I am currently
            looking for a job!
          </p>
        </div>

        <div>
          <HiOutlineChevronDoubleDown className="h-16 w-8 animate-bounce mx-auto left-0 right-0 bottom-5 drop-shadow-md" />
        </div>
      </div>
    </>
  );
};

export default Hero;
