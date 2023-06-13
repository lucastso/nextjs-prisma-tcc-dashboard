import Image from "next/image";
import logo from "../../assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const logged = true;

  return (
    <nav className="w-screen py-6 bg-zinc-50 border-b border-zinc-200 px-8 flex items-center justify-between">
      <Image src={logo} alt="Paracord logo" className="w-32" />

      {logged ? (
        <div className="flex items-center gap-8">
          <Link href="/profile">Lucas</Link>
          <button className="px-4 py-2 bg-red-400 rounded-md text-white">
            Log out
          </button>
        </div>
      ) : (
        <button className="px-4 py-2 bg-blue-400 rounded-md text-white">
          Log in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
