"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSwipeGestures } from "../hooks/useSwipeGestures";

const Contact = ({ darkMode, onSwipeLeft, onSwipeRight }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const swipeGestures = useSwipeGestures(onSwipeLeft, onSwipeRight, 100);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    emailjs
      .send(
        "service_z649gjn",
        "template_rablrl5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "riCcCKaMfTDnjES3T"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
          setFormData({ name: "", email: "", message: "" });
          setEmailError("");
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 min-h-screen"
      {...swipeGestures}
    >
      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Message sent successfully!
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let's Work Together.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl sm:text-2xl">📧</span>
                <span className="text-sm sm:text-base">
                  malindubandara48@gmail.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl sm:text-2xl">📱</span>
                <span className="text-sm sm:text-base">+94 713989527</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl sm:text-2xl">📍</span>
                <span className="text-sm sm:text-base">
                  Maharagama, Sri Lanka
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl sm:text-2xl">💼</span>
                <a
                  href="https://www.linkedin.com/in/malindu-bandara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm sm:text-base underline">
                    linkedin.com/in/malindu-bandara
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors text-sm sm:text-base ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors text-sm sm:text-base ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none text-sm sm:text-base ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 sm:px-8 py-3 bg-emerald-400 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
