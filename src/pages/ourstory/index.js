import React from "react";
import Image from "next/image";
import Vintage from "@components/layouts/vintage";
import PhotoFrame from "@components/photoframe";
import LandingFooter from "@components/layouts/footer/landing";

import styles from "./styles.module.scss";

const EventPage = (props) => {
  return (
    <div className={styles.storyWrapper}>
      <Vintage
        contentStyle={{
          justifyContent: "flex-start",
        }}
      >
        <div className={styles.contentWrapper}>
          <div className={[styles.titleWrapper, styles.mobileOnly].join(" ")}>
            OUR STORY
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
              OUR <br />
              STORY
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
              src="/images/story_image.jpg"
              width="1740"
              height="2612"
              description="Copyright © Triangle Loft 2021"
            />
          </div>
        </div>
      </Vintage>
    </div>
  );
};

export default EventPage;
