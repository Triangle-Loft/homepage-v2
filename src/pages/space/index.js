import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'
import Vintage from '@components/layouts/vintage'
import LandingFooter from '@components/layouts/footer/landing'
import eventData from '../../data/events.json'
import pastEventData from '../../data/pastevents.json'
import partnersData from '../../data/partners.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"


import styles from './styles.module.scss'
import PhotoWindow from '@components/photowindow'


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
    // if (id && id.toLowerCase() == 'partners') {
    //   // partnersRef.current && partnersRef.current.scrollIntoView()
    //   partnersRef.current && window.scrollTo(0, partnersRef.current.offsetTop)
    // } else {
    //   window.scrollTo(0, 0)
    // }

    console.log('partnersData: ', partnersData)
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
                <a href='FULL_DIAGRAM_WITH_DIMENSIONS-Compressed.pdf' download>
                  DOWNLOAD THE FLOOR PLAN here <span><img src='images/arrow-right.png'/></span>
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
          <section className={styles.virtualTour}>
            <div className={styles.line}></div>
            <h1>
              THE VIRTUAL <br />
              TOUR <br />
            </h1>

            <a href='https://eazel.net/show_vr/20db5399ab01?fullscreen=1&autoplay=1' target='_blank'>
              Walk the space here, and don't forget to open the double doors!<span><img src='images/arrow-down.png'/></span>
            </a>
            <img className={styles.imgVirtualTour} src='/images/virtualtour.png' />
          </section>
          <section className={styles.pastEvents}>
            <h3>
              PAST EVENTS
            </h3>
            <h1>
              HAVE A LOOK
            </h1>
            <div className={styles.eventList}>
              {
                pastEventData.map((item, index) => {
                  return (
                    <PhotoWindow
                      className={index % 2 == 0 ? styles.bigPhotoItem : styles.smallPhotoItem}
                      key={index}
                      src={item.image}
                      title={item.name}
                    />
                  )
                })
              }
            </div>
          </section>
          <section className={styles.partners}>
            <h3>
              PREFERRED PARTNERS
            </h3>
            <h1>
              CREATING <br />
              EXPERIENCES
            </h1>
            <a href='' target='_blank' className={styles.connectLink}>
              CONNECT <br />
              WITH US <span><img src='images/arrow-down.png'/></span>
            </a>

            <div className={styles.category}>
              {
                partnersData.map((item, index) => {
                  return (
                    <div key={index} className={styles.categoryItem}>
                      <div className={styles.categoryName}>
                        {
                          item.category
                        }
                      </div>
                      <div className={styles.partnerList}>
                        {
                          item.items.map((partnerItem, partnerIndex) => {
                            return (
                              <div className={styles.partnerItem} key={partnerIndex}>
                                <PhotoWindow
                                  className={styles.partnerPhotoItem}
                                  src={partnerItem.image}
                                  title={partnerItem.name}
                                />
                              </div>
                            )  
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }              
            </div>
          </section>

          <section className={styles.dropemail}>
            <div className={styles.multipleWindows}>
              <img src='/images/photoWindow2.png' className={styles.window1} />
              <img src='/images/photoWindow2.png' className={styles.window2} />
              <img src='/images/photoWindow2.png' className={styles.window3} />
              <img src='/images/photoWindow2.png' className={styles.window4} />
              <img src='/images/photoWindow2.png' className={styles.window5} />
              <div className={styles.title}>
                HI THERE!
              </div>
              <div className={styles.body}>
                <div className={styles.description}>
                  Join our mailing list to stay updated 
                  on what’s happening at triangle loft!
                </div>

                <a className={styles.emailButton}>
                  DROP US YOUR EMAIL!
                </a>
              </div>
              
            </div>
          </section>
        </div>
      </Vintage>
    </div>
  )
}

export default Events