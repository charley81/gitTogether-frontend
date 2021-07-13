import Link from 'next/link'
import styles from '@/styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy;{new Date().getFullYear()} gitTogether. All Rights Reserved.</p>
      <p>
        <Link href="/about">
          <a className={styles.link}>About this project</a>
        </Link>
      </p>
    </footer>
  )
}
