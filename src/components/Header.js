import React from 'react'
import styles from './Header.module.css'

// This is a placeholder for the Header component
// You can add your header content here, such as a logo, navigation links, etc.

function Header() {
  return (
   <header className={styles.header}>
    <h1 className={styles.headerText}>RAGHAV DOBRIYAL</h1>
    <div className={styles.navItems}>
      <a href='#about-me' className={styles.anchor}>
        <i className={`fa-solid fa-user-astronaut ${styles.icons}`}></i>
      </a>
      <a href='#experience' className={styles.anchor}>
        <i className={`fa-solid fa-medal ${styles.icons}`}></i>
      </a>
      <a href='#projects' className={styles.anchor}>
        <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
      </a>
    </div>
   </header> 
  )
}

export default Header
