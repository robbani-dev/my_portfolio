"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-base-200 px-6 md:px-20 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-primary mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Contact Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Email */}
        <div className="flex flex-col items-center bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaEnvelope className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <a
            href="mailto:robbani.dev.info@gmail.com"
            className="text-gray-600 hover:text-primary transition"
          >
            robbani.dev.info@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaPhone className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <a
            href="tel:+8801788002949"
            className="text-gray-600 hover:text-primary transition"
          >
            +880 1788 002 949
          </a>
        </div>

        {/* WhatsApp (Optional) */}
        <div className="flex flex-col items-center bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaWhatsapp className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/+8801788002949"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition"
          >
            +880 1788 002 949
          </a>
        </div>
      </motion.div>
    </section>
  );
}
