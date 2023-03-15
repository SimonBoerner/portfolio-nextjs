import kitchen from "../public/pics/kueche.jpg";
import umsonst from "../public/pics/umsonstscreenshot.png";

import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative min-h-screen bg-gradient-to-l from-palette4 to-palette3 opacity-90 pt-40 snap-start flex justify-center"
    >
      <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide">
        [Projects]
      </h1>
      <div className="flex justify-center md:items-stretch items-center flex-col md:flex-row md:w-3/4 md:gap-4 md:h-2/3">
        {/* Card */}
        <div className="rounded-xl bg-white w-10/12 flex mb-8">
          <div className="flex flex-col md:justify-between">
            <div className="relative rounded-t-xl h-64">
              <Image
                src={kitchen}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
                alt="picture of a kitchen"
              ></Image>
            </div>
            <div className="p-5 flex flex-col justify-start items-start">
              <h1 className="text-xl pb-2">Swap App</h1>
              <p className="pb-5">
                The idea of the final project of the Camp 5 was to bring
                everything together we learned the past six months. We were
                using Next.js. Moreover we were using TailwindCSS in the
                Frontend and PostgreSQL and Prisma in the backend.
              </p>
              <Link href="https://github.com/devhausleipzig/camp5-final-project">
                <a target="_blank" rel="noreferrer">
                  <button className="pt-2 pb-1 px-4 border-palette6 border rounded-full  hover:bg-palette6 hover:text-white">
                    Show Github Repo
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white w-10/12 flex mb-8">
          <div className="flex flex-col md:justify-between">
            <div className="relative rounded-t-xl h-64">
              <Image
                src={umsonst}
                // width={1446}
                // height={828}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
                alt="screenshot of the app"
              ></Image>
            </div>
            <div className="p-5 flex flex-col justify-start items-start">
              <h1 className="text-xl pb-2">Tipps Umsonst</h1>
              <p className="pb-5">
                After I finished the Bootcamp I wanted to transform a book
                called "Taschentherapeut" into code. With that app, you can
                randomly generate advices (you probably never were asking for).
                It was a nice experience to figure out how to work with slides.
              </p>

              <div className="flex flex-wrap sm:gap-3">
                <Link href="https://umsonst.vercel.app/">
                  <a target="_blank" rel="noopener noreferrer">
                    <button className=" pt-2 pb-1 px-4 border border-palette6 rounded-full hover:bg-palette6 hover:text-white">
                      Visit the app
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
