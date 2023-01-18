import { defineStore } from 'pinia'
import User from '@/store/models/user'
import { sortBy } from 'lodash'
import type {
  UserDataInterface,
  ObjectDataInterface,
} from '@/store/interfaces/interfaces'
import { getUserItem } from '@/store/api/user'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
  }),
  getters: {
    orderedUsers: (state) => sortBy(state.users, 'fullName'),
  },
  actions: {
    addUser(data: UserDataInterface) {
      const user: User = new User(data)
      this.users.push(user)
    },
    async addRandomUser() {
      const [error, response] = await getUserItem()
      if (!error && response.status === 200) {
        const params = this.getUserDataFromResponse(response.data.results)
        this.addUser(params)
      } else {
        // Show alert
      }
    },
    getUserDataFromResponse(data: ObjectDataInterface): UserDataInterface {
      const params = {
        firstName: '',
        lastName: 'string',
        age: null,
        phone: null,
      }

      if (Array.isArray(data)) {
        data = data[0]
      }

      params.firstName = data.name.first
      params.lastName = data.name.last
      params.age = data.dob.age
      params.phone = data.phone

      return params
    },
    removeUser(id: number) {
      this.users = this.users.filter((user) => user.id !== id)
    },
  },
})
