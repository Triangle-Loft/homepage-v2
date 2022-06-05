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
          Bento on Hudson and I began our partnership in February 2020. The space was missing some of its permits needed to fully operate. It was lacking gas, not only for heating but for the kitchen as well. The Bento team and I scrambled to tie up loose ends to stay on track for our grand opening planned for March 19th, 2020. Needless to say, the world changed due to Covid-19, and the event was cancelled on March 13th.<br></br><br></br>

  

Covid-19 took the world by surprise. In the early days, the circumstances surrounding the global pandemic was new to us all. Naively, we thought the lockdown would last only a few weeks. Ownership approached me asking what the consequences would be if we were to stop all sales efforts. I indicated that we would then have to start from scratch. I stayed on and worked a few hours here and there for the company, assisting them with another project while staying in touch with clients.<br></br><br></br>  

  

In October, I was informed that Bento on Hudson would be giving up the event space. It turns out, the owner of the building agreed to sublet one of the two sides of the space to me. It was frustrating because I had only just figured out what I needed to do to be found on social media, and where our marketing efforts were falling short.<br></br><br></br>  

  

I spoke with the landlord of the building and was lucky enough to have his full support. Surprisingly, he asked me what I could pay per month in rent, and the rest is history.<br></br><br></br> 

  

For the first few days after taking over the empty space, I walked around the Meatpacking District in the frigid cold asking myself what I could do to bring the space to life? I’ve always been inspired by the street art of New York City, and suddenly, it clicked. I decided to bring the outside in. I stumbled upon MDOT_SEASON's murals, which had been painted on boarded up store fronts and through another stroke of luck, I came across DEC.NYC on Instagram. Instantly, I knew that my newly acquired space would be the perfect fit for their work.<br></br><br></br>  

  

In this moment, the idea behind Triangle Loft, was born.  
            <br />
            <br />
          </div>
          <div className={[styles.textWrapper, styles.desktopOnly].join(" ")}>
            <h1>
              OUR <br />
              STORY
            </h1>
            <h2>
            Bento on Hudson and I began our partnership in February 2020. The space was missing some of its permits needed to fully operate. It was lacking gas, not only for heating but for the kitchen as well. The Bento team and I scrambled to tie up loose ends to stay on track for our grand opening planned for March 19th, 2020. Needless to say, the world changed due to Covid-19, and the event was cancelled on March 13th.<br></br><br></br>

  

Covid-19 took the world by surprise. In the early days, the circumstances surrounding the global pandemic was new to us all. Naively, we thought the lockdown would last only a few weeks. Ownership approached me asking what the consequences would be if we were to stop all sales efforts. I indicated that we would then have to start from scratch. I stayed on and worked a few hours here and there for the company, assisting them with another project while staying in touch with clients.<br></br><br></br>  

  

In October, I was informed that Bento on Hudson would be giving up the event space. It turns out, the owner of the building agreed to sublet one of the two sides of the space to me. It was frustrating because I had only just figured out what I needed to do to be found on social media, and where our marketing efforts were falling short.<br></br><br></br>  

  

I spoke with the landlord of the building and was lucky enough to have his full support. Surprisingly, he asked me what I could pay per month in rent, and the rest is history.<br></br><br></br> 

  

For the first few days after taking over the empty space, I walked around the Meatpacking District in the frigid cold asking myself what I could do to bring the space to life? I’ve always been inspired by the street art of New York City, and suddenly, it clicked. I decided to bring the outside in. I stumbled upon MDOT_SEASON's murals, which had been painted on boarded up store fronts and through another stroke of luck, I came across DEC.NYC on Instagram. Instantly, I knew that my newly acquired space would be the perfect fit for their work.<br></br><br></br>  

  

In this moment, the idea behind Triangle Loft, was born.  
              <br />
              <br />
            </h2>
          </div>
          <div className={styles.galleryImage}>
            <PhotoFrame
              src="/images/story_image.jpg"
              width="1740"
              height="2612"
            />
          </div>
        </div>
      </Vintage>
    </div>
  );
};

export default EventPage;
