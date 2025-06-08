import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yellow Stone Dev",
  description: "Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <footer className="py-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a 
                href="https://icons8.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                Icons by Icons8
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
