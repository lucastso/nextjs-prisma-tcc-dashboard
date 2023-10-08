import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sales from "@/components/sales";
import { api } from "@/lib/axios";
import { SalesProps } from "@/types/sales_props";

export default async function Home() {
  const requestSales = await api.get("/sales");
  const sales: SalesProps[] = requestSales.data;

  return (
    <>
      <Navbar />
      <div className="mb-auto xs:p-6 lg:p-8">
        <Sales sales={sales} />
      </div>
      <Footer />
    </>
  );
}
