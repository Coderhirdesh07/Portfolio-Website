import React from 'react'

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "Full-featured e-commerce platform with cart and authentication.",
      tech: ["React", "Node.js"],
      link: "#",
    },
  ];
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-10">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(project => (
        <div
          key={project.title}
          className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
        >
          <h3 className="text-2xl font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex gap-2 mb-4">
            {project.tech.map(t => (
              <span key={t} className="text-sm text-indigo-400">
                #{t}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="text-indigo-500 hover:underline"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Projects