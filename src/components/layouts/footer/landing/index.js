import Link from "next/link";
import React from "react";
import { SocialIcon } from "@components/icons";
import styles from "./styles.module.scss";

const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        <ul>
          <li>
            <Link href={"/space"}>
              <a>the space</a>
            </Link>
          </li>
          <li>
            <Link href={"/ourstory"}>
              <a>our story</a>
            </Link>
          </li>
          <li>
            <Link href={"/whatson"}>
              <a>what's on 5?</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a>let's chat</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.imageLogo}
            src="/images/logo.png"
            alt="logo_big"
          />
          <div className={styles.logoDescription}>
            Copyright © Triangle Loft 2022
          </div>
        </div>

        <div className={styles.centerWrapper}>
          <div className={styles.otherWrapper}>
            <div className={styles.moreWrapper}>
              <div className={styles.title}>Drop us a line:</div>
              <div className={styles.content}><a href="mailto:Karen@TriangleLoft.com" target="_blank">Karen@TriangleLoft.com</a></div>
            </div>
            <div className={styles.followWrapper}>
              <div className={styles.title}>FOLLOW US</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <SocialIcon name="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <SocialIcon name="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="_blank">
                      <SocialIcon name="instagram" />
                    </a> 
                  </li>
                  <li>
                    <a href="https://youtube.com/" target="_blank">
                      <SocialIcon name="youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/" target="_blank">
                      <SocialIcon name="medium1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.touchWrapper}>
              <div className={styles.title}>COME ON UP</div>
              <div className={styles.content}>
                675 Hudson St., Fl.5 <br />
                New York, NY 10014
                <br></br>
                <br></br>
                +1-212-675-8049
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
