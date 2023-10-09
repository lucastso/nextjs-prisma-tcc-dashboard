import "./globals.css";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

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
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          localization={ptBR}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
