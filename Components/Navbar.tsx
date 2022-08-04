import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-screen flex justify-between items-center px-4 border-b-2 border-black border-solid border-opacity-20 shadow-lg bg-white z-50">
      <div>
        <div className="text-accentblue uppercase text-lg font-bold -mb-2 mt-2">
          Simon Börner
        </div>
        <div className="text-lg">Frontend Developer</div>
      </div>
      <div>
        <AiOutlineMenu className="h-16 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
