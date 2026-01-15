import type { Metadata } from "next";
import { Sahitya } from "next/font/google";
import "./globals.css";

const sahitya = Sahitya({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sahitya",
});

export const metadata: Metadata = {
  title: "Yu Wati Nyi",
  description: "Personal site",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sahitya.variable}>
        {children}
      </body>
    </html>
  );
}
