import { client } from '@/store/api/utils/axios'

class Transport {
  async get(url: string, params = {}) {
    return this.to(client.get(url, { params }))
  }

  async post(url: string, params = {}) {
    return this.to(client.post(url, params))
  }

  async put(url: string, params = {}) {
    return this.to(client.put(url, params))
  }

  async patch(url: string, params = {}) {
    return this.to(client.patch(url, params))
  }

  async delete(url: string, params = {}) {
    return this.to(client.delete(url, { params }))
  }

  to(promise: any) {
    return promise
      .then((data: any) => {
        return [null, data]
      })
      .catch((error: any) => {
        return [error, null]
      })
  }
}

const transport = new Transport()
export default transport
