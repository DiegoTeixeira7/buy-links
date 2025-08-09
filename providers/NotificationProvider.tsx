import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

interface ToastProviderProps {
  children: React.ReactNode
}

export default function NotificationProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer newestOnTop style={{ flexDirection: 'column' }} />
    </>
  )
}
