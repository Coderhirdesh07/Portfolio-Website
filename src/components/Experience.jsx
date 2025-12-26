import React from 'react'
import {motion} from "framer-motion";

function Experience() {
  const experiences = [
  {
    role: "Full Stack Developer",
    company: "Sicuaura Global Pvt Lmt",
    duration: "Oct 2025 – Dec 2025",
    description: [
      "Built responsive and reusable UI components using React and Tailwind CSS.",
      "Improved website performance by optimizing components.",
      "Collaborated with cross-functional teams to deliver features.",
    ],
  },
  
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );  
}

export default Experience