import { useContext, useEffect } from "react"

import { useRouter } from "next/router"

import { Context } from 'context/context'

export default function useUser() {
  console.log('Running useUser')

  const { user } = useContext(Context)

  const router = useRouter()

  useEffect(() => {
    /* If redirectTo param was passed and user is null, then redirect to given route */
    if (!user) {
      router.replace('/')
    }
  }, [user, router])

  return { user }
}