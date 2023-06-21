import { SalesProps } from "@/types/sales_props";
import React from "react";
import SalesList from "../sales_list";

type SalesArrayProps = {
  sales: SalesProps[];
};

const Sales = ({ sales }: SalesArrayProps) => {
  const month = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const date = new Date();
  const currentMonth = month[date.getMonth()];
  const currentDay = date.getDate();

  const soldToday = sales
    .filter(
      (element) => element.createdAt.slice(8, 10) === currentDay.toString()
    ).reduce((total, element) => total + element.price, 0);

  const soldThisWeek = sales
    .filter((element) => {
      const saleDate = new Date(element.createdAt);
      const today = new Date();
      const daysAgo = today.getDate() - saleDate.getDate();
      return daysAgo <= 7 && saleDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    }).reduce((total, element) => total + element.price, 0);

  const soldThisMonth = sales.filter(
    (sale) => sale.createdAt.slice(0, 7) === new Date().toISOString().slice(0, 7)
  ).reduce((total, sale) => total + sale.price, 0);

  const totalSold = sales.reduce((total, sale) => total + sale.price, 0);

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl font-semibold">Vendas</span>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 border rounded-md border-zinc-200 flex flex-col gap-4 p-4">
          <span>Hoje (dia {currentDay})</span>
          <span>R$ <strong className="text-2xl">{formatToPrice(soldToday)}</strong></span>
        </div>
        <div className="col-span-1 border rounded-md border-zinc-200 flex flex-col gap-4 p-4">
          <span>Nessa semana</span>
          <span>R$ {" "}
            <strong className="text-2xl">{formatToPrice(soldThisWeek)}</strong>
          </span>
        </div>
        <div className="col-span-1 border rounded-md border-zinc-200 flex flex-col gap-4 p-4">
          <span>Nesse mês ({currentMonth})</span>
          <span>R$ {" "}
            <strong className="text-2xl">{formatToPrice(soldThisMonth)}</strong>
          </span>
        </div>
        <div className="col-span-1 border rounded-md border-zinc-200 flex flex-col gap-4 p-4">
          <span>Total</span>
          <span>R$ <strong className="text-2xl">{formatToPrice(totalSold)}</strong></span>
        </div>
      </div>

      <SalesList sales={sales} />
    </div>
  );
};

export default Sales;
