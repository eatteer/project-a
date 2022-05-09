import { ref, uploadBytes } from "firebase/storage"

import { storage } from "firebase_app/client/init"

export async function uploadImage(file: File) {
  const storageReference = ref(storage, `images/${file.name}`)
  const uploadResult = uploadBytes(storageReference, file)
  return uploadResult
}