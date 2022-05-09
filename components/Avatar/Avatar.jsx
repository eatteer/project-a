import Image from 'next/image'

import styles from 'components/Avatar/Avatar.module.css'

export default function Avatar({ src, alt, text, ...props }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={src}
          alt={alt}
          objectFit='cover'
          {...props}
        />
      </div>
      {text && <strong>{text}</strong>}
    </div>
  )
}