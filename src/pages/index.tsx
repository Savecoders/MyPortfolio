import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
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
      <header className="bg-white h-screen flex flex-col bg-bg">
        <Navbar />
        <Hero />

      </header>
    </>
  );
};


export default Home;
