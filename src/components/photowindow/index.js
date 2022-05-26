import React from 'react'
import styles from './styles.module.scss'

const PhotoWindow = props => {
  const {
    src,
    title,
    className
  } = props
  return (
    <div className={[styles.photoWindowWrapper, className].join(' ')}>
      <img className={styles.framePicture} src='/images/photoWindow.png' />
      <img className={styles.eventImage} src={`/images${src}`} />
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}

export default PhotoWindow