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

  const filters = ["All", "Projects", "Dev Tools", "Open Source", "Designs"];

  const projects = [
    {
      id: 1,
      title: "Real time chat Application",
      subtitle: "",
      description:
        "Implemented a scalable chat application with real-time updates.",
      fullDescription:
        " Implemented a scalable chat application with real-time updates, supporting group conversation and individual messaging, utilizing WebSocket technology.",
      category: "Dev Tools",
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
    // {
    //   id: 2,
    //   title: "Scoutbar",
    //   subtitle: "Navigation is hard lets automate it",
    //   description:
    //     "A command palette for your website that helps users navigate faster.",
    //   fullDescription:
    //     "Scoutbar is a powerful command palette component that enhances user navigation experience. It provides instant search functionality, keyboard shortcuts, and intelligent suggestions to help users find what they're looking for quickly and efficiently.",
    //   category: "Open Source",
    //   image: "/placeholder.svg?height=300&width=400",
    //   bgColor: "bg-slate-800",
    //   textColor: "text-white",
    //   techStack: ["React", "JavaScript", "CSS Modules", "Fuse.js", "Portal"],
    //   githubUrl: "https://github.com/yourusername/scoutbar",
    //   liveUrl: "https://scoutbar-demo.vercel.app",
    //   features: [
    //     "Fuzzy search algorithm",
    //     "Keyboard navigation support",
    //     "Customizable themes",
    //     "Plugin architecture",
    //     "Zero dependencies",
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Sable Quer",
    //   subtitle: "INTRODUCING",
    //   description:
    //     "Simplifies the use of React Query by offering a streamlined approach to managing queries and mutations.",
    //   fullDescription:
    //     "Sable Quer is a wrapper library around React Query that provides a more intuitive API for data fetching and state management. It reduces boilerplate code while maintaining all the powerful features of React Query.",
    //   category: "Projects",
    //   image: "/placeholder.svg?height=300&width=400",
    //   bgColor: "bg-slate-700",
    //   textColor: "text-white",
    //   techStack: ["React", "TypeScript", "React Query", "Zustand", "Jest"],
    //   githubUrl: "https://github.com/yourusername/sable-quer",
    //   liveUrl: "https://sable-quer-docs.vercel.app",
    //   features: [
    //     "Simplified API design",
    //     "Built-in error handling",
    //     "Automatic retries",
    //     "TypeScript support",
    //     "Comprehensive documentation",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Design System",
    //   subtitle: "SWIFT CREATES",
    //   description:
    //     "A comprehensive design system built for modern web applications.",
    //   fullDescription:
    //     "A complete design system featuring reusable components, design tokens, and guidelines for building consistent user interfaces. Built with accessibility and scalability in mind.",
    //   category: "Designs",
    //   image: "/placeholder.svg?height=300&width=400",
    //   bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200",
    //   techStack: [
    //     "React",
    //     "Storybook",
    //     "Styled Components",
    //     "Design Tokens",
    //     "Figma",
    //   ],
    //   githubUrl: "https://github.com/yourusername/design-system",
    //   liveUrl: "https://design-system-storybook.vercel.app",
    //   features: [
    //     "50+ reusable components",
    //     "Design tokens system",
    //     "Dark mode support",
    //     "Accessibility compliant",
    //     "Storybook documentation",
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "E-commerce Platform",
    //   subtitle: "MODERN SHOPPING",
    //   description:
    //     "A full-featured e-commerce platform with React and Node.js.",
    //   fullDescription:
    //     "A complete e-commerce solution featuring product management, shopping cart, payment processing, and order management. Built with modern technologies and best practices for scalability and performance.",
    //   category: "Projects",
    //   image: "/placeholder.svg?height=300&width=400",
    //   bgColor: "bg-gradient-to-br from-blue-100 to-purple-200",
    //   techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
    //   liveUrl: "https://ecommerce-demo.vercel.app",
    //   features: [
    //     "Product catalog management",
    //     "Shopping cart functionality",
    //     "Secure payment processing",
    //     "Order tracking system",
    //     "Admin dashboard",
    //   ],
    // },
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
              Hover over projects to see the tech stack, click to view detailed
              information
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
