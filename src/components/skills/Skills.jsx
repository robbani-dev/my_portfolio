"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="contain bg-base-100 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="titles"
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 md:justify-around w-full">
        {/* Frontend */}
        <SkillCategory title="Frontend" data={skills.frontend} color="primary" />

        {/* Backend */}
        <SkillCategory title="Backend" data={skills.backend} color="secondary" />

        {/* Tools */}
        <SkillCategory title="Tools" data={skills.tools} color="success" />
      </div>
    </section>
  );
}

function SkillCategory({ title, data, color }) {
  const colorMap = {
    primary: "text-primary bg-primary",
    secondary: "text-secondary bg-secondary",
    success: "text-success bg-success",
  };

  const colorClasses = colorMap[color] || "text-primary bg-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-base-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3
        className={`text-2xl font-semibold ${
          colorClasses.split(" ")[0]
        } mb-6 text-center`}
      >
        {title}
      </h3>
      <div className="space-y-4">
        {data.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`h-3 rounded-full ${
                  colorClasses.split(" ")[1]
                } transition-all duration-500`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
