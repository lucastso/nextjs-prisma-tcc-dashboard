import AddButton from "@/components/add_button";
import ProductsList from "@/components/products_list";
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

      <ProductsList products={products} />
    </main>
  );
}
