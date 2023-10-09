import { OrdersProps } from "./orders_props";
import { ProductProps } from "./product_props";

export interface SalesProps {
  id: string;
  title: string;
  category: string;
  price: number;
  createdAt: string;
  productId: string;
  order: OrdersProps;
  product: ProductProps;
}
