import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const Button = props => {
  const { text, className, href, onClick } = props
  return (
    <Link
      href={href}
    >
      <a className={[styles.button, className].join(' ')} onClick={onClick}>
        {
          text
        }
      </a>
    </Link>
  )
}

export default Button