import Layout from '@/components/layout'
import { API_URL } from '@/config/index'

export default function EventPage({ evt }) {
  console.log(evt)
  return (
    <Layout>
      <h1>My Event {evt.title}</h1>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()
  return {
    props: {
      evt: events[0],
    },
  }
}
