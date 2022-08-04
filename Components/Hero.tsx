import Image from "next/image";
import headshot from "../public/pics/headshot2.jpg";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center ">
      <div className="w-[250px] h-[250px]">
        <Image
          src={headshot}
          layout="intrinsic"
          height={250}
          width={250}
          className=" rounded-full"
        ></Image>
      </div>

      <div className="py-4 text-center w-5/6">
        <h1 className="text-4xl py-8 font-sans">
          Hi, I'm <span className="text-accentblue">Simon</span>.
        </h1>
        <p className="text-xl">
          A Leipzig-based Junior Frontend Developer. <br />I am currently
          looking for a job. Feel free to contact me!
        </p>
      </div>
      <HiOutlineChevronDoubleDown className="absolute h-16 w-8 animate-bounce mx-auto left-0 right-0 bottom-5" />
    </div>
  );
};

export default Hero;
