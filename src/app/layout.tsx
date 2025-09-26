import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growwe",
  description: "Growwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
