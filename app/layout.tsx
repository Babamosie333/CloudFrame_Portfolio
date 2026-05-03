import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Vikram Singh ✌️",
  description: "A frontend developer by profession, a creative at heart.",
  keywords: "Vikram Singh, Frontend Engineer, React Developer, Three.js, Creative Developer, Web Development, Angular, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Vikram Singh" }],
  creator: "Vikram Singh",
  publisher: "Vikram Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vikram Singh - Frontend Engineer",
    description: "Frontend engineer by profession, creative at heart.",
    url: "https://vikramsingh.github.io",//todo: change this to actual url
    siteName: "Vikram Singh's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png', // Ensure this file is in your /public folder
        width: 1200,
        height: 630,
        alt: 'Vikram Singh Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Singh - Frontend Engineer",
    description: "Frontend engineer by profession, creative at heart.",
    images: ['/og-image.png'], // Add this to match your OG image
  },
  verification: {
    google: "google-site-verification=abc123", //todo: change this to actual verification code
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
