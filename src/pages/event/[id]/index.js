import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Vintage from "@components/layouts/vintage";
import LandingFooter from "@components/layouts/footer/landing";
import eventData from "../../../data/events.json";
import pastEventData from "../../../data/pastevents.json";
import styles from "./styles.module.scss";

const OutStory = (props) => {
  const router = useRouter();
  const { id } = router.query;
  let eventInfo = null;
  let isPastEvent = false;

  if (id) {
    eventInfo = eventData.find(
      (item) => item.name.toLowerCase() == id.toLowerCase()
    );
    if (!eventInfo) {
      eventInfo = pastEventData.find(
        (item) => item.name.toLowerCase() == id.toLowerCase()
      );
      if (!eventInfo) {
        return <div></div>;
      }
      isPastEvent = false;
    } else {
      isPastEvent = true;
    }
  } else {
    return <div></div>;
  }

  return (
    <div className={styles.storyWrapper}>
      <Vintage
        contentStyle={{
          justifyContent: "flex-start",
        }}
      >
        {/* <div className={[styles.back3, styles.mobileOnly].join(' ')}>
        </div>

        <div className={[styles.back2, styles.mobileOnly].join(' ')}>
        </div> */}
        {/* <div className={[styles.back4, styles.mobileOnly].join(' ')}>
        </div> */}
        <div className={[styles.titleWrapper].join(" ")}>{eventInfo.name}</div>

        <div className={styles.contentWrapper}>
          <div className={styles.galleryImage}>
            <img src={`/images${eventInfo.image}`} />
          </div>
          <div className={[styles.description, styles.mobileOnly].join(" ")}>
            {eventInfo.description}
          </div>
          <div className={[styles.textWrapper, styles.desktopOnly].join(" ")}>
            <h2>{eventInfo.description}</h2>
          </div>
        </div>
      </Vintage>
    </div>
  );
};

export default OutStory;
