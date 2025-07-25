import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://github.com/RaghavD-hub" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/raghav-dobriyal-8a996422a" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.google.com/" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-codepen"></i>
      </a>
    </div>
  )
}