import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

const PhotoFrame = props => {
  const {
    src,
    width,
    height,
    description,
    textPosition='left'
  } = props

  return (
    <div className={styles.photoFrameWrapper}>
      <div className={styles.photoFrame}>
        <Image
          src={src}
          width={width}
          height={height}
        />
      </div>
      <div className={[styles.description, textPosition=='left' ? styles.textLeft : styles.textRight].join(' ')}>
      {
        description
      }
      </div>
    </div>
  )
}

export default PhotoFrame