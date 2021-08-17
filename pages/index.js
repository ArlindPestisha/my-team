import Head from "next/head";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-screen bg-[#014E56] max-w-full">
      <Head>
        <title>My Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Hero />
      </main>
      
    </div>
  );
}
