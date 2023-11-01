import { Navbar, Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampMania",
  description: "A responsive landing page for a camp website built with Next.js 13.5 and styled with Tailwind CSS. Explore the great outdoors online!",
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
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
