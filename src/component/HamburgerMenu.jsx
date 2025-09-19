import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Project", to: "/project" },
    // { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="md:hidden relative z-80">
      {/* ☰ Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl px-3 py-2 font-medium"
      >
        ☰
      </button>

      {/* 📱 Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-sky-100 shadow-md py-4 z-50"
          >
            <div className="flex flex-col items-start px-4 space-y-2">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="group px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden w-full"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-md"></span>
                  <span className="relative group-hover:text-white">{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
