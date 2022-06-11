/*import React, { useEffect, useState} from "react";
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
    "@type": "Triangle Loft",
    title: "Triangle Loft",
    description:
      "Triangle Loft is a newly renovated flexible space where urban meets modern and the scene never seen.",
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
          content="Triangle Loft is a newly renovated flexible space where urban meets modern and the scene never seen."
        />

        <meta
          property="og:title"
          content="Triangle Loft"
        />
        <meta
          property="og:description"
          content="Triangle Loft is a newly renovated flexible space where urban meets modern and the scene never seen."
        />
        <meta property="og:url" content="https://triangleloft.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Triangle Loft" />
        <meta name="twitter:title" content="Create. Converge. Connect." />
        <meta
          name="twitter:description"
          content="Triangle Loft is a newly renovated flexible space where urban meets modern and the scene never seen."
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

export default ContactPage;*/


import React, { useEffect, useState} from "react";
import { Router } from "next/router";
import Image from "next/image";
import Head from "next/head";
import emailjs from "emailjs-com";

import Button from "@components/button";
import Vintage from "@components/layouts/vintage";

import styles from "./styles.module.scss";
import classNames from "classnames";
import Modal from "@components/modal";


const ContactPage = () => {

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Triangle Loft",
    title: "Triangle Loft",
    description:
      "Triangle Loft is a newly renovated flexible space where urban meets modern and the scene never seen.",
  };

  function sendEmail(e) {
    {
      e.preventDefault();
      emailjs.sendForm('service_67226pr', 'template_wgj0inx', e.target, 'Ex7hIkgjbXrWu8tTu')
      .then((result) => {
      console.log(result.text);
      }, (error) => {
      console.log(error.text);
      });
      e.target.reset()
  }
}

  return (
    <div className={styles.wrapper}>
      <form onSubmit={sendEmail}>
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
                  name="firstName"
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Last Name:"
                  name="lastName"
                />
              </div>
              <div className={classNames([styles.formRow, styles.between])}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Email"
                  name="email"
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Mobile/Telephone No.:"
                  name="phoneNo"
                />
              </div>
              <p>event details</p>
              <div className={classNames([styles.formRow, styles.between])}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Event Date"
                  name="eventDate"
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Type of Event"
                  name="typeOfEvent"
                />
              </div>
              <p className={styles.messageTitle}>Your message</p>
              <textarea
                name="message"
                placeholder="What are you thinking?"
              ></textarea>
              <div className={styles.buttonGroup}>
                <button className={styles.button}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Vintage>
      </form>
    </div>
  );
};

export default ContactPage;

