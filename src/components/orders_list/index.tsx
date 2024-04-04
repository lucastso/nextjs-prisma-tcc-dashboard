'use client'

import { api } from '@/lib/axios'
import { OrdersProps } from '@/types/orders_props'
import { useRouter } from 'next/navigation'

type OrdersListProps = {
  orders: OrdersProps[]
}

const OrdersList = ({ orders }: OrdersListProps) => {
  const router = useRouter()

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const handleOrderClick = async (id: string) => {
    try {
      await api.post(`/order/${id}`)
      router.refresh()
    } catch (error) {}
  }

  const doneOrders = orders.filter((order) => order.done == true).length

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
                <th className="p-4 border border-red-100">Total</th>
                <th className="p-4 border border-red-100">Endereço</th>
                <th className="p-4 border border-red-100">Criado em</th>
              </tr>
              {orders.map((item) => {
                const address = `${item.address}, ${item.neighborhood}. ${item.city} - ${item.state}, ${item.cep}`
                return (
                  <tr key={item.id} className="even:bg-red-100/25 text-red-400">
                    <td className="h-14 px-4">{item.name}</td>
                    <td className="h-14 px-4">{item.total}</td>
                    <td className="h-14 px-4">
                      R$ <strong>{formatToPrice(0)}</strong>
                    </td>
                    <td className="h-14 px-4" title={address}>
                      {address.length > 50
                        ? address.slice(0, 50) + '...'
                        : address}
                    </td>
                    <td className="h-14 px-4 flex items-center justify-between">
                      {item.createdAt.replace('T', '/').slice(0, -5)}
                      <button
                        type="submit"
                        onClick={() => handleOrderClick(item.id)}
                        className="px-4 py-4 bg-blue-400 rounded-md text-white"
                      >
                        Enviar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-col gap-4">
        <span className="text-xl font-semibold">Pedidos ({orders.length})</span>

        {orders.length > 0 ? (
          <table className="text-left">
            <tbody>
              <tr>
                <th className="p-4 border border-zinc-100">Nome</th>
                <th className="p-4 border border-zinc-100">Endereço</th>
                <th className="p-4 border border-zinc-100">Criado em</th>
              </tr>
              {orders.map((item) => {
                const address = `${item.address}, ${item.neighborhood}. ${item.city} - ${item.state}, ${item.cep}`
                return (
                  <tr key={item.id} className="even:bg-zinc-100">
                    <td className="h-14 px-4">{item.name}</td>
                    <td className="h-14 px-4" title={address}>
                      {address.length > 50
                        ? address.slice(0, 50) + '...'
                        : address}
                    </td>
                    <td className="h-14 px-4 flex items-center justify-between">
                      {item.createdAt.replace('T', '/').slice(0, -5)}
                      <button
                        type="submit"
                        onClick={() => handleOrderClick(item.id)}
                        className="px-4 py-2 bg-blue-400 rounded-md text-white"
                      >
                        Enviar
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center my-4 text-red-400 text-xl">
            <strong>Sem pedidos :(</strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrdersList
