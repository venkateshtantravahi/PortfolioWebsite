import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.type)))];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.type === selectedCategory);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 py-20 px-6 text-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition text-sm ${
              selectedCategory === category
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-sm px-4 text-center">
              {project.description}
            </div>

            {/* Project Info */}
            <div className="text-left px-4 py-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {project.tags.join(", ")}
              </p>
            </div>

            {/* Tape Corners */}
            <div className="absolute top-0 left-0 w-5 h-5 bg-black dark:bg-white rotate-45 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-black dark:bg-white rotate-45 translate-x-1/2 -translate-y-1/2" />

            {/* Clickable GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Open GitHub</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
