"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useSwipeGestures } from "../hooks/useSwipeGestures";

const Projects = ({ darkMode, onSwipeLeft, onSwipeRight }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swipeGestures = useSwipeGestures(onSwipeLeft, onSwipeRight, 100);

  const filters = ["All", "Projects", "Designs"];

  const projects = [
    {
      id: 1,
      title: "Real time chat Application",
      subtitle: "",
      description:
        "Implemented a scalable chat application with real-time updates.",
      fullDescription:
        " Implemented a scalable chat application with real-time updates, supporting group conversation and individual messaging, utilizing WebSocket technology.",
      category: "Projects",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-purple-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-black-100 to-green-200",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      githubUrl: "https://github.com/malindubandara/Realtime-Chat-App",
      liveUrl: "",
      features: [
        "Real-time messaging with WebSockets",
        "Group and individual chats",
        "Message history",
        "Responsive design",
      ],
    },
    {
      id: 2,
      title: "ShiftSL",
      subtitle: "",
      description:
        "A Dynamic Roster Scheduling System and efficient leave management software.",
      fullDescription:
        "A Dynamic Roster Scheduling System and efficient leave management software for shift-based work environments. Specialized to work with the health care sector of Sri Lanka. I took part exclusively in Mobile application development of the ShiftSl app, working with Flutter. Integrated Firebase authentication to work seamlessly with registering and logging in users. ",
      category: "Projects",
      image: "/placeholder.svg?height=300&width=400",
      bgColor: "bg-slate-800",
      textColor: "text-white",
      techStack: ["Flutter", "React.js", "SpringBoot", "Mysql"],
      githubUrl: "https://github.com/ShiftSL",
      liveUrl: "https://github.com/ShiftSL",
      features: [
        "Leave management system",
        "Dynamic roster scheduling",
        "Shift swapping",
        "Real-time notifications",
        "User-friendly mobile interface",
      ],
    },
    {
      id: 3,
      title: "BookStore Application",
      subtitle: "INTRODUCING",
      description: "A RESTful API for a Bookstore application using JAX-RS",
      fullDescription:
        "A RESTful API for a Bookstore application using JAX-RS. The API provides functionality for managing books, authors, customers, shopping carts, and orders. The implementation follows REST principles and uses JAX-RS, JSON, and in-memory data storage without relying on external frameworks or databases.",
      category: "Projects",
      image: "/placeholder.svg?height=300&width=400",
      bgColor: "bg-slate-700",
      textColor: "text-white",
      techStack: ["Java", "Jax-RS", "JSON"],
      githubUrl: "https://github.com/yourusername/sable-quer",
      liveUrl: "https://sable-quer-docs.vercel.app",
      features: ["CRUD operations for books, authors, and customers"],
    },
    {
      id: 4,
      title: "Real-time Ticketing Application",
      subtitle: "",
      description:
        "Developed a real-time ticketing system supporting concurrent ticket releases and purchases with multithreading and synchronization.",
      fullDescription:
        "Developed a real-time ticketing system supporting concurrent ticket releases and purchases with multithreading and synchronization to maintain data integrity. Worked with multi-threading and OOP concepts to implement a synchronised, thread-safe environment.",
      category: "Projects",
      image: "/placeholder.svg?height=300&width=400",
      bgColor: "bg-gradient-to-br from-yellow-800 to-orange-600",
      techStack: ["Java"],
      githubUrl:
        "https://github.com/malindubandara/Real-time-Ticketing-Web-App",
      liveUrl: "https://github.com/malindubandara/Real-time-Ticketing-Web-App",
      features: [
        "Real-time ticket availability updates",
        "Concurrent ticket purchases",
      ],
    },
    {
      id: 5,
      title: "EcoVerso",
      subtitle: "",
      description:
        "E-commerce platform with product catalog, shopping cart, and Cheakout functionality.",
      fullDescription:
        "As part of my first year's second-semester group coursework for the Web Design and Development module, I created an online store, accompanying checkout page and splash screen",
      category: "Projects",
      image: "/placeholder.svg?height=300&width=400",
      bgColor: "bg-gradient-to-br from-blue-800 to-purple-800",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/malindubandara/EcoVerso",
      liveUrl: "https://github.com/malindubandara/EcoVerso",
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Checkout page",
        "Responsive design",
      ],
    },
    // {
    //   id: 6,
    //   title: "Portfolio Template",
    //   subtitle: "CREATIVE SHOWCASE",
    //   description: "A beautiful portfolio template for creative professionals.",
    //   fullDescription:
    //     "A modern, responsive portfolio template designed for creative professionals. Features smooth animations, dark mode support, and easy customization options.",
    //   category: "Designs",
    //   image: "/placeholder.svg?height=300&width=400",
    //   bgColor: "bg-gradient-to-br from-pink-100 to-red-200",
    //   techStack: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    //   githubUrl: "https://github.com/yourusername/portfolio-template",
    //   liveUrl: "https://portfolio-template-demo.vercel.app",
    //   features: [
    //     "Responsive design",
    //     "Smooth animations",
    //     "Dark mode toggle",
    //     "MDX blog support",
    //     "SEO optimized",
    //   ],
    // },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 min-h-screen"
        {...swipeGestures}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Projects.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeFilter === filter
                    ? "bg-emerald-400 text-white"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                darkMode={darkMode}
                onProjectClick={handleProjectClick}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        darkMode={darkMode}
      />
    </>
  );
};

export default Projects;
