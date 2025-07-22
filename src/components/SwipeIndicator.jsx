"use client";

import { motion } from "framer-motion";

const SwipeIndicator = ({ currentIndex, totalPages, darkMode }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex space-x-2 px-4 py-2 rounded-full backdrop-blur-md ${
          darkMode ? "bg-gray-900/80" : "bg-white/80"
        } shadow-lg`}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-emerald-400"
                : darkMode
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>

      {/* Swipe hint */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-center mt-2"
      >
        <span
          className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Swipe to navigate
        </span>
      </motion.div>
    </div>
  );
};

export default SwipeIndicator;
