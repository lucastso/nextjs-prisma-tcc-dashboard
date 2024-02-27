import { SalesProps } from './sales_props'

export interface ProductProps {
  id: string
  title: string
  description: string
  image: string
  stock: number
  category: string
  price: number
  createdAt: string
  sold: SalesProps
}
