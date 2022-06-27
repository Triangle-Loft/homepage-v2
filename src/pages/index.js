import React, { useEffect } from "react";
import { Router } from "next/router";
import Image from "next/image";
import Head from "next/head";

import Button from "@components/button";
import Vintage from "@components/layouts/vintage";
import HomeAnimation from "@components/homeanimation";

import pastEventData from "../data/pastevents.json";
import styles from "./styles.module.scss";


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
          <img className={styles.logoImage} src="/images/logo2.png" />
          <p>CREATE. CONVERGE. CONNECT.</p>
        </div>
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
              Triangle Loft is a newly renovated flexible space where urban
              meets modern and the scene never seen. Perched privately on the
              top floor of the Little Flatiron Building in the heart of the
              Meatpacking District, our loft-like open space is preserved with
              white brick walls and original 1849 exposed wood beams and
              rafters. Natural sunlight and moonlight fill the space by way of
              our full wrap around floor-to-ceiling windows.
            </p>
            <p>
              The exclusivity of this multi-functional space is defined in many
              ways as we are ‘exclusively inclusive’. We offer private events
              including production shoots, product launches, activations, and
              dinners which pay our monthly bills. Our public events include
              culturally curated art + photography installations designed for
              members of the community who want to experience this one-of-a-kind
              loft and feel our vibe! Triangle Loft believes in humans being
              humans in a place where inspiration is provided, and creativity
              executed.
            </p>
            <p>
              Triangle Loft focuses on local spirits and beers while our wines
              stay global. We proudly partner with biodynamic sustainable
              farmers &woman owned and operated distilleries. Our food options
              run the gamut from private chefs to off premise caterers and the
              best pizza places and taco gigs in town.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.leftPanel}>
            <p className={styles.titleDescription}>Our People</p>
            <h2 className={styles.title}>The Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eu nibh viverra, cursus eros non, vestibulum sem. Sed tincidunt
              posuere gravida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla iaculis turpis nisi, non feugiat lacus
              dignissim ac. Donec bibendum accumsan felis convallis varius.
              Donec cursus sem id purus sodales aliquet. Donec convallis lacus
              arcu, mattis efficitur lectus pellentesque quis. Aliquam
              vestibulum fringilla dolor. Sed sed sapien pretium, bibendum orci
              sed, vulputate lorem. Sed a lacus sodales, vehicula libero
              ullamcorper, euismod mi.
            </p>
          </div>
          <div></div>
          <div className={styles.rightPanel}>
            <div className={styles.teamPhoto}>Team photo here</div>
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
