import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://personal-finance-db.onrender.com/'
})
