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
    template: "%s - Pocket",
    default: "Pocket - Invest at the perfect time.",
  },
  description: "By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={clsx("bg-gray-50 antialiased", inter.variable)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
