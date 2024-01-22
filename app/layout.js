import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <div className="Body">

     
      <body  className={inter.className}>{children}</body> </div>
    </html>
  );
}
