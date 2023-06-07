import "../styles/globals.css"; // this is the global css file
import Head from "next/head";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>World News Feed</title>
        <link rel="icon" href="../public/logo.png" type="image/x-icon"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
