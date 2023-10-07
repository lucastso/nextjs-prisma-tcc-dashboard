"use client";

import { ProductProps } from "@/types/product_props";
import AddButton from "../add_button";
import RemoveButton from "../remove_button";
import { useState } from "react";
import EditButton from "../edit_button";

type ProductsListProps = {
  products: ProductProps[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  const [visibleProducts, setVisibleProducts] = useState(15);

  const handleShowMoreClick = () => {
    if (visibleProducts < products.length) {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
    }
  };

  const handleShowLessClick = () => {
    if (visibleProducts >= 15) {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts - 10);
    }
  };

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const lowQuantityProducts = products.filter(
    (product) => product.quantity <= 5
  ).length;

  return (
    <div className="space-y-12">
      {lowQuantityProducts != 0 ? (
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-red-400">
            Atenção, você tem produtos ficando sem estoque! (
            {lowQuantityProducts})
          </span>
          <table className="text-left">
            <tbody>
              <tr className="bg-red-50 text-red-400">
                <th className="p-4 border border-red-100">Nome</th>
                <th className="p-4 border border-red-100">Quantidade</th>
                <th className="p-4 border border-red-100">Preço</th>
                <th className="p-4 border border-red-100">Categoria</th>
                <th className="p-4 border border-red-100">Adicionado em</th>
              </tr>
              {products
                .filter((product) => product.quantity <= 5)
                .map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="even:bg-red-100/25 text-red-400"
                    >
                      <td className="h-14 px-2">{item.title}</td>
                      <td className="h-14 px-2">{item.quantity}</td>
                      <td className="h-14 px-2">
                        R$ <strong>{formatToPrice(item.price)}</strong>
                      </td>
                      <td className="h-14 px-2">{item.category}</td>
                      <td className="h-14 px-2 flex items-center justify-between">
                        {item.createdAt.replace("T", "/").slice(0, -5)}
                        <div className="flex items-center gap-2">
                          <EditButton product={item} />
                          <RemoveButton id={item.id} title={item.title} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">
            Produtos ({products.length})
          </span>
          <div className="flex items-center gap-8">
            <div
              className={`items-center gap-8 ${
                products.length > 15 ? "flex" : "hidden"
              }`}
            >
              <button onClick={handleShowMoreClick}>Mostrar mais</button>
              <button onClick={handleShowLessClick}>Mostrar menos</button>
            </div>
            <AddButton />
          </div>
        </div>
        <table className="text-left">
          <tbody>
            <tr>
              <th className="p-4 border border-zinc-200">Nome</th>
              <th className="p-4 border border-zinc-200">Quantidade</th>
              <th className="p-4 border border-zinc-200">Preço</th>
              <th className="p-4 border border-zinc-200">Categoria</th>
              <th className="p-4 border border-zinc-200">Adicionado em</th>
            </tr>
            {products
              .slice(0, visibleProducts)
              .filter((product) => product.quantity > 5)
              .map((item) => {
                return (
                  <tr key={item.id} className="even:bg-zinc-100">
                    <td className="h-14 px-2">{item.title}</td>
                    <td className="h-14 px-2">{item.quantity}</td>
                    <td className="h-14 px-2">
                      R$ <strong>{formatToPrice(item.price)}</strong>
                    </td>
                    <td className="h-14 px-2">{item.category}</td>
                    <td className="h-14 px-2 flex items-center justify-between">
                      {item.createdAt.replace("T", "/").slice(0, -5)}
                      <div className="flex items-center gap-2">
                        <EditButton product={item} />
                        <RemoveButton id={item.id} title={item.title} />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
