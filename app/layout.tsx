import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";

const GelasioFont = Gelasio({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gelasio",
});

export const metadata: Metadata = {
  title: "A day in the Times",
  description: "Created by Parker Hutcheson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GelasioFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
