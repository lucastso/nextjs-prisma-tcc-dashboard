'use client'

import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

const EditButton = ({ product }: { product: ProductProps }) => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    image: product.image,
    price: product.price,
    stock: product.stock,
  })
  const router = useRouter()

  const handleEditProductSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await api.put(`/products/${product.id}`, formData)
      alert('Produto alterado!')
      setOpen(false)
      router.refresh()
    } catch (error) {
      alert('Erro ao alterar produto. Tente novamente mais tarde!')
    } finally {
      setOpen(false)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="relative max-h-screen max-w-screen">
      <Dialog.Root open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <Dialog.Trigger className="px-4 py-2 bg-green-400 rounded-md text-white">
          Editar
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/25 fixed inset-0" />
          <Dialog.Content className="fixed lg:top-1/2 xs:top-0 lg:left-1/2 xs:left-0 xs:right-6 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 h-auto lg:w-1/3 xs:w-screen max-h-auto lg:max-w-1/3 bg-white rounded-md p-4 flex flex-col gap-4 justify-between border border-zinc-200">
            <div className="flex flex-col gap-4">
              <Dialog.Title className="text-xl font-semibold">
                Alterar item
              </Dialog.Title>
              <div className="flex flex-col gap-2">
                <Dialog.Description>
                  Insira as informações para alterar o produto: {product.title}
                </Dialog.Description>
              </div>
            </div>
            <form
              onSubmit={handleEditProductSubmit}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Título:</label>
                <input
                  value={formData.title}
                  onChange={handleChange}
                  type="text"
                  id="title"
                  name="title"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="description">Descrição:</label>
                <input
                  value={formData.description}
                  onChange={handleChange}
                  type="text"
                  id="description"
                  name="description"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="price">Preço:</label>
                <input
                  value={formData.price}
                  onChange={handleChange}
                  type="number"
                  id="price"
                  name="price"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="quantity">Quantidade:</label>
                <input
                  value={formData.stock}
                  onChange={handleChange}
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="bg-zinc-100 border border-zinc-200 rounded-md px-2 py-2 focus:outline-none focus:border-zinc-300"
                />
                <label htmlFor="image">Link da imagem:</label>
                <input
                  value={formData.image}
                  onChange={handleChange}
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
                  Alterar
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default EditButton
