import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Nav from "../components/Nav"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Real Estate Web App</title>
      </Head>
      <Nav/>
      <Banner/>

     
    
    </div>
  );
}
