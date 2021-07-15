import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/event-module.module.scss'

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image ? evt.image : '/images/sample-images/default-image.jpg'
          }
          alt={`Event Image ${evt.title}`}
          height="100"
          width="170"
        />
      </div>

      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.title}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Info</a>
        </Link>
      </div>
    </div>
  )
}
