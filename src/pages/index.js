import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Nav from "../components/Nav"
import Recent from "../components/Recent";
import Advert from "../components/Advert";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div> 
      <Head>
        <title>Real Estate Web App</title>
      </Head>
      <Nav/>
      <div className="lg:max-w-screen-lg mx-auto justify-center">
        <Banner/>
        <Recent/>
        <Advert/>
        <Testimonials/>
        <Footer/>
      </div>
      
     
    
    </div>
  );
}
