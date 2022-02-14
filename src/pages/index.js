import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Nav from "../components/Nav"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Real Estate Web App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
      </Head>
      <Nav/>
      
      <Banner/>

     
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    </div>
  );
}
