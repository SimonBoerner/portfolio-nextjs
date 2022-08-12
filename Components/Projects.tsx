import kitchen from "../public/pics/kueche.jpg";
import watering from "../public/pics/garden2.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative min-h-screen bg-palette6/60 pt-40 snap-start flex justify-center"
    >
      <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide">
        [Projects]
      </h1>
      <div className="flex justify-center md:items-stretch items-center flex-col md:flex-row md:w-3/4 md:gap-4 md:h-2/3">
        {/* Card */}
        <div className="rounded-xl bg-white w-10/12 flex mb-8">
          <div className="flex flex-col md:items-center">
            <div className="relative rounded-t-xl w-full h-full">
              <Image
                src={kitchen}
                layout="responsive"
                className="rounded-t-xl"
                objectFit="cover"
                alt="picture of a kitchen"
              ></Image>
            </div>
            <div className="p-5 flex flex-col justify-start items-start">
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
                <button className="pt-2 pb-1 px-4 border-palette2 border rounded-full hover:bg-palette2/10">
                  Find it on Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white w-10/12 flex mb-8">
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
            <div className="p-5 flex flex-col justify-start items-start">
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
                <button className="pt-2 pb-1 px-4 border-palette2 border rounded-full  hover:bg-palette2/10">
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
