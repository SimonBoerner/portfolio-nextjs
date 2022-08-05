import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="fixed w-screen flex justify-between items-center px-4 border-b-2 border-black border-solid border-opacity-20 shadow-lg bg-white z-40">
      {isOpen ? (
        <Sidebar closeModalHandler={sidebarHandler} open={isOpen} />
      ) : null}
      <div>
        <div className="text-accentblue uppercase text-lg font-bold -mb-2 mt-2">
          Simon Börner
        </div>
        <div className="text-lg">Frontend Developer</div>
      </div>

      <ul className="hidden md:visible md:flex md:gap-8 md:justify-end ">
        <Link href="#home">
          <a className="hover:font-bold">Home</a>
        </Link>

        <Link href="#aboutme">
          <a className="hover:font-bold">About Me</a>
        </Link>

        <Link href="#skills">
          <a className="hover:font-bold">Skills</a>
        </Link>

        <Link href="#projects">
          <a className="hover:font-bold">Projects</a>
        </Link>
        <Link href="#contact">
          <a className="hover:font-bold">Contact</a>
        </Link>
      </ul>

      <div className="md:hidden" onClick={sidebarHandler}>
        <AiOutlineMenu className="h-16 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
