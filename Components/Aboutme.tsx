import { useState } from "react";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="relative flex flex-col items-center justify-center pt-40 min-h-screen bg-gradient-to-b from-palette2/30 to-palette3/30 text-xl snap-start"
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
        you want to know more about me, you can{" "}
        <a href="/#contact" className="underline">
          find my CV here!
        </a>
      </p>
    </div>
  );
};

export default Aboutme;
