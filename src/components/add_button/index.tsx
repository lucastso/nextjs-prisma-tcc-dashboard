"use client";

import * as Dialog from '@radix-ui/react-dialog';

const AddButton = () => {
  return (
    <div className="relative max-h-screen">
      <Dialog.Root>
        <Dialog.Trigger
          className="px-4 py-2 bg-blue-400 rounded-md text-white"
        >
          Adicionar
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/25 fixed inset-0" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 w-1/3 max-h-2/3 max-w-1/3 bg-white rounded-md p-4 flex flex-col justify-between border border-zinc-200">
            <div className="flex flex-col gap-4">
              <Dialog.Title className="text-xl font-semibold">
                Adicionar item
              </Dialog.Title>
              <div className="flex flex-col gap-2">
                <Dialog.Description>Insira as informações para adicionar um novo produto</Dialog.Description>
              </div>
            </div>
            <form action="/api/form" method="post" className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="first">Título:</label>
                <input type="text" id="first" name="first" className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300" />
                <label htmlFor="last">Descrição:</label>
                <input type="text" id="last" name="last" className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300" />
                <label htmlFor="last">Preço:</label>
                <input type="text" id="last" name="last" className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300" />
                <label htmlFor="last">Categoria:</label>
                <input type="text" id="last" name="last" className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300" />
                <label htmlFor="last">Link da imagem:</label>
                <input type="text" id="last" name="last" className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300" />
              </div>
              <div className="flex self-end gap-2">
                <Dialog.Close
                  className="px-4 py-2 bg-red-400 rounded-md text-white"
                >
                  Cancelar
                </Dialog.Close>
                <Dialog.Close>
                  <button type="submit" className="px-4 py-2 bg-blue-400 rounded-md text-white">Adicionar</button>
                </Dialog.Close>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default AddButton;
