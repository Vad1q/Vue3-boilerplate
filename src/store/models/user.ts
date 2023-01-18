import type { UserDataInterface } from '@/store/interfaces/interfaces'

class User {
  id: number
  firstName: string
  lastName: string
  age?: number | null
  phone?: string | null

  constructor(data: UserDataInterface) {
    this.id = Date.now()
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.age = data.age
    this.phone = data.phone
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

export default User
