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
      <div
        className={
          "w-2/4 fixed right-0 top-0 p-10 pt-20 h-screen bg-accentblue/70 backdrop-blur-md ease-in duration-1000 transition-all flex flex-col text-white text-2xl gap-8 z-30"
        }
      >
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
      </div>
    </div>
  );
};

export default Sidebar;
