"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-base-200 flex flex-col items-center justify-center px-6 md:px-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-primary text-center"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-60 h-60 relative rounded-2xl overflow-hidden shadow-xl border-4 border-primary"
        >
          <Image
            src="/image/golam_robbani-.png"
            alt="Golam Robbani"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-5"
        >
          <h3 className="text-2xl font-semibold text-accent">
            Hi, I'm Golam Robbani
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            My programming journey started with curiosity, wanting to
            understand how websites worked behind the scenes. What began as a
            hobby soon turned into a passion for crafting elegant, responsive,
            and efficient web applications.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            I love building modern web experiences with <b>React</b> and{" "}
            <b>Next.js</b>. I enjoy solving real-world problems and seeing my
            code come to life on the screen. My focus is on writing clean,
            maintainable code and creating user-friendly interfaces that make
            an impact.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new tech tools,
            watching football, or capturing moments through photography. I
            also enjoy sketching — it helps me stay creative and detail-oriented
            in my design work.
          </p>

          <p className="text-gray-700 italic">
            “Every line of code is a step toward creating something meaningful.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
