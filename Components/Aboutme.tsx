import { useState } from "react";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col items-center justify-center pt-40 min-h-screen bg-gradient-to-l from-palette2 to-palette1 opacity-90 text-xl snap-start text-black pb-8"
    >
      <h1 className="absolute top-20 md:mx-auto text-3xl tracking-wide">
        [About Me]
      </h1>

      <p className="w-5/6 md:w-4/6 pb-4">
        Everything started two years ago, when my father asked me if I could
        build him a homepage. Back then, I had zero knowledge of anything
        webdesign related. But after a fun journey through the internet in which
        I found out how to build websites with WordPress, I decided that I want
        to level up my skills by learning how to create websites and apps from
        scratch. And so I did!
      </p>

      <p className="w-5/6 md:w-4/6 pb-4">
        Last year I finished the 23-Weeks&nbsp;
        <a
          href="https://devhausleipzig.de/de"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          “Code & Design Camp” at the DevHaus Leipzig.
        </a>
        &nbsp;It was the perfect kick-start. I learned the fundamental
        technologies and concepts of modern webdesign and got a good idea how to
        use them. The technologies and tools we were learning are listed on the
        page below.
      </p>

      <p className="w-5/6 md:w-4/6 pb-4">
        This is the beginning of my coding journey, and I am excited to move on
        in a professional environment.
        <br />
      </p>
    </div>
  );
};

export default Aboutme;
