import Skillcard from "../Components/Skillcard";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
} from "react-icons/si";

const Skillpage = () => {
  return (
    <div
      id="skills"
      className="relative bg-palette3 min-h-screen pt-40 pb-8 snap-start flex justify-center"
    >
      <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide text-black">
        [Skills]
      </h1>
      <div className="flex flex-wrap gap-3 justify-center md:justify-between mx-auto md:w-3/4 w-5/6  ">
        <Skillcard icon={<SiHtml5 size={32} />} name={"HTML"} />
        <Skillcard icon={<SiCss3 size={32} />} name={"CSS"} />
        <Skillcard icon={<SiJavascript size={32} />} name={"JavaScript"} />
        <Skillcard icon={<SiTypescript size={32} />} name={"Typescript"} />
        <Skillcard icon={<SiNodedotjs size={32} />} name={"Node.js"} />
        <Skillcard icon={<SiTailwindcss size={32} />} name={"TailwindCSS"} />
        <Skillcard icon={<SiReact size={32} />} name={"React"} />
        <Skillcard icon={<SiNextdotjs size={32} />} name={"Next.js"} />
        <Skillcard icon={<SiPostgresql size={32} />} name={"PostgreSQL"} />
        <Skillcard icon={<SiPrisma size={32} />} name={"Prisma"} />
        <Skillcard icon={<SiDocker size={32} />} name={"Docker"} />
        <Skillcard icon={<SiGit size={32} />} name={"Git"} />
      </div>
    </div>
  );
};

export default Skillpage;
