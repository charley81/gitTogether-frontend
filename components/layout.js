import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from '../styles/layout.module.scss'

export default function Layout({ keywords, description, page, children }) {
  return (
    <div>
      <Head>
        <title>gitTogether | {page} Page</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'gitTogether | Keep up to date with your neighborhood events',
  description: 'Welcome to gitTogether your neighborhood event page',
  keywords: 'git togethers, neighborhood events, neighborhood event planner',
}
