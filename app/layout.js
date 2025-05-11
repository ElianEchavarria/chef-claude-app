import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata = {
  title: "Chef Claude",
  description: "A web app that lets users input at least four ingredients they have on hand to instantly generate a recipe using those ingredients via an external API.",
  author: "Elian Echavarria"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
