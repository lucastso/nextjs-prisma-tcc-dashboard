import { SalesProps } from './sales_props'

export interface OrdersProps {
  id: string
  name: string
  total: number
  email: string
  cep: string
  address: string
  neighborhood: string
  city: string
  state: string
  createdAt: string
  soldId: string
  done: boolean
  sold: SalesProps
}
