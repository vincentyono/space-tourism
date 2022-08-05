import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <main className={styles["content"]}>
        <div className={styles["text"]}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            {
              "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
            }
          </p>
        </div>
        <button className={styles["btn"]}>EXPLORE</button>
      </main>
    </div>
  );
};

export default Home;
