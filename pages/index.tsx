import type { NextPage } from "next";

import Hero from "../Components/Hero";
import Aboutme from "../Components/Aboutme";
import Skillpage from "../Components/Skillpage";
import Projects from "../Components/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Skillpage />
      <Projects />
    </div>
  );
};

export default Home;
