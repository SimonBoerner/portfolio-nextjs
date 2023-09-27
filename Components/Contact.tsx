import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
  const [showLangOptions, setShowLangOptions] = useState(false);
  return (
    <div
      id="contact"
      className="min-h-screen bg-palette5 relative flex flex-col justify-center items-center bg-opacity-10"
      onClick={() => setShowLangOptions(false)}
    >
      <div className="flex justify-center items-center">
        <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide">
          [Contact]
        </h1>

        <div className="flex gap-9">
          <a href="https://github.com/smnbnr" target="_blank" rel="noreferrer">
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
    </div>
  );
};

export default Contact;
