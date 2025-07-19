import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yu Wati Nyi",
  description: "Yu Wati Nyi's Portfolio - Computer Science and Economics Graduate",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
