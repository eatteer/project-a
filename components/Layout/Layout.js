import styles from 'components/Layout/Layout.module.css'

export default function AppLayout({ children }) {
  return (
    <>
      {/* div -> To center content */}
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}