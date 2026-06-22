import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Residencial Parque Vista Bárbara | Golden City Incorporação e Construção",
  description:
    "Casas com 2 dormitórios e quintal privativo em Sorocaba. Bairro planejado com infraestrutura completa, pronto para morar. Golden City Incorporação e Construção.",
  keywords: [
    "Parque Vista Bárbara",
    "Golden City",
    "casas Sorocaba",
    "bairro planejado",
    "casa própria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
