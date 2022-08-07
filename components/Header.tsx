import styles from "../styles/components/Header.module.scss";
import Logo from "../static/shared/logo.svg";
import Hamburger from "../static/shared/icon-hamburger.svg";
import Close from "../static/shared/icon-close.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <Logo id={styles["logo"]} />
      {!hamburgerActive ? (
        <Hamburger
          id={styles["hamburger"]}
          onClick={() => {
            setHamburgerActive(true);
          }}
        />
      ) : (
        <Close
          id={styles["hamburger"]}
          onClick={() => {
            setHamburgerActive(false);
          }}
        />
      )}
      <div className={styles["line"]}></div>
      <nav
        className={`${styles["navigation"]} ${
          !hamburgerActive && styles["hide"]
        }`}
      >
        <ul className={styles["navigation-list"]}>
          <li
            className={`${styles["navigation-items"]} ${
              router.pathname == "/" ? styles["active"] : styles["hover"]
            } ${!hamburgerActive && styles["hide-items"]}`}
          >
            <Link href="/">
              <a>
                <span>00</span> HOME
              </a>
            </Link>
          </li>
          <li
            className={`${styles["navigation-items"]} ${
              router.pathname.includes("/destination/")
                ? styles["active"]
                : styles["hover"]
            } ${!hamburgerActive && styles["hide-items"]}`}
          >
            <Link href="/destination/moon">
              <a>
                <span>01</span> DESTINATION
              </a>
            </Link>
          </li>
          <li
            className={`${styles["navigation-items"]} ${
              router.pathname.includes("/crew/")
                ? styles["active"]
                : styles["hover"]
            } ${!hamburgerActive && styles["hide-items"]}`}
          >
            <Link href="/crew/douglas-hurley">
              <a>
                <span>02</span> CREW
              </a>
            </Link>
          </li>
          <li
            className={`${styles["navigation-items"]} ${
              router.pathname.includes("/technology/")
                ? styles["active"]
                : styles["hover"]
            } ${!hamburgerActive && styles["hide-items"]}`}
          >
            <Link href="/technology/launch-vehicle">
              <a>
                <span>03</span> TECHNOLOGY
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
