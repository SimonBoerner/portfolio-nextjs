import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
  const [showLangOptions, setShowLangOptions] = useState(false);
  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-palette1/30 to-black/30 relative snap-center flex flex-col justify-center items-center"
      onClick={() => setShowLangOptions((showLangOptions) => !showLangOptions)}
    >
      <div className="flex justify-center items-center">
        <h1 className="absolute top-20 left-6 text-2xl text-black">
          [Contact]
        </h1>

        <div className="flex gap-9">
          <a
            href="https://github.com/SimonBoerner"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub
              size={80}
              className="hover:text-white transition-all duration-700"
            />
          </a>
          <a
            href="https://linkedin.com/in/simon-boerner"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size={80}
              className="hover:text-white transition-all duration-700"
            />
          </a>
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%62%6F%65%72%6E%65%72%73%69%6D%6F%6E%40%67%6D%61%69%6C%2E%63%6F%6D">
            <AiFillMail
              size={80}
              className="hover:text-white transition-all duration-700"
            />
          </a>
        </div>
      </div>
      <div className="py-14">
        <Popover className="relative">
          <Popover.Button
            onClick={() =>
              setShowLangOptions((showLangOptions) => !showLangOptions)
            }
            className="bg-red text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 align-middle mb-3 w-52"
          >
            Download Resume
          </Popover.Button>
          <Transition
            show={showLangOptions}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-10">
              <div className="flex flex-col justify-evenly">
                <a
                  href="https://drive.google.com/file/d/1q2e7z8YrylyKkV3XqF6mTNo64fJugnag/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className=" bg-palette2 text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 text-center mb-3 w-52"
                >
                  German Version
                </a>
                <a
                  href="/engagement"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-palette1 text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 text-center w-52"
                >
                  English Version
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Contact;
