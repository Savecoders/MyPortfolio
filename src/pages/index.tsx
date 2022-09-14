import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>My page title</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Head>
          <meta property="og:title" content="My new title" key="title" />
        </Head>
      </div>
      <header className="bg-white h-screen flex flex-col dark:bg-bg">
        <Navbar />
        <Hero />
      </header>
    </>
  );
};


export default Home;
