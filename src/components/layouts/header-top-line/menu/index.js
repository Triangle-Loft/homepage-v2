import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@components/button";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const Menu = (props) => {
  const { textColor } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.indexOf("/contact") === 0) {
      setIsContactPage(true);
    } else {
      setIsContactPage(false);
    }
  }, [router.asPath]);

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
        {!isContactPage && (
          <li className={styles.navigationMenuItem}>
            <Link href="/contact">
              <a onClick={() => setShowMenu(false)}>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        )}
        <li className={styles.navigationMenuItem}>
          <Link href="/support/chat">
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
