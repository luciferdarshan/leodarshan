import type { Metadata } from "next";
import { Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Leo Darshan | Developer Portfolio",
    template: "%s | Leo Darshan",
  },
  description:
    "Personal portfolio of Leo Darshan, building Linux desktop applications and learning modern software development. Developer of LeoBook.",
  keywords: [
    "Leo Darshan",
    "Linux Developer",
    "Fedora Linux",
    "Desktop Software",
    "LeoBook",
    "TypeScript",
    "Electron Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Leo Darshan" }],
  creator: "Leo Darshan",
  metadataBase: new URL("https://leodarshan.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leodarshan.com",
    title: "Leo Darshan | Developer Portfolio",
    description:
      "Personal portfolio of Leo Darshan, building Linux desktop applications and learning modern software development. Developer of LeoBook.",
    siteName: "Leo Darshan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Darshan | Developer Portfolio",
    description:
      "Personal portfolio of Leo Darshan, building Linux desktop applications and learning modern software development.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg-void text-text-primary">
        <Header />
        <main className="flex-grow flex flex-col pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
