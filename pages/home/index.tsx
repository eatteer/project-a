import { useState, useEffect } from 'react'

import Head from 'next/head'

import { Unsubscribe } from 'firebase/firestore'

import { listenLatestDevits } from 'firebase_app/client/firestore/devits/listenLatestDevits'

import useUser from 'hooks/useUser'

import DevitEntity from 'entities/DevitEntity'

import TopBar from 'components/TopBar/TopBar'
import BottomBar from 'components/BottomBar/BottomBar'
import Devit from 'components/Devit/Devit'

import styles from 'pages/home/index.module.css'

export default function HomePage() {
  const { user } = useUser()

  const [timeline, setTimeline] = useState<DevitEntity[]>([])

  /* DEBUGGING */
  if (timeline[0]) {
    console.log('Rendering HomePage with data')
  } else {
    console.log('Rendering blank HomePage')
  }
  /* DEBUGGING */

  /* Component did mount */
  useEffect(() => {
    console.log('HomePage -> useEffect of component did mount') /* DEBUGGING */
  }, [])

  /* This effect runs at leats once, that's why
  it is necessary to validate for running it or not */

  /* Component did update because user changed */
  useEffect(() => {
    console.log(
      'HomePage -> useEffect of component did update because of user'
    ) /* DEBUGGING */

    /* Fetch latest devits only if user exits (is not null) */
    let unsuscribe: Unsubscribe
    if (user) {
      unsuscribe = listenLatestDevits(setTimeline)
    }

    return () => {
      unsuscribe && unsuscribe()
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Home / Project A</title>
      </Head>
      <TopBar title='Home' />
      <section className={styles.timeline}>
        {timeline[0] &&
          timeline.map((devit) => <Devit key={devit.id} devit={devit} />)}
      </section>
      <BottomBar />
    </>
  )
}
