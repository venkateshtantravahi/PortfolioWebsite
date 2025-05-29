import React, { useState } from "react";
import { experienceData } from "../data/experienceData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900 py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Experience & Education
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {experienceData.map((item) => {
          const isOpen = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md transition"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-10 h-10 rounded-full object-contain border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.subtitle} • <span className="italic">{item.year}</span>
                    </p>
                  </div>
                </div>
                <div className="text-gray-500">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-400 mb-4">
                      {item.achievements?.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
