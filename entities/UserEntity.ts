export default class UserEntity {
  id: string
  username: string
  avatarUrl: string
  email: string

  constructor(userId: string, username: string, avatarUrl: string, email: string) {
    this.id = userId
    this.username = username
    this.avatarUrl = avatarUrl
    this.email = email
  }
}