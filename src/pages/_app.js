import Head from "next/head";
import "../styles/articles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Guilherme S. Sousa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
