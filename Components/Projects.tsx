import ProjectCard from "./ProjectCard";
import kitchen from "../public/pics/kitchen.jpg";
import watering from "../public/pics/watering.jpg";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative min-h-screen bg-palette4 bg-opacity-20 pt-40 snap-start"
    >
      <h1 className="absolute top-20 left-6 text-2xl">[Projects]</h1>
      <div className="flex justify-center items-center flex-col h-1/2">
        {/* Card */}
        <div className="rounded-xl border-white bg-white w-10/12 flex mb-5">
          <div className="flex flex-col">
            <div className="relative rounded-t-xl w-full h-full">
              <Image
                src={kitchen}
                layout="responsive"
                className="rounded-t-xl"
                objectFit="cover"
                alt="picture of a kitchen"
              ></Image>
            </div>
            <div className="p-5">
              <h1 className="text-xl pb-2">Swap App</h1>
              <p className="pb-5">
                The idea of the final project was to bring everything together
                we learned the past six months. We were using Next.js. Moreover
                we were using TailwindCSS in the Frontend and PostgreSQL and
                Prisma in the backend.
              </p>

              <a
                href="https://github.com/devhausleipzig/camp5-final-project"
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-2 px-4 border-palette2 border rounded-full">
                  Find it on Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-white bg-white w-10/12 flex mb-5">
          <div className="flex flex-col">
            <div className="relative rounded-t-xl w-full h-full">
              <Image
                src={watering}
                layout="responsive"
                className="rounded-t-xl"
                objectFit="cover"
                alt="image of a watering can"
              ></Image>
            </div>
            <div className="p-5">
              <h1 className="text-xl pb-2">Garden Share</h1>
              <p className="pb-5">
                We came up with the idea, that we want to build an app that
                supports people, who are sharing a garden. We learned a lot
                about how React works by making components reusable.
                Unfortunately we never finished the app, but we made it quite
                far.
              </p>

              <a
                href="https://github.com/devhausleipzig/garden-share"
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-2 px-4 border-palette2 border rounded-full">
                  Find it on Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
