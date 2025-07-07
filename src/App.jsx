"use client";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import SwipeIndicator from "./components/SwipeIndicator";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { usePageSwipe } from "./hooks/useSwipeGestures";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { goToNextPage, goToPrevPage, currentIndex, totalPages } = usePageSwipe(
    location.pathname,
    navigate
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-neutral-900 text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <CustomCursor />
      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                onSwipeLeft={goToNextPage}
                onSwipeRight={goToPrevPage}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                darkMode={darkMode}
                onSwipeLeft={goToNextPage}
                onSwipeRight={goToPrevPage}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                darkMode={darkMode}
                onSwipeLeft={goToNextPage}
                onSwipeRight={goToPrevPage}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                darkMode={darkMode}
                onSwipeLeft={goToNextPage}
                onSwipeRight={goToPrevPage}
              />
            }
          />
        </Routes>
      </main>
      <SwipeIndicator
        currentIndex={currentIndex}
        totalPages={totalPages}
        darkMode={darkMode}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
