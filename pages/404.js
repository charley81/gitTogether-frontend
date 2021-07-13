import Link from 'next/link'
import Layout from '@/components/layout'
import styles from '@/styles/error.module.scss'

export default function ErrorPage() {
  return (
    <Layout page="Error Page" description="Page Not Found">
      <section className={styles.error}>
        <h1>Page Not Found</h1>
        <Link href="/">
          <a className="btn">Back Home</a>
        </Link>
      </section>
    </Layout>
  )
}
