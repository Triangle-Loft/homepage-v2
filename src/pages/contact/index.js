import React, { useEffect, useState } from "react";
import { Router } from "next/router";
import Image from "next/image";
import Head from "next/head";

import Button from "@components/button";
import Vintage from "@components/layouts/vintage";

import styles from "./styles.module.scss";
import classNames from "classnames";
import Modal from "@components/modal";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [typeOfEvent, setTypeOfEvent] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

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
    "@type": "Triangle Loft Live At the World's Edge",
    title: "Triangle Loft- Live At the World's Edge",
    description:
      "LAWE is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers.",
  };

  // console.log('products: ', products)

  const handleSubmit = () => {
    console.log(
      firstName,
      lastName,
      email,
      phoneNo,
      eventDate,
      typeOfEvent,
      message
    );

    setIsModalOpened(true);
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="Triangle Loft is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers."
        />

        <meta
          property="og:title"
          content="Triangle Loft- Live At the World's Edge"
        />
        <meta
          property="og:description"
          content="Triangle Loft is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers."
        />
        <meta property="og:url" content="https://lawe.f3manifesto.xyz/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Triangle Loft" />
        <meta name="twitter:title" content="Patrons Landing page" />
        <meta
          name="twitter:description"
          content="Triangle Loft is the web3 underground free radio. With a new session streamed late night every week, we bring open source nomadic tunes from curated NFT music artists and storytellers."
        />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Vintage>
        <div className={styles.Wrapper}>
          <div className={styles.titleWrapper}>
            <p>What's your story?</p>
            <h1>
              Tell us every- thing<span>*</span>
            </h1>
            <p>*or just about</p>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.messageForm}>
              <p>contact info</p>
              <div className={classNames([styles.formRow, styles.between])}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="First Name:"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Last Name:"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={classNames([styles.formRow, styles.between])}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Mobile/Telephone No.:"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <p>event details</p>
              <div className={classNames([styles.formRow, styles.between])}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Event Date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Type of Event"
                  value={typeOfEvent}
                  onChange={(e) => setTypeOfEvent(e.target.value)}
                />
              </div>
              <p className={styles.messageTitle}>Your message</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you thinking?"
              ></textarea>
              <div className={styles.buttonGroup}>
                <button className={styles.button} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Vintage>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <div className={styles.modalContent}>
            <h2>Thanks for thinking of us!</h2>
            <p>We'll get back with you shortly.</p>
            <img src="/images/logo-white.png" alt="" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ContactPage;
