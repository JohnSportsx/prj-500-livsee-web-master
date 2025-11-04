import type { Metadata } from "next";
import Header from "../components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { config } from "@/app/config";

const { basePath } = config;

export const metadata: Metadata = {
  title: "LivSee",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${
            basePath === ""
              ? "/"
              : basePath + "/"
          }images/Favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${
            basePath === ""
              ? "/"
              : basePath + "/"
          }images/Favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${
            basePath === ""
              ? "/"
              : basePath + "/"
          }images/Favicon/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${
            basePath === ""
              ? "/"
              : basePath + "/"
          }images/Favicon/site.webmanifest`}
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
