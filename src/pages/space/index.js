import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'
import Vintage from '@components/layouts/vintage'
import LandingFooter from '@components/layouts/footer/landing'
import eventData from '../../data/events.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"


import styles from './styles.module.scss'


const indicatorStyles = {
  border: '1px solid #fff',
  background: 'trasnparent',
  width: 15,
  height: 15,
  borderRadius: '50%',
  display: 'inline-block',
  margin: '0 8px',
};

const EventItem = props => {
  const {
    title,
    image,
    black
  } = props

  return (
    <div className={styles.eventItem}>
      <div className={styles.eventItemImage}>
        <Image
          src={image}
          width='520'
          height='520'
        />
      </div>
      <div className={[styles.eventTitle, black ? styles.blackColor : ''].join(' ')}>
      {
        title
      }
      </div>
      <div className={styles.overlay}>
        {`LEARN MORE >`}
      </div>
    </div>
  )
}

const Events = props => {

  const router = useRouter()
  const { id } = router.query
  const partnersRef = useRef()

  useEffect(() => {
    // console.log('id: ', id)
    if (id && id.toLowerCase() == 'partners') {
      // partnersRef.current && partnersRef.current.scrollIntoView()
      partnersRef.current && window.scrollTo(0, partnersRef.current.offsetTop)
    } else {
      window.scrollTo(0, 0)
    }
  })
  
  return (
    <div className={styles.eventsWrapper}>
      <Vintage
        contentStyle={{
          justifyContent: 'flex-start'
        }}
      >
        <div className={styles.contentWrapper}>
          <section id="space" className={styles.spaceEvents}>
            <h1>
              ABOUT<br />
              THE SPACE
              <div className={styles.line}></div>
            </h1>
            <img className={styles.mapImage} src='/images/map.png' />
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span>Address</span>  675 Hudson St, 5th Floor New York, NY 10014.
              </div>
              <div className={styles.infoItem}>
                <a href=''>
                  DOWNLOAD THE FLOOR PLAN here
                </a>
              </div>
              <div className={styles.infoItem}>
                <span>Sqft</span>  5,000
              </div>
              <div className={styles.infoItem}>
                <span>Access</span>  Elevator
              </div>
              <div className={styles.infoItem}>
                <span>Capacity</span>  135 Seated / 250 Reception On Flow
              </div>
              <div className={styles.infoItem}>
                <span>HVAC</span>  Centeral Heating & Air
              </div>
              <div className={styles.infoItem}>
                <span>Restroom</span>  6 Total / Unisex
              </div>
              <div className={styles.infoItem}>
                <span>Full Kitchen</span>
              </div>
            </div>
            
          </section>
          <section id="events" className={styles.events}>
            <div className={styles.line}></div>
            <h1>
              THE VIRTUAL <br />
              TOUR <br />
            </h1>
          </section>
          <section id="partners" className={styles.partners} ref={partnersRef}>
            <h1>
              HAVE A LOOK
            </h1>
          </section>
        </div>
      </Vintage>
    </div>
  )
}

export default Events