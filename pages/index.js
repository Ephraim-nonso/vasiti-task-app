import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
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
      </Head>
      <Featured />
      <SubFeatured />
      <Testimony />
      <SubFeaturedTwo />
      <Testimony />
    </div>
  );
}
