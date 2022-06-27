import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@components/button";
import styles from "./styles.module.scss";

const Menu = (props) => {
  const { textColor } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={[styles.navigationBar, showMenu ? styles.showMenu : ""].join(
        " "
      )}
    >
      <div
        className={styles.hamburgerButton}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <img src="/images/closebtn.png" />
        ) : (
          <img src="/images/hamburgerIcon.png" />
        )}
      </div>
      <ul className={[styles.navigationMenu].join(" ")}>
        <li className={styles.navigationMenuItem}>
          <Link href="/space">
            <a onClick={() => setShowMenu(false)}>
              <span>The Space</span>
            </a>
          </Link>
        </li>
        <li className={styles.navigationMenuItem}>
          <Link href="/ourstory">
            <a onClick={() => setShowMenu(false)}>
              <span>Our Story</span>
            </a>
          </Link>
        </li>
        <li className={styles.navigationMenuItem}>
          <Link href="/whatson">
            <a onClick={() => setShowMenu(false)}>
              <span>What's on 5</span>
            </a>
          </Link>
        </li>
        <li className={styles.navigationMenuItem}>
          <Link href="/contact">
            <a onClick={() => setShowMenu(false)}>
              <span>LET'S CHAT</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
