import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrdersList from "@/components/orders_list";
import { api } from "@/lib/axios";
import { OrdersProps } from "@/types/orders_props";

export default async function Home() {
  const requestOrders = await api.get("/orders");
  const orders: OrdersProps[] = requestOrders.data;

  return (
    <>
      <Navbar />
      <div className="mb-auto xs:p-6 lg:p-8 space-y-12">
        <OrdersList orders={orders} />
      </div>
      <Footer />
    </>
  );
}
