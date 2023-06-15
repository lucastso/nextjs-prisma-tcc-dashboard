import AddButton from "@/components/add_button";
import RemoveButton from "@/components/remove_button";
import Sales from "@/components/sales";
import { api } from "@/lib/axios";
import { ProductProps } from "@/types/product_props";
import { SalesProps } from "@/types/sales_props";

export default async function Home() {
  const requestProducts = await api.get("/products");
  const products: ProductProps[] = requestProducts.data;

  const requestSales = await api.get("/sales");
  const sales: SalesProps[] = requestSales.data;

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <main className="mb-auto p-8 space-y-12">
      <Sales sales={sales}/>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">
            Produtos ({products.length})
          </span>
          <AddButton />
        </div>
        <table className="text-left">
          <tbody>
            <tr>
              <th className="p-4 border border-zinc-200">Nome</th>
              <th className="p-4 border border-zinc-200">Preço</th>
              <th className="p-4 border border-zinc-200">Categoria</th>
              <th className="p-4 border border-zinc-200">Adicionado em</th>
            </tr>
            {products.map((item) => {
              return (
                <tr key={item.id} className="even:bg-zinc-100">
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">R$ <strong>{formatToPrice(item.price)}</strong></td>
                  <td className="p-2">{item.category}</td>
                  <td className="p-2 flex items-center justify-between">
                    {item.createdAt}
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-green-400 rounded-md text-white">
                        Editar
                      </button>
                      <RemoveButton id={item.id} title={item.title} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
