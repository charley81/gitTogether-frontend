import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function EventPage() {
  const router = useRouter()

  return (
    <Layout page={router.query.slug}>
      <h1>My Event {router.query.slug}</h1>
    </Layout>
  )
}
