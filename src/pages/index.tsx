import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { MoreSkills } from "../components/MoreSkills";
import { Phrases } from "../components/Phrases";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>My Portfolio</title>
          <meta property="og:title" content="My Portfolio" key="title" />
        </Head>
        <Head>
          <meta property="og:title" content="My Portfolio" key="title" />
        </Head>
      </div>
      <Navbar />
      <Hero />
      <About />
      <MoreSkills />
      <Phrases />
    </>
  );
};


export default Home;
