import { TypeOptions, toast } from 'react-toastify'

export function notify(message: string, type?: TypeOptions | undefined) {
  toast(message, { type })
}
