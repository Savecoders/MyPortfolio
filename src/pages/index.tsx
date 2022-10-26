import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import MoreSkills from "../components/MoreSkills";
import { Phrases } from "../components/Phrases";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MyPortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bg p-10 dark:bg-gray-900 md:px-20 lg:px-20">
        <section className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <MoreSkills />
          <Phrases />
        </section>
      </main>
    </div>
  );
};


export default Home;
