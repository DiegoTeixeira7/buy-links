import { ReactNode } from 'react'
import './styles.scss'

type FieldType = {
  children: ReactNode
  extraClass?: string
}

export const Field = ({ children, extraClass }: FieldType) => {
  return <div className={`field ${extraClass}`}>{children}</div>
}
