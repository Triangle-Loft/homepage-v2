import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import cn from 'classnames'

import Logo from './logo'
import Menu from './menu'
import styles from './styles.module.scss'

const HeaderTopLine = ({ className }) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  

  return (
    <div
      className={cn(
        className,
        styles.wrapper,
        hasScrolled ? styles.floatingNav : ''
      )}
    >
      <div className={styles.leftBox}>
        <Logo black={true} />
      </div>
      <div className={styles.rightBox}>
        <Menu />
      </div>
    </div>
  )
}

HeaderTopLine.propTypes = {
  className: PropTypes.string
}

HeaderTopLine.defaultProps = {
  className: ''
}

export default HeaderTopLine
