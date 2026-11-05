import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanchali Wali | The Art of Rajasthani Heritage",
  description:
    "Discover the beauty of traditional Rajasthani clothing, heritage craftsmanship and timeless Indian fashion.",
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