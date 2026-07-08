import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles coming soon on Leo Darshan's blog.",
  openGraph: {
    title: "Blog | Leo Darshan",
    description: "Articles coming soon on Leo Darshan's blog.",
    url: "https://leodarshan.com/blog",
  },
  twitter: {
    title: "Blog | Leo Darshan",
    description: "Articles coming soon on Leo Darshan's blog.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
