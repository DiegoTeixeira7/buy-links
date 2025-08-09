'use server'

import axios from 'axios'
import { env } from '@/utils/env'

const apiInstance = axios.create({
  baseURL: env('NEXT_PUBLIC_API_URL'),
  headers: {
    'Content-Type': 'application/json',
  },
})

export { apiInstance }
