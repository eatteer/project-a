
import * as firebase from 'firebase-admin'
import serviceAccount from 'firebase_app/admin/service_account/project-a-38a73-firebase-adminsdk-rb78d-2d0863c1c8.json'

export const app = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount as firebase.ServiceAccount)
});

export const firestore = firebase.firestore()
