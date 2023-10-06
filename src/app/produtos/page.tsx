import AddButton from "@/components/add_button";
import ProductsList from "@/components/products_list";
import { api } from "@/lib/axios";
import { ProductProps } from "@/types/product_props";

export default async function Home() {
  const requestProducts = await api.get("/products");
  const products: ProductProps[] = requestProducts.data;

  return (
    <main className="mb-auto p-8 space-y-12">
      <ProductsList products={products} />
    </main>
  );
}
