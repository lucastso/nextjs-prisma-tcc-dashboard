import { api } from "@/lib/axios";
import { OrdersProps } from "@/types/orders_props";
import Link from "next/link";

export default async function PedidosNavItem() {
  const requestOrders = await api.get("/orders");
  const orders: OrdersProps[] = requestOrders.data;

  return (
    <Link href="/pedidos" className="relative">
      <span>Pedidos</span>
      {orders.length != 0 ? (
        <div className="text-white rounded-full flex items-center justify-center text-xs absolute top-0 right-0 h-4 w-4 bg-red-500 translate-x-2 -translate-y-1">
          {orders.length}
        </div>
      ) : (
        <></>
      )}
    </Link>
  );
}
