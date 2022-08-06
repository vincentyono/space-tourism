import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/pages/Destination.module.scss";
import { destinations, destinationType } from "../../data/destinations";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface destinationProps {
  destination: destinationType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(destinations).map((destination) => {
      return {
        params: {
          slug: destination.toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  return { props: { destination: destinations[slug] } };
};

const Destination: NextPage<destinationProps> = ({
  destination,
}: destinationProps) => {
  const router = useRouter();
  return (
    <div className={styles["container"]}>
      <Header />
      <main className={styles["main"]}>
        <h5>
          <span>01</span> PICK YOUR DESTINATION
        </h5>
        <div className={styles["content"]}>
          <div className={styles["content-image"]}>
            <Image
              id={styles["destination-img"]}
              // @ts-ignore
              src={destination.imagePath}
              // @ts-ignore
              alt={destination.destination}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles["description"]}>
            <nav className={styles["navigation"]}>
              <ul className={styles["navigation-list"]}>
                <li
                  className={`${styles["navigation-items"]} ${
                    //@ts-ignore
                    destination.destination.toLowerCase() == "moon"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/destination/moon">
                    <a>MOON</a>
                  </Link>
                </li>
                <li
                  className={`${styles["navigation-items"]} ${
                    //@ts-ignore
                    destination.destination.toLowerCase() == "mars"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/destination/mars">
                    <a>MARS</a>
                  </Link>
                </li>
                <li
                  className={`${styles["navigation-items"]} ${
                    //@ts-ignore
                    destination.destination.toLowerCase() == "europa"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/destination/europa">
                    <a>EUROPA</a>
                  </Link>
                </li>
                <li
                  className={`${styles["navigation-items"]} ${
                    //@ts-ignore
                    destination.destination.toLowerCase() == "titan"
                      ? styles["active"]
                      : styles["hover"]
                  }`}
                >
                  <Link href="/destination/titan">
                    <a>TITAN</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <h2>
              {/* @ts-ignore */}
              {destination.destination}
            </h2>
            <p>
              {/* @ts-ignore */}
              {destination.description}
            </p>
            <div className={styles["description-footer"]}>
              <div className={styles["description-footer-items"]}>
                <label
                  htmlFor="avg-distance"
                  className={styles["description-footer-labels"]}
                >
                  AVG. DISTANCE
                </label>
                <p
                  id="avg-distance"
                  className={styles["description-footer-infos"]}
                >
                  {/* @ts-ignore */}
                  {destination.averageDistance}
                </p>
              </div>
              <div className={styles["description-footer-items"]}>
                <label
                  htmlFor="travel-time"
                  className={styles["description-footer-labels"]}
                >
                  EST. TRAVEL TIME
                </label>
                <p
                  id="travel-time"
                  className={styles["description-footer-infos"]}
                >
                  {/* @ts-ignore */}
                  {destination.travelTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
