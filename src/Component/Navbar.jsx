import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFileDownload } from 'react-icons/fa'; 
import MyResume from '../assets/KAUSER HOSSEN.pdf';

// menu bar
const menuItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Service', to: 'service' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 z-50 flex justify-center px-4 top-4"
    >
      <nav className="relative flex items-center justify-between w-full max-w-6xl px-6 py-3 border rounded-full shadow-2xl border-black/5 dark:border-white/10 dark:bg-slate-900/40 bg-white/70 backdrop-blur-2xl">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 font-bold text-white shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
            KH.
          </div>
          <span className="text-xl font-bold tracking-tight dark:text-white text-slate-900">
            Kauser<span className="text-indigo-600">.dev</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-1 p-1 border rounded-full lg:flex bg-slate-200/50 dark:bg-white/5 border-slate-300/50 dark:border-white/10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              activeClass="bg-indigo-600 !text-white"
              className="px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full cursor-pointer text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={MyResume}
            download="Kauser_Resume"
            className="flex items-center gap-2 px-5 py-2.5 
            bg-indigo-700 text-white rounded-full 
            text-sm font-bold shadow-lg shadow-indigo-500/30 
            hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all"
          >
            <FaFileDownload className="text-lg" />
            <span className="hidden sm:inline">Resume</span> 
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 
            rounded-full bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600/20 transition-all"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu (Animated Glass Effect) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-16 left-0 right-0 mx-2 p-4 
              bg-white/40 dark:bg-slate-900/60 backdrop-blur-3xl 
              border border-white/20 dark:border-white/10 rounded-[2.5rem] 
              lg:hidden shadow-2xl flex flex-col gap-1 overflow-hidden"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.name}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsOpen(false)}
                    activeClass="bg-indigo-600 !text-white shadow-lg"
                    className="block py-4 text-base font-bold text-center transition-all cursor-pointer rounded-3xl text-slate-800 dark:text-slate-100 hover:bg-white/20 dark:hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;