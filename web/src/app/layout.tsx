import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AccessibilityProvider } from "@/lib/accessibility-context";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elo Labs | FC Tournament Platform",
  description:
    "Host and manage tournaments. Create tournament pages, manage signups, run brackets, and keep your community updated.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AccessibilityProvider>
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>
          <div id="main-content">{children}</div>
          <AccessibilityPanel />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
