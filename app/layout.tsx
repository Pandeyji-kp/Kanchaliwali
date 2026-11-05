import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanchali Wali | Rajasthani Heritage Fashion",
  description:
    "Discover traditional Rajasthani fashion and timeless Indian elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}