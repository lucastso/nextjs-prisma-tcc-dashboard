"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";

const RemoveButton = ({ id, title }: { id: string; title: string }) => {
  const router = useRouter();

  const handleRemoveButtonClick = async () => {
    if (confirm(`Deseja remover o produto ${title}? ID: ${id}`) == true) {
      await api.delete(`/products/${id}`);
      alert("Produto removido!");
      router.refresh();
    } else {
      alert("Ação cancelada!");
    }
  };

  return (
    <button
      className="px-4 py-2 bg-red-400 rounded-md text-white"
      onClick={handleRemoveButtonClick}
      key={id}
    >
      Remover
    </button>
  );
};

export default RemoveButton;
