import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Transcriber",
  description: "Transcribe videos online for free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="w-full bg-[#f6f3f3]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
