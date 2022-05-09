import Link from 'next/link'

import { BiSearch, BiHome, BiCommentAdd } from 'react-icons/bi'

import styles from 'components/BottomBar/BottomBar.module.css'

export default function BottomBar() {
  return (
    <nav className={styles.nav}>
      <Link href='/home'>
        <a>
          <BiHome style={{ color: '#09f' }} size={24} />
        </a>
      </Link>
      <Link href='/home'>
        <a>
          <BiSearch style={{ color: '#09f' }} size={24} />
        </a>
      </Link>
      <Link href='/compose/devit'>
        <a>
          <BiCommentAdd style={{ color: '#09f' }} size={24} />
        </a>
      </Link>
    </nav>
  )
}
