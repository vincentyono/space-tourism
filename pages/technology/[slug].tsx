import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import styles from "../../styles/pages/Technology.module.scss";
import { technologies, technologyType } from "../../data/technology";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface technologyProps {
  technology: technologyType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(technologies).map((key) => {
      return {
        params: { slug: key },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  return { props: { technology: technologies[slug] } };
};

const Technology: NextPage<technologyProps> = ({ technology }) => {
  const router = useRouter();
  return (
    <div className={styles["container"]}>
      <Header />
      <main className={styles["main"]}>
        <h5>
          <span>03</span> SPACE LAUNCH 101
        </h5>
        <div className={styles["content"]}>
          <div className={styles["description"]}>
            <span>THE TERMINOLOGY ...</span>
            {/* @ts-ignore */}
            <h3>{technology.technology}</h3>
            {/* @ts-ignore */}
            <p>{technology.description}</p>
          </div>
          <nav className={styles["navigation"]}>
            <ul className={styles["navigation-list"]}>
              <li
                className={`${styles["navigation-items"]} ${
                  // @ts-ignore
                  technology.technology.toLowerCase() == "launch vehicle"
                    ? styles["active"]
                    : styles["hover"]
                }`}
              >
                <Link href="/technology/launch-vehicle">
                  <a>1</a>
                </Link>
              </li>
              <li
                className={`${styles["navigation-items"]} ${
                  // @ts-ignore
                  technology.technology.toLowerCase() == "spaceport"
                    ? styles["active"]
                    : styles["hover"]
                }`}
              >
                <Link href="/technology/spaceport">
                  <a>2</a>
                </Link>
              </li>
              <li
                className={`${styles["navigation-items"]} ${
                  // @ts-ignore
                  technology.technology.toLowerCase() == "space capsule"
                    ? styles["active"]
                    : styles["hover"]
                }`}
              >
                <Link href="/technology/space-capsule">
                  <a>3</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles["image-desktop"]}>
            <Image
              // @ts-ignore
              src={technology.imagePortraitPath}
              // @ts-ignore
              alt={technology.imageAlt}
              layout="intrinsic"
              width={515}
              height={527}
              objectFit="contain"
            />
          </div>
          <div className={styles["image-mobile"]}>
            <Image
              id={styles["img-mobile"]}
              // @ts-ignore
              src={technology.imageLandscapePath}
              // @ts-ignore
              alt={technology.imageAlt}
              layout="responsive"
              width={768}
              height={310}
              objectFit="contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;
