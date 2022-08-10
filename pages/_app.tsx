import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../Components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Simon Börner Frontend-Developer</title>
        <meta
          name="description"
          content="Hire a Junior Frontend-Developer from Leipzig"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
