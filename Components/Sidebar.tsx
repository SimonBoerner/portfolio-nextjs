import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

type CloseModalHandlerProps = {
  closeModalHandler: any;
  open: boolean;
};

const Sidebar = ({ closeModalHandler, open }: CloseModalHandlerProps) => {
  return (
    <div
      onClick={closeModalHandler}
      className="fixed left-0 top-0 right-0 w-full h-screen bg-black/70 z-40"
    >
      <motion.div
        initial="closed"
        animate="open"
        className="fixed right-0 top-0 p-10 pt-20 h-screen bg-accentblue/70 backdrop-blur-md flex flex-col text-white text-2xl gap-8 z-30"
        variants={{
          closed: {
            width: "0%",
            transition: {
              delay: 0,
            },
          },
          open: {
            width: "50%",
            transition: {
              delay: 0,
            },
          },
        }}
      >
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
          <a className="hover:font-bold">Contact</a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Sidebar;
