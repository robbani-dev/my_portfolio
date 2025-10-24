"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="py-20 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 bg-base-100">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-center md:text-left"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-3">
                    Hi, I'm <span className="text-accent">Golam Robbani</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                    React Front-End Developer
                </h2>
                <p className="text-base md:text-lg max-w-xl">
                    I build fast, responsive, and user-friendly web applications using
                    modern technologies like React, Next.js, and Tailwind CSS. My goal is
                    to turn ideas into reality on the web.
                </p>

                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <Link
                        href="#projects"
                        className="btn btn-primary rounded-full px-6"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1FB5Jg0wGt9lXdbSDzVNDanY83BtNeKPO/view?usp=sharing"
                        target="_blank"
                        className="btn btn-outline rounded-full px-6"
                    >
                        Resume
                    </Link>
                </div>

                <div className="flex justify-center md:justify-start mt-8 gap-5 text-2xl">
                    <Link
                        href="https://github.com/robbani-dev"
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

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-primary">
                    <img src="/image/golam_robbani.png" alt="Golam Robbani" />
                </div>
            </motion.div>
        </section>
    );
}
