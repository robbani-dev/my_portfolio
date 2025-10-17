"use client";
import { motion } from "framer-motion";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-base-100 px-6 md:px-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-primary mb-12 text-center"
      >
        Educational Qualification
      </motion.h2>

      <div className="space-y-8 w-full max-w-4xl">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-base-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-accent mb-2">
              {edu.degree}
            </h3>
            <p className="text-gray-600 font-medium">{edu.institute}</p>
            <p className="text-gray-500 mb-3">{edu.duration}</p>
            <p className="text-gray-700">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
