import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";

const Aboutme = () => {
  const [showLangOptions, setShowLangOptions] = useState(false);
  return (
    <div
      id="aboutme"
      className="relative flex flex-col items-center justify-center pt-40 min-h-screen bg-palette2 bg-opacity-30 text-xl snap-start"
    >
      <h1 className="absolute top-20 left-6 text-2xl">[About Me]</h1>
      <p className="w-5/6">
        I’ve always been enthusiastic by computers and being creative with them.
        Therefore I decided that I want to level up my skills by learning how to
        create websites and apps.
      </p>
      <br />

      <p className="w-5/6">
        In July 22 I finished the 23-Weeks “Code & Design Camp” at DevHaus
        Leipzig. It was the perfect kickstart. There I learned the fundamental
        technologies and concepts of modern webdesign and got a good idea how to
        use them.
      </p>
      <br />

      <p className="w-5/6">
        But for sure, this is just the beginning of my coding journey. <br /> If
        you want to know more about me, feel free to download my CV.
      </p>
      <div className="py-14">
        <Popover className="relative">
          <Popover.Button
            onClick={() =>
              setShowLangOptions((showLangOptions) => !showLangOptions)
            }
            className="bg-red text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 align-middle mb-3"
          >
            DOWNLOAD CV
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
              <div className="flex flex-col items-center">
                <a
                  href="https://drive.google.com/file/d/1q2e7z8YrylyKkV3XqF6mTNo64fJugnag/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-palette2 text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 text-center w-56 mb-3"
                >
                  German Version
                </a>
                <a
                  href="/engagement"
                  className="bg-palette1 text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 text-center w-56"
                >
                  English Version
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        {/* <a
          href="https://drive.google.com/file/d/1q2e7z8YrylyKkV3XqF6mTNo64fJugnag/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-red text-white pt-4 pb-3 px-8 rounded-full whitespace-nowrap hover:bg-opacity-90 align-middle">
            Download Resume
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default Aboutme;
