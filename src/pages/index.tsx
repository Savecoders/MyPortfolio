import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <header className="bg-white dark:bg-bg">
        <Navbar />
        <Hero />
      </header>
    </>
  );
};


export default Home;
