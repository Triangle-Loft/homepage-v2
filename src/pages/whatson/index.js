import React from "react";
import Image from "next/image";
import Vintage from "@components/layouts/vintage";
import PhotoFrame from "@components/photoframe";
import LandingFooter from "@components/layouts/footer/landing";

import styles from "./styles.module.scss";

const WhatsOnPage = (props) => {
  return (
    <div className={styles.storyWrapper}>
      <Vintage
        contentStyle={{
          justifyContent: "flex-start",
        }}
      >
        <div className={styles.contentWrapper}>
          <div className={[styles.titleWrapper, styles.mobileOnly].join(" ")}>
            WHAT'S ON 5?
          </div>
          <div className={[styles.description, styles.mobileOnly].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            nibh viverra, cursus eros non, vestibulum sem. Sed tincidunt posuere
            gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla iaculis turpis nisi, non feugiat lacus dignissim ac. Donec
            bibendum accumsan felis convallis varius. Donec cursus sem id purus
            sodales aliquet. Donec convallis lacus arcu, mattis efficitur lectus
            pellentesque quis. Aliquam vestibulum fringilla dolor. Sed sed
            sapien pretium, bibendum orci sed, vulputate lorem. Sed a lacus
            sodales, vehicula libero ullamcorper, euismod mi.
            <br />
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={[styles.textWrapper, styles.desktopOnly].join(" ")}>
            <h1>
              WHAT'S <br />
              ON 5?
            </h1>
            <h2>
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
              <br />
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
          </div>
          <div className={styles.galleryImage}>
            <PhotoFrame
              src="/images/gallery1.png"
              width="1174"
              height="796"            />
          </div>
        </div>
        <div className={styles.events}>
          <h3>Resident Artists</h3>
          <ul>
            <li>xyz event artist name</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.events}>
          <h3>Community Events</h3>
          <ul>
            <li>xyz event mm-dd-yy 00:00 AM/PM</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Vintage>
    </div>
  );
};

export default WhatsOnPage;
