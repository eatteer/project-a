import Avatar from 'components/Avatar/Avatar'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useTimeAgo from 'hooks/useTimeAgo'

import DevitEntity from 'entities/DevitEntity'

import styles from 'components/Devit/Devit.module.css'

interface Props {
  devit: DevitEntity
}

export default function Devit({ devit }: Props) {
  const router = useRouter()

  const timeAgo = useTimeAgo(devit.createdAt)

  const onClickDevit = (event) => {
    event.preventDefault()
    router.push(`/status/${devit.id}`)
  }

  return (
    <>
      <article className={styles.container} onClick={onClickDevit}>
        <Avatar
          text={null}
          src={devit.userAvatarUrl}
          alt={devit.username}
          layout={'fixed'}
          width={49}
          height={49}
        />
        <section className={styles.content}>
          <header>
            <strong>{devit.username}</strong>
            <span> • </span>
            <Link href={`/status/${devit.id}`}>
              <a>
                <time>{timeAgo}</time>
              </a>
            </Link>
          </header>
          <p>{devit.content}</p>
          {devit.attachedImageUrl && (
            <Image
              className={styles.image}
              src={devit.attachedImageUrl}
              alt='Devit image'
              layout='responsive'
              width={200}
              height={100}
            />
          )}
        </section>
      </article>
    </>
  )
}
