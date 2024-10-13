import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";
import { Layout } from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "%s - Alternativa Open Source",
    default: "Alternativa Open Source - Livre-se das assinaturas recorrentes",
  },
  description: "Encontre a ferramenta de código aberto perfeita para suas necessidades. Lembre-se, para cada SaaS pago, há uma alternativa gratuita, de código aberto e self-hosted.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <body className={clsx("bg-gray-50 antialiased", inter.variable)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
