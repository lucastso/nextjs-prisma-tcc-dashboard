import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductsList from "@/components/products_list";
import { api } from "@/lib/axios";
import { ProductProps } from "@/types/product_props";

export default async function Home() {
  const requestProducts = await api.get("/products");
  const products: ProductProps[] = requestProducts.data;

  return (
    <>
      <Navbar />
      <div className="mb-auto xs:p-6 lg:p-8 space-y-12">
        <ProductsList products={products} />
      </div>
      <Footer />
    </>
  );
}
