'use client'

import Link from 'next/link'
import styles from '../components/Navbar'
import { useState } from 'react'

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Hauptnavigation">
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="#home" className={`${styles.menuLink} ${styles.active}`} aria-current="page">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#news" className={styles.menuLink}>News</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#contact" className={styles.menuLink}>Contact</Link>
        </li>
        <li className={`${styles.menuItem} ${styles.right}`}>
          <Link href="#about" className={styles.menuLink}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
