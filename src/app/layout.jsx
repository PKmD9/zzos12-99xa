import { Gabarito } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "ZAnime List",
  description: "Unknown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} antialiased bg-deep-charcoal-default`} suppressHydrationWarning={true}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
