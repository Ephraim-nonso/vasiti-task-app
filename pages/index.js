import Head from "next/head";
import Image from "next/image";
import Main from "../components/data/Main";
import Featured from "../components/Featured";
import FirstTest from "../components/FirstTest";
import SecondTest from "../components/SecondTest";
import SubFeatured from "../components/SubFeatured";
import SubFeaturedTwo from "../components/SubFeaturedTwo";
import Testimony from "../components/Testimony";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vasiti</title>
        <meta
          name="description"
          content="The website expresses the testimonials of individuals to the satisfaction of our services."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <SubFeatured />
      <FirstTest />
      <SubFeaturedTwo />
      <SecondTest />
    </div>
  );
}
