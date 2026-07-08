import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and skills matrix of Leo Darshan, software developer.",
  openGraph: {
    title: "Resume | Leo Darshan",
    description: "Professional resume and skills matrix of Leo Darshan, software developer.",
    url: "https://leodarshan.com/resume",
  },
  twitter: {
    title: "Resume | Leo Darshan",
    description: "Professional resume and skills matrix of Leo Darshan, software developer.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
