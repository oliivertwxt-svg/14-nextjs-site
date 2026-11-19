import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digital craft for what’s next",
    template: "%s | Northstar Studio",
  },
  description:
    "Northstar is an independent digital agency building thoughtful brands and useful digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Northstar Studio",
    title: "Digital craft for what’s next",
    description:
      "Northstar is an independent digital agency building thoughtful brands and useful digital experiences.",
    images: [
      {
        url: "/northstar-og.png",
        width: 1200,
        height: 630,
        alt: "Northstar Studio — Make room for what’s next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital craft for what’s next",
    description:
      "Northstar is an independent digital agency building thoughtful brands and useful digital experiences.",
    images: ["/northstar-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#f7f8f2] font-sans text-[#17231d]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
