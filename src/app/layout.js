import { Gabarito } from "next/font/google";
import NavBar from "../components/Utilities/NavBar";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "ZAnime List",
  description: "Unknown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
