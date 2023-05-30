import Head from "next/head";

import Image from "next/image";
import image from "../images/pic.jpg";

function Home() {
  return (
    <div className="jumbotron">
      <Head>
        <title>News Feed</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <button type='button' className="btn btn-success">Success</button>
          </div>
      
        </div>
      </div>
 
  );
}

export default Home;
