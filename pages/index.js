import Layout from '@/components/layout'
import { API_URL } from '@/config/index'

export default function Home({ events }) {
  console.log(events)
  return (
    <Layout page="Home">
      <h1>Upcoming gitTogethers</h1>
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
