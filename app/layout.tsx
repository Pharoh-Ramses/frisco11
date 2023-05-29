import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import Footer from "./(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Frisco 11 Website",
  description: "Frisco 11 website with some AI functionality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
