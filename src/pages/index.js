import React, { useEffect } from "react";
import { Router } from "next/router";
import Image from "next/image";
import Head from "next/head";

import Button from "@components/button";
import Vintage from "@components/layouts/vintage";
import HomeAnimation from "@components/homeanimation";

import pastEventData from "../data/pastevents.json";
import styles from "./styles.module.scss";
import fairyDustCursor from "@utils/fairly-dust-cursor";


const LandingPage = () => {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("485692459240447");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Triangle Loft",
    title: "Triangle Loft",
    description:
      "Create. Connect. Converge.",
  };

  // console.log('products: ', products)

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="Create. Connect. Converge."
        />

        <meta
          property="og:title"
          content="Triangle Loft"
        />
        <meta
          property="og:description"
          content="Create. Connect. Converge."
        />
        <meta property="og:url" content="https://triangleloft.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Triangle Loft" />
        <meta name="twitter:title" content="Triangle Loft" />
        <meta
          name="twitter:description"
          content="Create. Connect. Converge."
        />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Vintage>
        <div className={styles.wallWrapper}>
          <HomeAnimation />
          <img className={styles.logoImage} src="/images/logo3.png" />
          <p>CREATE. CONVERGE. CONNECT.</p>
        </div>
        <div className={styles.cursor}></div>
        <div className={styles.section}>
          <div className={styles.leftPanel}>
            <p className={styles.titleDescription}>About Us</p>
            <h2 className={styles.title}>We are triangle loft</h2>
            <a href="/ourstory" className={styles.knowMore}>
              KNOW MORE
            </a>
          </div>
          <div className={styles.rightPanel}>
          <p>
          Triangle Loft is a newly renovated flexible space where urban meets modern and the scene never seen. Perched privately on the top floor of the Little Flatiron Building in the heart of the Meatpacking District, our loft-like open space  is preserved with white brick walls and original 1849 exposed wood beams, and rafters. Natural sunlight and moonlight fill the space by way of our full wrap around floor-to-ceiling windows.
            </p>
            <p>
          The exclusivity of this multi-functional space is defined in many ways as we are ???exclusively inclusive???. We offer private events including receptions, dinners, photo shoots, brand activations, and more which pay our monthly bills and public events which include culturally curated art + photography installations. Our public events have been designed so that members of the community who are less fortunate are afforded the opportunity to experience this one-of-a-kind loft and feel our vibe! Triangle Loft believes in humans being humans in a place where inspiration is provided, and creativity executed.
            </p>
            <p>
            As a space that curates each event based on our client???s vision and personality, packages are not offered. Our pricing and event options are designed uniquely for our guests. At Triangle Loft we are visionaries. We create experiences based on client visions and dreams. It???s not our place to tell our guests how their event should be produced, however it is our place to guide and assist our guests to achieve success around on their terms.

Triangle Loft; designed by humans with humans in mind.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.leftPanel}>
            <p className={styles.titleDescription}>Our People</p>
            <h2 className={styles.title}>The Team</h2>
            <p>
            The Triangle Loft team is like our space, filled with creativity and exclusively inclusive to all. They are flexible in their ways, customer centric, and like each of us, possess their own unique personalities superbly meshing with our brands philosophy. From the front door to sanitation, we have put together the perfect team which has come to be one of the greatest characteristics of our space.
            <br></br><br></br>
Our Mixologists are the designers and developers of cocktails, mocktails and more. Each are like scientists who experiment with spirits and flavors. They use beakers to hold their syrups and flasks for their infusions, as they continually look for new ways to create the next trend in cocktails.
<br></br><br></br>
The serving team is first in class and come from all areas of life. They are actors, artists, students, and parents. Some of them are feisty while others subdued. But don???t let that fool you, they are the best of the best in all they do and are aware of the role they play at each event.
            </p>
          </div>
          <div></div>
          <div className={styles.rightPanel}>

            <img className={styles.teamPhoto} src="/images/team/team.png"/>

          </div>
          <ul className={styles.team}>
            <li>
              <div className={styles.photo}>
                <img src="/images/team/karen.png" alt="" />
              </div>
              <div className={styles.memberInfo}>
                <p className={styles.name}>Karen Genauer</p>
                <p className={styles.role}>Creator</p>
              </div>
            </li>
            <li>
              <div className={styles.photo}>
                <img src="/images/team/yofi.png" alt="" />
              </div>
              <div className={styles.memberInfo}>
                <p className={styles.name}>Yofi Genauer</p>
                <p className={styles.role}>Director of Security</p>
              </div>
            </li>
            <li>
              <div className={styles.photo}>
                <img src="/images/team/grandma.png" alt="" />
              </div>
              <div className={styles.memberInfo}>
                <p className={styles.name}>Ellen Genauer</p>
                <p className={styles.role}>
                  Chief Grandmother & Mother Extraordinaire
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Vintage>
    </div>
  );
};

export default LandingPage;
