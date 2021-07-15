import Layout from '@/components/layout'
import EventItem from '@/components/event-item'
import { API_URL } from '@/config/index'
import styles from '@/styles/index.module.scss'
import Link from 'next/link'

export default function Home({ events }) {
  return (
    <Layout page="Home">
      <h3 className={styles.title}>Featured gitTogethers</h3>
      {/* check the length of events and if not events show this message */}
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => {
        return <EventItem key={evt.id} evt={evt} />
      })}
      {/* check if there are events and if so show button to all events */}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn">All Events</a>
        </Link>
      )}
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
    props: { events: events.slice(0, 3) },
    // uses incremental static regeneration on a per page basis
    // Nextjs will attempt to re-generate the page when a request comes in at most once every 1 second
    revalidate: 1, // in seconds
  }
}
