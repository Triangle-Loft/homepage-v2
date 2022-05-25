import React from 'react'
import Vintage from '@components/layouts/vintage'
import styles from './styles.module.scss'

const FullModal = props => {
  const {
    onClose,
    children
  } = props
  
  return (
    <div className={styles.modalWrapper}>
      <Vintage>
        <img
          className={styles.closeButton}
          src='/images/closebtn.png'
          onClick={() => onClose()}
        />
        {
          children
        }
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoImage}
            src='/images/logo.png'
          />
        </div>
      </Vintage>
    </div>
  )
}

export default FullModal