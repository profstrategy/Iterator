import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/reusables/navbar";
import Footer from "@/components/reusables/footer";
import { GlobalStore } from "@/provider/store-provider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Itinera",
  description: "Platfotrm for booking your dream bus for tours",
  icons: {
    icon: '/images/brand.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icons as string} className="w-52 h-52 rounded-full" />
      </head>
      <body
        className={`${poppins.className} ${poppins.className} max-w-screen-2xl mx-auto suppressHydrationWarning={true}`}
      >
        <GlobalStore>
          <Navbar />
          {children}
          <Footer />
        </GlobalStore>
      </body>
    </html>
  );
}
