import { Timestamp } from "firebase/firestore"

export default class DevitEntity {
  id: string
  content: string
  attachedImageUrl: string
  createdAt: number
  likesCount: number
  sharedCount: number
  userId: string
  username: string
  userAvatarUrl: string

  constructor(
    id: string,
    content: string,
    attachedImageUrl: string,
    createdAt: Timestamp,
    likesCount: number,
    sharedCount: number,
    userId: string,
    username: string,
    userAvatarUrl: string
  ) {
    this.id = id
    this.content = content
    this.attachedImageUrl = attachedImageUrl
    this.createdAt = +createdAt.toDate()
    this.likesCount = likesCount
    this.sharedCount = sharedCount
    this.userId = userId
    this.username = username
    this.userAvatarUrl = userAvatarUrl
  }
}