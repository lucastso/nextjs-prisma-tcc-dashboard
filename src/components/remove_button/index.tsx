'use client'

import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'

const RemoveButton = ({ id, title }: { id: string; title: string }) => {
  const router = useRouter()

  const handleRemoveButtonClick = async () => {
    await api.delete(`/products/${id}`)
    alert('Produto removido!')
    router.refresh()
  }

  return (
    <div className="relative max-h-screen">
      <Dialog.Root key={id}>
        <Dialog.Trigger className="px-4 py-2 bg-red-400 rounded-md text-white">
          Remover
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/25 fixed inset-0" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto w-1/3 max-h-auto max-w-1/3 bg-white rounded-md p-4 flex flex-col justify-between border border-zinc-200">
            <div className="flex flex-col gap-8">
              <Dialog.Title className="text-xl font-semibold">
                Excluir item
              </Dialog.Title>
              <div className="flex flex-col gap-2">
                <Dialog.Description>
                  Tem certeza que você deseja excluir o seguinte item?
                </Dialog.Description>
                <strong>Nome: {title}</strong>
                <strong>ID: {id}</strong>
              </div>
            </div>
            <div className="flex self-end gap-2">
              <Dialog.Close className="px-4 py-2 bg-blue-400 rounded-md text-white">
                Cancelar
              </Dialog.Close>
              <Dialog.Close
                className="px-4 py-2 bg-red-400 rounded-md text-white"
                onClick={handleRemoveButtonClick}
              >
                Remover
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default RemoveButton

/*


*/
