import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPLIFT- Uplift your education career with us", 
  description: "Uplift your education career with our empowering education services. Discover courses crafted to propel you towards greatness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
