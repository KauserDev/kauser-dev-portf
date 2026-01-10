import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiVite, SiNetlify, SiVercel 
} from 'react-icons/si'; // SiVercel ইমপোর্ট করা হয়েছে

const MySkills = () => {
  const [filter, setFilter] = useState('All');

  const skills = [
    // Front-End
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Front-End", level: "95%" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, category: "Front-End", level: "90%" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, category: "Front-End", level: "65%" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, category: "Front-End", level: "80%" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, category: "Front-End", level: "90%" },
    
    // Back-End
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, category: "Back-End", level: "50%" },
    { name: "Express.js", icon: <SiExpress className="text-slate-600 dark:text-white" />, category: "Back-End", level: "55%" },
    
    // Database
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, category: "Database", level: "60%" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "Database", level: "75%" },
    
    // Tools (Vercel যুক্ত করা হয়েছে)
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, category: "Tools", level: "85%" },
    { name: "Vite", icon: <SiVite className="text-purple-500" />, category: "Tools", level: "90%" },
    { name: "Vercel", icon: <SiVercel className="text-slate-900 dark:text-white" />, category: "Tools", level: "90%" },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-500" />, category: "Tools", level: "85%" },
  ];

  const categories = ['All', 'Front-End', 'Back-End', 'Database', 'Tools'];

  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 transition-colors duration-300 bg-slate-50 dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold md:text-5xl text-slate-900 dark:text-white"
          >
            Technical <span className="text-indigo-600">Skills</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid max-w-6xl grid-cols-2 gap-8 mx-auto md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border 
                border-slate-100 dark:border-slate-700 group hover:border-indigo-500 transition-all relative"
              >
                {/* Percentage Display */}
                <div className="absolute text-xl italic font-extrabold text-indigo-600 top-5 right-7">
                  {skill.level}
                </div>

                <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                
                <h3 className="mb-1 text-xl font-bold text-slate-800 dark:text-white">{skill.name}</h3>
                <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-slate-400">{skill.category}</p>
                
                {/* Visual Progress Bar */}
                <div className="w-full h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }} // স্ক্রল করলে এনিমেট হবে
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-indigo-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default MySkills;