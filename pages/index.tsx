import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Home;
