import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {/* Google AdSenseスクリプト */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
          crossOrigin="anonymous"
        />

        {/* Google Funding Choicesスクリプト */}
        <script
          async
          src="https://fundingchoicesmessages.google.com/i/pub-5463240386609584?ers=1"
          crossOrigin="anonymous"
        />

        {/* Google Funding Choicesインラインスクリプト */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                    iframe.style.display = 'none';
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}