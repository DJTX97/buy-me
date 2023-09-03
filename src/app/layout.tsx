import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";


export const metadata: Metadata = {
  title: "BuyMe",
  description: "Best place to buy your next PC",
  icons: {
    icon: "/assets/favicon/brand.png",
  }, //path to favicon
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

        <body>
          <Header />
          <div className="p-10 2xl:px-40 2xl:py-20 bg-slate-400">{children}</div>
          <Footer />
        </body>

    </html>
  );
}
