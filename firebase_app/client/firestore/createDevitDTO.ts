import { Timestamp } from "firebase/firestore"

export default class CreateDevitDTO {
  content: string
  attachedImageUrl: string
  createdAt: Timestamp
  likesCount: number
  sharedCount: number
  userId: string
  username: string
  userAvatarUrl: string

  constructor(
    content: string,
    attachedImageUrl: string,
    userId: string,
    username: string,
    userAvatarUrl: string
  ) {
    this.content = content
    this.attachedImageUrl = attachedImageUrl
    this.createdAt = Timestamp.fromDate(new Date)
    this.likesCount = 0
    this.sharedCount = 0
    this.userId = userId
    this.username = username
    this.userAvatarUrl = userAvatarUrl
  }
}