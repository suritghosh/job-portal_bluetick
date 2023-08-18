import React from 'react'
import styles from './Nav.module.css'
export default function Nav() {
  return (
    <div className={styles.nav}>
    <div className={styles.logoSearchContainer}>
        <span className={styles.head}>Hacker News Job Board</span>
        <input type='search' placeholder='Search'/>
    </div>
    <div className={styles.iconContainer}>
        <div className={styles.icon}>Home</div>
        <div className={styles.icon}>Jobs</div>
        <div className={styles.icon}>Profile</div>
        <div className={styles.icon}>Settings</div>
    </div>
</div>
  )
}
