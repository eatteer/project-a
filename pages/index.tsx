import { useContext, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { signUpWithGithub } from 'firebase_app/client/auth'

import { Context } from 'context/context'

import Button from 'components/Button/Button'
import GitHub from 'components/icons/Github'
import Logo from 'components/Logo/Logo'

import styles from 'pages/index.module.css'

export default function IndexPage() {
  console.log('Rendering IndexPage')

  const { user } = useContext(Context)

  const router = useRouter()

  /* If authenticated, redirec to home page */
  useEffect(() => {
    user && router.replace('/home')
  }, [user, router])

  /* Authenticate */
  const onClick = async () => {
    try {
      /* Set (auth instance) user */
      await signUpWithGithub()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Project A</title>
      </Head>
      <section className={styles.container}>
        {<Logo width={120} height={120} />}
        <h1 className={styles.title}>Project A</h1>
        <h2 className={styles.description}>
          Talk about development
          <br />
          with developers
        </h2>
        {user === undefined && (
          <Image
            src='/spinner.gif'
            alt='Loading'
            width={40}
            height={40}
            objectFit='cover'
          />
        )}
        {user === null && (
          <Button onClick={onClick} disabled={false}>
            <GitHub width={24} height={24} fill='#ffffff' />
            Login with Github
          </Button>
        )}
        {user && (
          <strong className={styles.loading}>
            Signing in as {user.username}
          </strong>
        )}
      </section>
    </>
  )
}
