"use client";

import { OrdersProps } from "@/types/orders_props";

type OrdersListProps = {
  orders: OrdersProps[];
};

const OrdersList = ({ orders }: OrdersListProps) => {
  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const doneOrders = orders.filter((order) => order.done == true).length;

  return (
    <div className="space-y-12">
      {doneOrders != 0 ? (
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-red-400">
            Atenção, alguns produtos estão ficando sem estoque! ({doneOrders})
          </span>
          <table className="text-left">
            <tbody>
              <tr className="bg-red-50 text-red-400">
                <th className="p-4 border border-red-100">Nome</th>
                <th className="p-4 border border-red-100">Quantidade</th>
                <th className="p-4 border border-red-100">Preço</th>
                <th className="p-4 border border-red-100">Categoria</th>
                <th className="p-4 border border-red-100">Adicionado em</th>
              </tr>
              {orders.map((item) => {
                return (
                  <tr key={item.id} className="even:bg-red-100/25 text-red-400">
                    <td className="h-14 px-2">{item.name}</td>
                    <td className="h-14 px-2">{item.name}</td>
                    <td className="h-14 px-2">
                      R$ <strong>{formatToPrice(0)}</strong>
                    </td>
                    <td className="h-14 px-2">{item.name}</td>
                    <td className="h-14 px-2 flex items-center justify-between">
                      {item.createdAt.replace("T", "/").slice(0, -5)}
                      <div className="flex items-center gap-2">
                        botão feito order
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-col gap-4">
        <span className="text-xl font-semibold">Pedidos ({orders.length})</span>

        <table className="text-left">
          <tbody>
            <tr>
              <th className="p-4 border border-zinc-200">Nome</th>
              <th className="p-4 border border-zinc-200">Quantidade</th>
              <th className="p-4 border border-zinc-200">Preço</th>
              <th className="p-4 border border-zinc-200">Categoria</th>
              <th className="p-4 border border-zinc-200">Adicionado em</th>
            </tr>
            {orders.map((item) => {
              return (
                <tr key={item.id} className="even:bg-zinc-100">
                  <td className="h-14 px-2">{item.name}</td>
                  <td className="h-14 px-2">{item.name}</td>
                  <td className="h-14 px-2">
                    R$ <strong>{formatToPrice(0)}</strong>
                  </td>
                  <td className="h-14 px-2">{item.name}</td>
                  <td className="h-14 px-2 flex items-center justify-between">
                    {item.createdAt.replace("T", "/").slice(0, -5)}
                    <div className="flex items-center gap-2">
                      botão feito order
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
