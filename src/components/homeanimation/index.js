import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

const images = [
  '/images/home/home1.png',
  '/images/home/home2.png',
  '/images/home/home3.png',
  '/images/home/home4.png',
  '/images/home/home5.png',
  '/images/home/home6.png',
  '/images/home/home7.png',
  '/images/home/home7.png',
  '/images/home/home7.png',
  '/images/home/home7.png',
  '/images/home/home7.png'
]

const HomeAnimation = () => {
  const itemEls = useRef(new Array());

  const scaleItems = Array.from({length: images.length}, (_, i) => -i * 0.3)
  const isMouseOver = Array.from({length: images.length}, (_, i) => false)


  const xPos = Array.from({length: images.length}, (_, i) => -50)
  const yPos = Array.from({length: images.length}, (_, i) => -50)
  const xSteps = Array.from({length: images.length}, (_, i) => (i % 2 ? 1 : -1) * 0.3)
  const ySteps = Array.from({length: images.length}, (_, i) => (
      (
        i % 4 == 0 ? 1
        : i % 4 == 1 ? -1
        : i % 4 == 2 ? -1
        : 1
      ) * 0.3
    )
  )

  let currentTimer;

  const IsMouseOver = () => {
    if (isMouseOver.findIndex(item => item === true) >= 0) return true;
    return false;
  }

  const moveImages = () => {
    // console.log('pauseAnimation.current:', pauseAnimation.current)
      !IsMouseOver() && itemEls.current.forEach((item, index) => {
      // console.log(`item ${index}: `, item)
      scaleItems[index] += 0.003;
      if (scaleItems[index] > 3) {
        scaleItems[index] = scaleItems[index] - 3;
        xPos[index] = -50
        yPos[index] = -50
      }  else if (scaleItems[index] > 0) {
        xPos[index] += xSteps[index]
        yPos[index] += ySteps[index]
      }

      if (item) {
        item.style=`transform: scale(${scaleItems[index] > 0 ? scaleItems[index] : 0}) translate(${xPos[index]}%, ${yPos[index]}%)`;
      }
    })

    currentTimer = setTimeout(() => {
      moveImages()
    }, 20)
  }

  useEffect(() => {
    currentTimer && clearTimeout(currentTimer);
    moveImages();
  }, [])

  return (
    <div className={styles.animationWrapper}>
      {
        images.map((item, index) => {
          return (
            <img 
              key={index}
              src={item}
              ref={(element) => {
                itemEls.current[index] = element}
              }
              onMouseEnter={() => {
                console.log('enter');
                // currentTimer && clearTimeout(currentTimer)
                isMouseOver[index] = true
              }}
              onMouseLeave={() => {
                console.log('leave');
                // moveImages()
                isMouseOver[index] = false
              }}
            />
          )
        })
      }
    </div>
  )
}

export default HomeAnimation