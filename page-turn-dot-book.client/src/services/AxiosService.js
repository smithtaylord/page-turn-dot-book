import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const apiNYT = Axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/',
  timeout: '5000',
  params: { 'api-key': 'o4y8ftZIRFWxEWjmHGemUKANmCPnlngA' }
})