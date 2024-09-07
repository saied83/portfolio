import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Future-focused full-stack developer with a strong foundation in computer science. Currently pursuing a BSc in CSE at BRAC University.",
  icons: {
    icon: "/logo.svg", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        id="home"
        className={twMerge(
          inter.variable,
          calistoga.variable,
          " bg-gray-900  overflow-y-scroll overflow-x-hidden text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
