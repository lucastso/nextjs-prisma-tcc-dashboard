'use client'

import { api } from '@/lib/axios'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddButton = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleAddProductSubmit = async (event: any) => {
    event.preventDefault()

    const data = {
      title: String(event.target.title.value),
      description: String(event.target.description.value),
      price: Number(event.target.price.value),
      stock: Number(event.target.stock.value),
      image: String(event.target.image.value),
      category: String(event.target.category.value),
    }

    try {
      await api.post('/products', data)
      setOpen(false)
      router.refresh()
    } catch (error) {
    } finally {
      setOpen(false)
    }
  }

  return (
    <div className="relative max-h-screen max-w-screen">
      <Dialog.Root open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <Dialog.Trigger className="px-4 py-2 bg-blue-400 rounded-md text-white">
          Adicionar
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/25 fixed inset-0" />
          <Dialog.Content className="fixed lg:top-1/2 xs:top-0 lg:left-1/2 xs:left-0 xs:right-6 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 h-auto lg:w-1/3 xs:w-screen max-h-auto lg:max-w-1/3 bg-white rounded-md p-4 flex flex-col gap-4 justify-between border border-zinc-200">
            <div className="flex flex-col gap-4">
              <Dialog.Title className="text-xl font-semibold">
                Adicionar item
              </Dialog.Title>
              <div className="flex flex-col gap-2">
                <Dialog.Description>
                  Insira as informações para adicionar um novo produto
                </Dialog.Description>
              </div>
            </div>
            <form
              onSubmit={handleAddProductSubmit}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Título:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="description">Descrição:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="price">Preço:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="stock">Quantidade:</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="category">Categoria:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="image">Link da imagem:</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
              </div>
              <div className="flex self-end gap-2">
                <Dialog.Close className="px-4 py-2 bg-red-400 rounded-md text-white">
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-400 rounded-md text-white"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default AddButton
