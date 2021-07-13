import Link from 'next/link'
import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      {/* logo */}
      <div className={styles.logo}>
        <Link href="/">
          <a>
            git<span>Together</span>
          </a>
        </Link>
      </div>

      {/* nav */}
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a className={styles.navLink}>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
