export interface UserDataInterface {
  firstName: string
  lastName: string
  age?: number | null
  phone?: string | null
}

export interface ObjectDataInterface {
  [key: string]: any
}
