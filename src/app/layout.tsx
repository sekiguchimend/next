import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "テレチャ",
  description: "テレビ見ながら皆の反応を見よう！",
  icons: {
    icon: [
      { url: "/telecha.jpeg", sizes: "any" },
      { url: "/telecha.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/telecha.jpeg" },
    ],
  },
  openGraph: {
    title: "テレチャ",
    description: "テレビ見ながら皆の反応を見よう！",
    url: "https://next-rho-rust.vercel.app/",
    siteName: "テレチャ",
    images: [
      {
        url: "https://next-rho-rust.vercel.app/telecha.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "テレチャ",
    description: "テレビ見ながら皆の反応を見よう！",
    site: "@SekiguchiS39523",
    images: ["https://next-rho-rust.vercel.app/telecha.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}