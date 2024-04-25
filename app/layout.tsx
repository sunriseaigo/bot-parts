import type { Metadata } from "next";
import { Montserrat, Poppins, Quicksand } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Navbar/NavAndSidebar";
// import Footer from "@/components/Footer";
import Wrapper from "./Wrapper";

const montserrat = Montserrat({ subsets: ["latin"] });
// const quicksand = Quicksand({ subsets: ['latin'] })
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: '100'
// })
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bot Parts",
  description: "Bot Parts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        {/* <body className={`${montserrat.className} ${quicksand.className} ${poppins.className}`}> */}
        {/* <Header/>
          {children}
          {router.pathname !== '/contact' &&
          <Footer/>} */}
        <Wrapper passingProp={children} />
      </body>
    </html>
  );
}
