import Layout from '@/components/layout'
import EventItem from '@/components/event-item'
import { API_URL } from '@/config/index'
import styles from '@/styles/index.module.scss'

export default function Home({ events }) {
  return (
    <Layout page="Home">
      <h3 className={styles.title}>Upcoming gitTogethers</h3>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => {
        return <EventItem key={evt.id} evt={evt} />
      })}
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events },
    // uses incremental static regeneration on a per page basis
    // Nextjs will attempt to re-generate the page when a request comes in at most once every 1 second
    revalidate: 1, // in seconds
  }
}
