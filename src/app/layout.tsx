import Navbar from "@/components/navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import Footer from "@/components/footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Paracord Dashboard",
  description: "Paracord Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${outfit.className} text-zinc-900 flex min-h-screen flex-col justify-between overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
