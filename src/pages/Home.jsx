"use client";

import { motion } from "framer-motion";
import { useSwipeGestures } from "../hooks/useSwipeGestures";
import profileImg from "../assets/profile.png";

const Home = ({ darkMode, onSwipeLeft, onSwipeRight }) => {
  const swipeGestures = useSwipeGestures(onSwipeLeft, onSwipeRight, 100);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pb-20"
      {...swipeGestures}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p
                className={
                  darkMode
                    ? "text-base sm:text-lg text-gray-200 dark:text-gray-400 mb-2"
                    : "text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2"
                }
              >
                Hello! I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-2">
                Malindu Bandara
              </h1>
              <h2
                className={
                  darkMode
                    ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white leading-tight"
                    : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight"
                }
              >
                Fullstack
                <br />
                Developer.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={
                darkMode
                  ? "text-base sm:text-lg text-gray-200 dark:text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed"
                  : "text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed"
              }
            >
              A Full Stack Developer who builds fast, scalable, and
              user-friendly web apps. From sleek front-ends to powerful
              back-ends, I turn ideas into clean, efficient code.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://www.linkedin.com/in/malindu-bandara-211223210/"
                whileHover={{ scale: 1.1 }}
                className={
                  darkMode
                    ? "w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-white transition-colors"
                    : "w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-white transition-colors"
                }
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/malindubandara"
                whileHover={{ scale: 1.1 }}
                className={
                  darkMode
                    ? "w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-white transition-colors"
                    : "w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-white transition-colors"
                }
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href={`${import.meta.env.BASE_URL}Malindu_Bandara_CV.pdf`}
                download
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-400 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  Download CV
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Blob */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-5 -left-5 sm:-top-10 sm:-left-10 w-20 h-20 sm:w-32 sm:h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M20,20 Q40,10 60,20 T100,20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M20,40 Q40,30 60,40 T100,40"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M20,60 Q40,50 60,60 T100,60"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            {/* Main Blob Background */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 -z-10"
              >
                <svg
                  viewBox="0 0 400 400"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 text-green-400"
                >
                  <path
                    d="M200,50 C280,50 350,120 350,200 C350,280 280,350 200,350 C120,350 50,280 50,200 C50,120 120,50 200,50 Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative z-10"
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-64 h-80 sm:w-64 sm:h-80 lg:w-80 lg:h-96 object-cover rounded-lg"
                />
              </motion.div>
            </div>

            {/* Bottom Decorative Lines */}
            <div className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10 w-24 h-12 sm:w-40 sm:h-20 opacity-20">
              <svg viewBox="0 0 160 80" className="w-full h-full">
                <path
                  d="M10,10 Q50,30 90,10 T150,10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M10,30 Q50,50 90,30 T150,30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M10,50 Q50,70 90,50 T150,50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
