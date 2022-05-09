import { NextApiRequest, NextApiResponse } from "next";

import { firestore } from 'firebase_app/admin/init'

export default async function getDevit(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  const id = query['id'] as string

  const collectionReference = firestore.collection('devits')
  const documentReference = collectionReference.doc(id)
  const documentSnapshot = await documentReference.get()
  const documentData = documentSnapshot.data()
  const { createdAt } = documentData

  const devit = {
    ...documentData,
    /* The id of the document is not included in DocumentData,
    that's why it is necessary to extract it from DocumentSnapshot */
    id: documentSnapshot.id,
    createdAt: +createdAt.toDate(),
  }

  res.json(devit)
}