import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import styles from "../../styles/pages/Crew.module.scss";
import { crews, crewType } from "../../data/crews";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import Link from "next/link";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface crewProps {
  crew: crewType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(crews).map((crew) => {
      return {
        params: {
          slug: crew,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  return { props: { crew: crews[slug] } };
};

const Crew: NextPage<crewProps> = ({ crew }) => {
  const router = useRouter();
  return (
    <div className={styles["container"]}>
      <Header />
      <main className={styles["main"]}>
        <div className={styles["description"]}>
          <h5>
            <span>02</span> MEET YOUR CREW
          </h5>
          <div className={styles["content"]}>
            <h4>
              {/* @ts-ignore */}
              {crew.position}
            </h4>
            <h3>
              {/* @ts-ignore */}
              {crew.name}
            </h3>
            <p>
              {/* @ts-ignore */}
              {crew.description}
            </p>
            <nav className={styles["navigation"]}>
              <ul className={styles["navigation-list"]}>
                <li
                  className={`${styles["navigation-items"]} ${
                    router.query.slug == "douglas-hurley"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/crew/douglas-hurley">
                    <a></a>
                  </Link>
                </li>
                <li
                  className={`${styles["navigation-items"]} ${
                    router.query.slug == "mark-shuttleworth"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/crew/mark-shuttleworth">
                    <a></a>
                  </Link>
                </li>
                <li
                  className={`${styles["navigation-items"]} ${
                    router.query.slug == "victor-glover"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/crew/victor-glover">
                    <a></a>
                  </Link>
                </li>
                <li
                  className={`${styles["navigation-items"]} ${
                    router.query.slug == "anousheh-ansari"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/crew/anousheh-ansari">
                    <a></a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles["image"]}>
            <Image
              id={styles["crew-image"]}
              // @ts-ignore
              src={crew.imagePath}
              // @ts-ignore
              alt={crew.imageAlt}
              layout="intrinsic"
              width={514}
              height={712}
              objectFit="contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
