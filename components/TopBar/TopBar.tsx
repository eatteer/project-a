import styles from 'components/TopBar/TopBar.module.css'

import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

type Props = {
  title: string
  canBack?: boolean
}

export default function TopBar({ title, canBack }: Props) {
  const router = useRouter()

  return (
    <header className={styles.header}>
      {canBack && (
        <button className={styles.backButton} onClick={() => router.back()}>
          <BiArrowBack size={24} />
        </button>
      )}
      <h2 className={styles.title}>{title}</h2>
    </header>
  )
}
