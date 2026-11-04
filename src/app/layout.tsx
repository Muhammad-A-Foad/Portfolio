import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/content/site";
import { profile } from "@/content/portfolio";
import "./globals.css";
import "./refinements.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Ahmad Foad — Full-Stack Software Engineer",
    template: "%s — Muhammad Ahmad Foad",
  },
  description:
    "Muhammad Ahmad Foad is a Full-Stack Software Engineer building web, mobile, and desktop applications. Explore production software, ERP work, AI integrations, and download his résumé.",
  applicationName: "Muhammad — Portfolio",
  authors: [{ name: profile.fullName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Ahmad Foad — Full-Stack Software Engineer",
    description:
      "Thoughtful code. Useful software. Selected engineering work and the thinking behind it.",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 630,
        alt: "Muhammad — Full-Stack Software Engineer. Thoughtful code. Useful software.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahmad Foad — Full-Stack Software Engineer",
    images: ["/social.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151513",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
