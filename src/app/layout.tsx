import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SakuraBackground from "@/components/SakuraBackground";
import ParticleBackground from "@/components/ParticleBackground";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leo Darshan | Personal Portfolio",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leodarshan.com",
    title: "Leo Darshan | Personal Portfolio",
    description:
      "Personal portfolio of Leo Darshan, building Linux desktop applications and learning modern software development. Developer of LeoBook.",
    siteName: "Leo Darshan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Darshan | Personal Portfolio",
    description:
      "Personal portfolio of Leo Darshan, building Linux desktop applications and learning modern software development.",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-jp-paper text-jp-ink selection:bg-jp-red/10 selection:text-jp-red">
        <ParticleBackground />
        <Header />
        <main className="flex-grow flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
