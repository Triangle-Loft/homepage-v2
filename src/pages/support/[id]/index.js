import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import Vintage from "@components/layouts/vintage";
import LandingFooter from "@components/layouts/footer/landing";
import Button from "@components/button";

import styles from "./styles.module.scss";

const faqContent = [
  {
    question: "How do I confirm a date?",
    answer: "answer answer answer answer answer",
  },
  {
    question: "How does payment work?",
    answer: "answer answer answer answer answer",
  },
  {
    question: "What happens if I need to cancel my event?",
    answer: "answer answer answer answer answer",
  },
  {
    question: "Is there a noise curfew?",
    answer: "answer answer answer answer answer",
  },
  {
    question: `Do I have to use Triangle Loft's preffered vendors?`,
    answer: "answer answer answer answer answer",
  },
  {
    question: "Can I hang decorations on the walls?",
    answer: "answer answer answer answer answer",
  },
];

const FaqItem = (props) => {
  const [opened, setOpened] = useState(false);

  const { question, answer } = props;

  return (
    <li
      onClick={() => setOpened(!opened)}
      className={opened ? styles.opened : ""}
    >
      <div className={styles.question}>{question}</div>
      <div className={styles.panel}>{answer}</div>
    </li>
  );
};

const SupportPage = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const faqRef = useRef();

  useEffect(() => {
    if (id && id.toLowerCase() == "faq") {
      faqRef.current && window.scrollTo(0, faqRef.current.offsetTop);
    } else {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div className={styles.supportWrapper}>
      <Vintage
        contentStyle={{
          justifyContent: "flex-start",
        }}
      >
        <div className={[styles.back3, styles.mobileOnly].join(" ")}></div>
        <div className={[styles.back1, styles.mobileOnly].join(" ")}></div>
        <div className={[styles.back2, styles.mobileOnly].join(" ")}></div>
        <div className={[styles.back4, styles.mobileOnly].join(" ")}></div>
        <div className={[styles.back5, styles.mobileOnly].join(" ")}></div>

        <div className={styles.contentWrapper}>
          <section id="chat" className={styles.chatSection}>
            <div className={[styles.textWrapper, styles.desktopOnly].join(" ")}>
              <h1>LET'S CHAT</h1>
              <h2>
                675 Hudson Street <br />
                Floor 5 <br />
                New York, NY 10014
                <br />
                <br />
                Karen@TriangleLoft.com
              </h2>
            </div>

            <div className={[styles.titleWrapper, styles.mobileOnly].join(" ")}>
              LET'S CHAT
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.980929702717!2d-74.00763024905187!3d40.740445143710346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf9a18ea65%3A0x34620ce8aa0fb60d!2s675%20Hudson%20St%20Fl.5N%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1646627152016!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div
              className={[styles.addressWrapper, styles.mobileOnly].join(" ")}
            >
              675 Hudson Street <br />
              Floor 5 <br />
              New York, NY 10014
              <br />
              <br />
              Karen@TriangleLoft.com
            </div>
          </section>
          <section id="contact" className={styles.contactSection}>
            <h1>GET IN TOUCH</h1>
            <div className={styles.submitForm}>
              <div className={styles.subjectWrapper}>
                <input
                  type="text"
                  className={styles.input}
                  name="subject"
                  id="subject"
                  placeholder="Subject Line"
                />
              </div>
              <div className={styles.contactInfoWrapper}>
                <h2>YOUR CONTACT INFO</h2>
                <input
                  type="text"
                  className={styles.input}
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className={styles.input}
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className={styles.input}
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className={styles.input}
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.messageWrapper}>
                <h2>YOUR MESSAGE</h2>
                <textarea
                  type="text"
                  className={styles.input}
                  name="message"
                  id="message"
                  placeholder="What are you thinking?"
                />
              </div>
              <div className={styles.submitWrapper}>
                <Button
                  className={styles.submitButton}
                  text="SUBMIT"
                  href=""
                  onClick={() => {}}
                />
              </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection} ref={faqRef}>
            <h1>FAQS</h1>
            <div className={styles.faqContainer}>
              <ul>
                {faqContent.map((item, index) => {
                  return (
                    <FaqItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </Vintage>
    </div>
  );
};

export default SupportPage;
