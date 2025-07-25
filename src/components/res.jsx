"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSwipeGestures } from "../hooks/useSwipeGestures";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Swipe gestures for menu
  const menuSwipeGestures = useSwipeGestures(
    () => {
      // Swipe left to close menu
      if (isMenuOpen) {
        closeMenu();
      }
    },
    () => {
      // Swipe right to open menu (only from edge)
      if (!isMenuOpen) {
        openMenu();
      }
    },
    100
  );

  // Edge swipe detection for opening menu
  const [edgeSwipeStart, setEdgeSwipeStart] = useState(null);

  const handleEdgeSwipeStart = (e) => {
    const touch = e.targetTouches[0];
    const screenWidth = window.innerWidth;

    // Only detect swipes from the right edge (last 20px)
    if (touch.clientX > screenWidth - 20) {
      setEdgeSwipeStart(touch.clientX);
    }
  };

  const handleEdgeSwipeMove = (e) => {
    if (!edgeSwipeStart) return;

    const touch = e.targetTouches[0];
    const distance = edgeSwipeStart - touch.clientX;

    // If swiping left from edge with sufficient distance, open menu
    if (distance > 50 && !isMenuOpen) {
      openMenu();
      setEdgeSwipeStart(null);
    }
  };

  const handleEdgeSwipeEnd = () => {
    setEdgeSwipeStart(null);
  };

  // Add edge swipe listeners
  useEffect(() => {
    const handleTouchStart = (e) => handleEdgeSwipeStart(e);
    const handleTouchMove = (e) => handleEdgeSwipeMove(e);
    const handleTouchEnd = () => handleEdgeSwipeEnd();

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [edgeSwipeStart, isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-opacity-80"
        style={{
          backgroundColor: darkMode ? "rgba(23,23,23)" : "rgba(249, 250, 251)",
          // color: darkMode ? "#1f2937" : "#f9fafb",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold cursor-pointer z-50 hover:text-emerald-500"
          >
            <Link to="/" onClick={closeMenu}>
              MB
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-extrabold">
            <Link
              to="/"
              className={`hover:text-green-400 transition-colors duration-200 ${
                isActive("/") ? "text-green-400 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-green-400 transition-colors duration-200 ${
                isActive("/about") ? "text-green-400 font-semibold" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`hover:text-green-400 transition-colors duration-200 ${
                isActive("/projects") ? "text-green-400 font-semibold" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`hover:text-green-400 transition-colors duration-200 ${
                isActive("/contact") ? "text-green-400 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={
                darkMode
                  ? "p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-emerald-500 transition-colors"
                  : "p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-emerald-100 transition-colors"
              }
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden z-50 p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <motion.span
                className="block w-6 h-0.5 bg-current absolute"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -6,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-current absolute"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-current absolute"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 6,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={closeMenu}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={
              darkMode
                ? "fixed top-0 right-0 h-full w-80 max-w-sm bg-slate-900 dark:bg-gray-900 z-40 lg:hidden shadow-2xl"
                : "fixed top-0 right-0 h-full w-80 max-w-sm bg-white dark:bg-gray-900 z-40 lg:hidden shadow-2xl"
            }
            {...menuSwipeGestures}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Swipe indicator */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                  Swipe left to close
                </p>
              </div>

              <nav className="flex flex-col space-y-8">
                <Link
                  to="/"
                  className={`text-2xl font-semibold hover:text-green-400 transition-colors ${
                    isActive("/") ? "text-green-400" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`text-2xl font-semibold hover:text-green-400 transition-colors ${
                    isActive("/about") ? "text-green-400" : ""
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className={`text-2xl font-semibold hover:text-green-400 transition-colors ${
                    isActive("/projects") ? "text-green-400" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className={`text-2xl font-semibold hover:text-green-400 transition-colors ${
                    isActive("/contact") ? "text-green-400" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    toggleDarkMode();
                    closeMenu();
                  }}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full"
                >
                  <span className="text-2xl">
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </span>
                  <span className="text-lg font-medium">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
