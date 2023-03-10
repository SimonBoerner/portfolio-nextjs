import { useState } from "react";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col items-center justify-center pt-40 min-h-screen bg-gradient-to-l from-palette2 to-palette1 text-xl snap-start text-black pb-8"
    >
      <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide">
        [About Me]
      </h1>
      <p className="w-5/6 md:w-4/6 pb-4">
        I’ve always been fascinated by computers and doing creative things with
        them. Most of my time I was using music software (Ableton Live), because
        I love making music and sounddesign.
      </p>
      <p className="w-5/6 md:w-4/6 pb-4">
        Two years ago, my father asked me rather randomly if I could build him a
        homepage. After a fun journey through the internet in which I found out
        how to build websites with Wordpress, I decided that I want to level up
        my skills by learning how to create websites and apps from scratch.
      </p>

      <p className="w-5/6 md:w-4/6 pb-4">
        In July 22 I finished the 23-Weeks&nbsp;
        <a
          href="https://devhausleipzig.de/de"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          “Code & Design Camp” at the DevHaus Leipzig.
        </a>
        &nbsp;It was the perfect kickstart. There I learned the fundamental
        technologies and concepts of modern webdesign and got a good idea how to
        use them. The technologies and tools we were learning are listed on the
        page below. I'm not an expert of these technologies, but I am willing to
        become one!
      </p>

      <p className="w-5/6 md:w-4/6 pb-4">
        I'm aware, that this is just the beginning of my coding journey. It
        would be nice to get to know you and maybe continue that journey in your
        company.
        <br />
      </p>
    </div>
  );
};

export default Aboutme;
