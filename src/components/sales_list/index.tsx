'use client'

import { SalesProps } from '@/types/sales_props'
import { useState } from 'react'

type SalesListProps = {
  sales: SalesProps[]
}

const SalesList = ({ sales }: SalesListProps) => {
  const [visibleSales, setVisibleSales] = useState(10)

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const handleShowMoreClick = () => {
    setVisibleSales((prevVisibleSales) => prevVisibleSales + 10)
  }

  const handleShowLessClick = () => {
    setVisibleSales((prevVisibleSales) => prevVisibleSales - 10)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">
          Listagem de vendas ({sales.length})
        </span>
        <div
          className={`items-center gap-8 ${
            sales.length > 10 ? 'flex' : 'hidden'
          }`}
        >
          <button onClick={handleShowMoreClick}>Mostrar mais</button>
          <button onClick={handleShowLessClick}>Mostrar menos</button>
        </div>
      </div>

      {sales.length > 0 ? (
        <table className="text-left xs:w-[40rem] md:w-full overflow-x-scroll">
          <tbody>
            <tr>
              <th className="p-4 border border-zinc-200">Nome</th>
              <th className="p-4 border border-zinc-200">Preço</th>
              <th className="p-4 border border-zinc-200">Categoria</th>
              <th className="p-4 border border-zinc-200">Adicionado em</th>
            </tr>
            {sales.slice(0, visibleSales).map((item) => {
              return (
                <tr key={item.id} className="even:bg-zinc-100">
                  <td className="h-14 px-2">{item.title}</td>
                  <td className="h-14 px-2">
                    R$ <strong>{formatToPrice(item.price)}</strong>
                  </td>
                  <td className="h-14 px-2">{item.category}</td>
                  <td className="h-14 px-2 flex items-center justify-between">
                    {item.createdAt.replace('T', '/').slice(0, -5)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center my-4 text-red-400 text-xl">
          <strong>Sem vendas :(</strong>
        </div>
      )}
    </>
  )
}

export default SalesList
