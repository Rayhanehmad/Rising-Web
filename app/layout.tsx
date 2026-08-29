import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Rising Solution | Process Safety, Risk Management & Engineering",
    template: "%s | Rising Solution",
  },

  description:
    "Rising Solution provides Process Safety, Risk Management, HAZOP, QRA, Fire Protection Engineering, ISO Consultancy and Industrial Compliance services.",

  keywords: [
    "Process Safety",
    "HAZOP",
    "QRA",
    "LOPA",
    "Risk Management",
    "Fire Protection Engineering",
    "ISO Consultancy",
    "Industrial Safety",
    "Engineering Consultancy",
    "Rising Solution",
  ],

  authors: [{ name: "Rising Solution" }],

  openGraph: {
    title:
      "Rising Solution | Engineering Safer Industries",
    description:
      "Process Safety, Risk Management, Fire Protection, ISO Consultancy and Engineering Compliance.",
    type: "website",
    url: "https://risingsolution.com.pk",
    siteName: "Rising Solution",
  },

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}