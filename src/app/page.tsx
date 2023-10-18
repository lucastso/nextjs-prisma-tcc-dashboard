import Image from "next/image";
import Link from "next/link";
import Hero from "../assets/hero.png";

export default function Home() {
  const entry = [{}, {}];

  return (
    <main className="grid xs:grid-cols-1 lg:grid-cols-2 min-h-screen min-w-screen overflow-hidden">
      <div className="col-span-1 flex items-center justify-center overflow-hidden">
        <div className="max-h-screen overflow-hidden">
          <Image
            src={Hero}
            alt=""
            width={512}
            height={512}
            className="w-full h-full object-cover object-center rounded-md"
            priority
          />
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center gap-24 overflow-hidden">
        <div className="flex flex-col items-center gap-4">
          <h1 className="xs:text-2xl lg:text-4xl">Dashboard Paracord</h1>
          <div className="xs:w-full lg:w-2/3 text-center">
            Tenha acesso a dados e relatórios de vendas e de estoque do
            e-commerce Paracord
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center w-full">
          <Link
            href="/vendas"
            className="w-1/3 py-3 rounded-md bg-fuchsia-400 font-bold text-center"
          >
            Acessar dashboard
          </Link>
          <Link
            href="/sign-up"
            className="w-1/3 py-3 rounded-md bg-zinc-200 text-center"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </main>
  );
}
