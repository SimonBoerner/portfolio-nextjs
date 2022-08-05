import { AiOutlineGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-accentblue relative flex justify-center items-center"
    >
      <h1 className="absolute top-20 left-6 text-2xl text-white">[Contact]</h1>

      <div className="flex gap-9">
        <a href="https://github.com/SimonBoerner" target="_blank">
          <AiOutlineGithub
            size={80}
            className="hover:text-white transition-all duration-700"
          />
        </a>
        <a href="https://linkedin.com/in/simon-boerner" target="_blank">
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
  );
};

export default Contact;
