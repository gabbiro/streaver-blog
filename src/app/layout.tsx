import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "StreaverBlog",
  description: "Share your ideas on this amazing blog!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased m-auto grid min-h-screen grid-rows-[auto,1fr,auto]`}>
        <Navbar />
        <main>{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} StreaverBlog
        </footer>
      </body>
    </html>
  );
}
