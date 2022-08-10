import { useState } from "react";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col items-center justify-center pt-40 min-h-screen bg-gradient-to-b from-palette2/30 to-palette3/30 text-xl snap-start"
    >
      <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide">
        [About Me]
      </h1>
      <p className="w-5/6 md:w-4/6">
        I’ve always been enthusiastic by computers and doing creative things
        with them. Most of my time I was using music software (Ableton Live),
        because I love making music and sounddesign. Two years ago, my father
        asked me if i could build him a homepage. After a fun journey through
        the internet in which I found out how to build websites with Wordpress,
        I decided that I want to level up my skills by learning how to create
        websites and apps the "proper" way.
      </p>
      <br />
      <br />

      <p className="w-5/6 md:w-4/6">
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
        use them. The technologies and tools we were learning are listed under
        the&nbsp;
        <a href="/#skills" className="underline">
          "Skills"
        </a>
        &nbsp;page.
      </p>
      <br />
      <br />

      <p className="w-5/6 md:w-4/6">
        This is just the beginning of my coding journey. There is so much more
        to learn! <br /> If you want to know more about me, you can&nbsp;
        <a href="/#contact" className="underline">
          find my CV here!
        </a>
      </p>
    </div>
  );
};

export default Aboutme;
