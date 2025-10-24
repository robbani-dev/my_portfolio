"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="contain bg-base-200  flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="titles"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-base-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {project.name}
              </h3>
              <p className="mb-4 line-clamp-3">
                {project.description}
              </p>
              <Link
                href={`/${project.slug}`}
                className="btn btn-outline btn-primary w-full rounded-full"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
