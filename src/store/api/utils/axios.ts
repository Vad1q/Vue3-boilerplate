import axios from 'axios'

let apiUrl = import.meta.env.VITE_API_URL

const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { client }
