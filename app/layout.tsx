import type { Metadata } from "next";
import Header from "../components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { getImageUrl } from "@/utils";

import AppleTouchIcon from "@/public/images/Favicon/apple-touch-icon.png";
import Favicon32 from "@/public/images/Favicon/favicon-32x32.png";
import Favicon16 from "@/public/images/Favicon/favicon-16x16.png";

export const metadata: Metadata = {
  title: "LivSee",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let manifestUrl = "images/Favicon/site.webmanifest";
  manifestUrl =
    process.env.NEXT_PUBLIC_NODE_ENV !== "production"
      ? manifestUrl
      : `${process.env.NEXT_PUBLIC_ASSET_PREFIX || "/livsee"}/${manifestUrl}`;
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={getImageUrl(AppleTouchIcon.src)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={getImageUrl(Favicon32.src)}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={getImageUrl(Favicon16.src)}
        />
        <link
          rel="manifest"
          href={manifestUrl}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
