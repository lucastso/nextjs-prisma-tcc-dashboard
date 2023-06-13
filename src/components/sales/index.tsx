import { ProductProps } from "@/types/product_props";
import { SalesProps } from "@/types/sales_props";
import React from "react";

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
    )
    .reduce((total, element) => total + element.price, 0);

  const soldThisMonth = sales.filter(
    (sale) => sale.createdAt.slice(0, 7) === new Date().toISOString().slice(0, 7)
  ).reduce((total, sale) => total + sale.price, 0);

  const totalSold = sales.reduce((total, sale) => total + sale.price, 0);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl font-semibold">Vendas</span>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 border rounded-md border-zinc-200">
          <span>Hoje (dia {currentDay})</span>
          <span>{soldToday}</span>
        </div>
        <div className="col-span-1 border rounded-md border-zinc-200">
          Nesse mês ({currentMonth})
          <span>
            {soldThisMonth}
          </span>
        </div>
        <div className="col-span-1 border rounded-md border-zinc-200">
          Total
          {totalSold}
        </div>
        <div className="col-span-1 border rounded-md border-zinc-200">
          Por categoria
        </div>
      </div>
    </div>
  );
};

export default Sales;
