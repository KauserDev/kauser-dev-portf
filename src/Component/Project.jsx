import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const Project = () => {
  const [filter, setFilter] = useState('All');


  // Futuer add card korar jonno:
    // Category ID: 'Full Stack', 'Database', 'Front-End', 'Back-End'

  // Project list
  const projects = [
    {
      id: 1,
      title: "Bhromon Shohayok Travel Web-app",
      category: "Front-End",
      image: "https://i.ibb.co.com/Z1SB8V1b/Screenshot-2026-01-10-185430.png",
      tags: ["React", "Tailwind", "Framer Motion"],
      liveLink: "https://bhromon-shohayok.web.app/",
      githubLink: "https://github.com/KauserDev/bhromon-shohayok",
      description: "Modern responsive Design for travel enthusiasts."
    },
    {
      id: 2,
      title: "Dragon News Portal",
      category: "Front-End",
      image: "https://i.ibb.co.com/RpRrkQty/Screenshot-2026-01-10-190419.png",
      tags: ["React", "Tailwind", "Marquee"],
      liveLink: "https://dragon-news-auth-34421.web.app/category/01",
      githubLink: "https://github.com/KauserDev/dragon-news",
      description: "Daily news portal with category-wise filtering."
    },
    {
      id: 3,
      title: "Multivendor Agricultural E-commerce Platform",
      category: "Full Stack",
      image: "https://i.ibb.co.com/wNXXRHmP/Screenshot-2026-01-29-142902.png",
      tags: ["React", "Firebase", "Cloudenary"],
      liveLink: "https://krishok-bazar.vercel.app/",
      githubLink: "https://github.com/KauserDev/krishok-bazar",
      description: "It is a one-stop digital solution created for the farmers of Bangladesh. If it grows in the future, people will be able to buy fresh produce directly from the village at home."
    },
    // {
    //   id: 4,
    //   title: "Server Side Logic",
    //   category: "Back-End",
    //   image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&q=80",
    //   tags: ["Node.js", "Express", "Firebase"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   description: "Robust API development and server management."
    // },
    // {
    //   id: 5,
    //   title: "School Management System",
    //   category: "Full Stack",
    //   image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&q=80",
    //   tags: ["React", "Node.js", "MongoDB"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   description: "A complete solution for managing students and teachers data."
    // },
    // {
    //   id: 6,
    //   title: "Inventory Database",
    //   category: "Database",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    //   tags: ["SQL", "Oracle", "PL/SQL"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   description: "Advanced database management system using SQL and Oracle."
    // },
  ];

  const categories = ['All', 'Front-End', 'Back-End', 'Full Stack', 'Database'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(proj => proj.category === filter);

  // animated
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 overflow-hidden transition-colors bg-white dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl text-slate-900 dark:text-white">
            My Recent <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg scale-105' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Display Logic */}
        <div className="min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.length > 0 ? (
              <motion.div 
                key={filter}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    layout
                    whileHover={{ y: -10 }}
                    className="group bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden 
                    shadow-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-500 
                    transition-all"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1 text-xs font-bold text-white bg-indigo-600 rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-8">
                      <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 
                          dark:text-slate-300 text-[10px] font-bold rounded-lg border dark:border-slate-600 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t dark:border-slate-700">
                        <a href={project.liveLink} target="_blank" rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline">
                          Live Preview <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-bold transition-colors text-slate-600 dark:text-slate-400 hover:text-indigo-600">
                          Source Code <FaGithub />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Empty State Message */
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="mb-4 text-6xl text-slate-300 dark:text-slate-700">
                  <FaFolderOpen />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-800 dark:text-white">No Projects Available</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Currently, there are no projects in the <span className="font-bold text-indigo-600">{filter}
                    </span> category. 
                  <br />Check back later for updates!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Project;