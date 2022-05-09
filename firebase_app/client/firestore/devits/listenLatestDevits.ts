import { collection, orderBy, query, onSnapshot } from "firebase/firestore"

import { firestore } from "firebase_app/client/init"

import DevitEntity from "entities/DevitEntity"

export function listenLatestDevits(callback: Function) {
  const collectionReference = collection(firestore, 'devits')
  const orderDescQuery = orderBy('createdAt', 'desc')
  const _query = query(collectionReference, orderDescQuery)
  const unsuscribe = onSnapshot(_query, (querySnapshot) => {
    const queryDocumentSnapshots = querySnapshot.docs

    const devits = queryDocumentSnapshots.map((queryDocumentSnapshot) => {
      const documentData = queryDocumentSnapshot.data()
      const { id } = queryDocumentSnapshot
      const { content, attachedImageUrl, createdAt, likesCount, sharedCount, userId, username, userAvatarUrl } = documentData
      const devit = new DevitEntity(id, content, attachedImageUrl, createdAt, likesCount, sharedCount, userId, username, userAvatarUrl)
      return devit
    })

    callback(devits)
  })

  return unsuscribe


}