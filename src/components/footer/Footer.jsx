"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer className="bg-base-200 border-t border-base-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-primary">Golam Robbani</h2>
          <p className="text-gray-600 text-sm">
            React Front-End Developer | Building modern web experiences
          </p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex justify-center gap-5 text-2xl">
          <Link
            href="https://github.com/grashik99"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/robbani-dev/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://web.facebook.com/robbani.dev.info"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaFacebook />
          </Link>
          <Link
            href="mailto:robbani.dev.info@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </Link>
        </div>

        {/* Right - Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
          © {year} Golam Robbani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
