import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Golam Robbani | Web Developer Portfolio",
  description:
    "Full-stack web developer specializing in React, Next.js, and modern web design. Explore my work and projects.",
  keywords: [
    "Golam Robbani",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
  ],
  author: "Golam Robbani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
