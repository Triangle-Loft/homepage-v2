import React from 'react'
import styles from './styles.module.scss'

const Vintage = props => {
  const { children, contentStyle } = props
  return (
    <div className={styles.vintageWrapper}>
      <div className={styles.background}>
      </div>

      <section
        className={styles.contentWrapper}
        style={contentStyle}
      >
        {
          children
        }        
      </section>    
    </div>
  )
}

export default Vintage