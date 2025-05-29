import React from "react";
import { certificationsData } from "../data/certificationsData";

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="bg-white dark:bg-gray-900 py-20 px-6 text-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Certifications
      </h2>

      {/* Horizontal Scrolling Row */}
      <div className="relative w-full overflow-x-hidden">
        <div
          className="flex gap-6 animate-scroll-x px-6"
          style={{ animation: "scroll-x 40s linear infinite" }}
        >
          {certificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[200px] max-w-[220px] flex-shrink-0 group"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 transition-transform hover:scale-[1.05] h-full">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-24 object-contain mx-auto mb-2"
                />
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-2 font-medium">
                  {cert.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
