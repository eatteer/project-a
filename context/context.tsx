import { createContext, useEffect, useState } from 'react'

import { User as UserAccount } from 'firebase/auth'

import { auth } from 'firebase_app/client/init'

import UserEntity from 'entities/UserEntity'

interface AppContext {
  user: UserEntity
}

export const Context = createContext<AppContext>(null)

export function ContextProvider({ children }) {
  console.log('Rendering ContextProvider') /* DEBUGGING */

  const [user, setUser] = useState<UserEntity>(null)

  const data: AppContext = {
    user,
  }

  /* User does not exists until ContexProvider component is mounted,
  this mean all of its child components are mounted */
  useEffect(() => {
    console.log(
      'ContextProvider -> useEffect of component did mount'
    ) /* DEBUGGING */
    console.log(
      'ContextProvider -> useEffect of component did mount -> Adding onAuthstateChanged observer'
    ) /* DEBUGGING */
    auth.onAuthStateChanged((userAccount: UserAccount) => {
      setUser(() => {
        console.log(
          'onAuthstateChanged observer -> Dispatch setUser'
        ) /* DEBUGGING */
        /* Map user account provided by Firebase Auth to User object */
        if (userAccount) {
          const { uid, displayName, photoURL, email } = userAccount
          const user = new UserEntity(uid, displayName, photoURL, email)
          return user
        }
        return null
      })
    })
  }, [])

  return <Context.Provider value={data}>{children}</Context.Provider>
}
