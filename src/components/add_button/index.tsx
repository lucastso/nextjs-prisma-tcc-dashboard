"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";

const AddButton = () => {
    const router = useRouter()
  const promptAsync = (message: string) => {
    return new Promise((resolve) => {
      const value = prompt(message, "");
      resolve(value);
    });
  };

  const handleAddButtonClick = async () => {
    const title = await promptAsync("Nome:");
    const desc = await promptAsync("Descrição:");
    const priceString  = await promptAsync("Preço:");
    const category = await promptAsync("Categoria:");
    const image = await promptAsync("Link da imagem:");

    const price = typeof priceString === "string" ? parseFloat(priceString) : 0;

    if (!title || !desc || !category || !image || !priceString) {
      alert("Todos os campos devem ser preenchidos!");
    } else if (typeof price !== "number") {
      alert("O preço deve ser apenas em números, sem pontuação!");
    } else {
      try {
        await api.post("/products", {
          title,
          description: desc,
          price,
          image,
          category,
        });
    
        router.refresh();
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-400 rounded-md text-white"
      onClick={handleAddButtonClick}
    >
      Adicionar
    </button>
  );
};

export default AddButton;
