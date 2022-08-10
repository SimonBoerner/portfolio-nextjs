import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="fixed w-screen flex justify-between items-center px-4 border-b-2 border-black border-solid border-opacity-20 shadow-lg bg-white/90 backdrop-blur-xl z-40">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentblue origin-left"
        style={{ scaleX }}
      />
      {isOpen ? (
        <Sidebar closeModalHandler={sidebarHandler} open={isOpen} />
      ) : null}

      <div className="md:pl-48 whitespace-nowrap">
        <div className="text-accentblue uppercase text-lg font-bold -mb-2 mt-2 ">
          Simon Börner
        </div>
        <div className="text-lg">Frontend Developer</div>
      </div>

      <ul className="hidden md:visible md:flex md:gap-8 md:justify-end md:pr-48 text-xl ">
        <Link href="#home">
          <a className="hover:font-bold">Home</a>
        </Link>

        <Link href="#aboutme">
          <a className="hover:font-bold whitespace-nowrap">About Me</a>
        </Link>

        <Link href="#skills">
          <a className="hover:font-bold">Skills</a>
        </Link>

        <Link href="#projects">
          <a className="hover:font-bold">Projects</a>
        </Link>
        <Link href="#contact">
          <a className="hover:font-bold whitespace-nowrap">Contact / CV</a>
        </Link>
      </ul>

      <div className="md:hidden" onClick={sidebarHandler}>
        <AiOutlineMenu className="h-16 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
