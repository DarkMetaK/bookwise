import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Bookwise",
  description: "Aplicação de avaliação de livros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} font-normal bg-gray-800 text-gray-100`}>{children}</body>
    </html>
  );
}
