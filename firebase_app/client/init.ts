import { FirebaseOptions, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyBRR2oe7kI1PBeK_qzpqYPhOYSua3SSEls',
  authDomain: 'project-a-38a73.firebaseapp.com',
  projectId: 'project-a-38a73',
  storageBucket: 'project-a-38a73.appspot.com',
  messagingSenderId: '604538903096',
  appId: '1:604538903096:web:8d853091a3d6d0182f24cd',
  measurementId: 'G-CML8DCVRMG'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)