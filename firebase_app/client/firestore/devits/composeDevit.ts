import { addDoc, collection } from "firebase/firestore"

import { firestore } from "firebase_app/client/init"
import CreateDevitDTO from "../createDevitDTO"

export async function composeDevit(devit: CreateDevitDTO) {
  const devitPlaintObject = Object.assign({}, devit)
  const collectionReference = collection(firestore, 'devits')
  const createdDevit = await addDoc(collectionReference, devitPlaintObject)
  return createdDevit
}