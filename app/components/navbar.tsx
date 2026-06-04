'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'

type NavItem = {
  href: string
  label: string
  side: 'left' | 'right'
}


export default function Navbar() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { href: '/', label: 'Home', side: 'left' },
    { href: '/task', label: 'Übungsaufgaben', side: 'left' },
    { href: '/analytics', label: 'Analytics', side: 'left' },
    { href: '/login', label: 'Login', side: 'right' },
    { href: '/register', label: 'Register', side: 'right' },
  ]

  const leftItems = navItems.filter(i => i.side === 'left')
  const rightItems = navItems.filter(i => i.side === 'right')

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          {leftItems.map(item => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link href={item.href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
                  {item.label}
                </Link>
              </li>
            )
          })}

          <div className={styles.rightGroup}>
            {rightItems.map(item => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </div>
        </ul>
      </nav>
    </header>
  )
}




