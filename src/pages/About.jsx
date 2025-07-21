"use client";

import { motion } from "framer-motion";
import { useSwipeGestures } from "../hooks/useSwipeGestures";

const About = ({ darkMode, onSwipeLeft, onSwipeRight }) => {
  const swipeGestures = useSwipeGestures(onSwipeLeft, onSwipeRight, 100);

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Framer Motion",
    "Next.js",
    "MongoDB",
    "MySQL",
    "Java",
    "Flutter",
    "Figma",
    "Adobe Photoshop",
    "Git",
    "GitHub",
  ];

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 min-h-screen"
      {...swipeGestures}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            About Me.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16"
        >
          <div>
            <motion.div
              className="space-y-4 text-base sm:text-lg dark:text-gray-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                I'm a passionate full-stack developer with a love for creating
                beautiful, functional web experiences. I specialize in modern
                JavaScript frameworks and have a keen eye for design.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a career where I get to
                solve complex problems and create digital solutions that make a
                difference.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                designing user interfaces..
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                    darkMode
                      ? "bg-emerald-600 text-gray-200"
                      : "bg-emerald-200 text-gray-800"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            Certification
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div
              className={`p-4 sm:p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                React Essential Training
              </h4>
              <p className="text-emerald-400 font-semibold mb-2">
                LinkedIn Learning
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                December 2024
              </p>
            </div>
            <div
              className={`p-4 sm:p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Programming with JavaScript
              </h4>
              <p className="text-emerald-400 font-semibold mb-2">Meta</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                November 2024
              </p>
            </div>
            <div
              className={`p-4 sm:p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg sm:col-span-2 lg:col-span-1`}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Introduction to Front-End Development
              </h4>
              <p className="text-emerald-400 font-semibold mb-2">Meta</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                June 2024
              </p>
            </div>
            <div
              className={`p-4 sm:p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg sm:col-span-2 lg:col-span-1`}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Python for Beginners
              </h4>
              <p className="text-emerald-400 font-semibold mb-2">
                University of Moratuwa
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                September 2023
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
