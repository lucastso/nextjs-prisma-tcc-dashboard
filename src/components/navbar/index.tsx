import Image from 'next/image'
import logo from '../../assets/logo.svg'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import PedidosNavItem from '../pedidos_nav_item'

const Navbar = () => {
  return (
    <nav className="w-screen xs:py-2 lg:py-6 xs:px-4 lg:px-8 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
      <div className="flex items-center xs:gap-4 lg:gap-8 xs:text-sm lg:text-base">
        <Image src={logo} alt="Paracord logo" className="xs:w-24 lg:w-32" />
        <PedidosNavItem />
        <Link href="/vendas">Vendas</Link>
        <Link href="/produtos">Produtos</Link>
      </div>

      <div className="flex items-center xs:gap-4 lg:gap-8 xs:text-sm lg:text-base">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}

export default Navbar
