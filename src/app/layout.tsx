import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { commonMetadata } from "@/constants/metadata";



export const metadata: Metadata = commonMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={"font-Nunito bg-kanzoto-noise "}>
        <div className="bg-gradient-to-t from-kanzoto-blue">
          {children}
        </div>
      </body>
    </html>
  );
}
