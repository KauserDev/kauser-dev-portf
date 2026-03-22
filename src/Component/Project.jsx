import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const Project = () => {
  const [filter, setFilter] = useState('All');

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
      tags: ["React", "Firebase", "Cloudinary"],
      liveLink: "https://krishok-bazar.vercel.app/",
      githubLink: "https://github.com/KauserDev/krishok-bazar",
      description: "It is a one-stop digital solution created for the farmers of Bangladesh."
    },
    //Data Analysis/Power BI
    {
      id: 4,
      title: "Business Insights Dashboard",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      tags: ["Power BI", "SQL", "Excel"],
      liveLink: "#",
      githubLink: "#",
      description: "Interactive data visualization and business intelligence solution using Power BI."
    },
    {
      id: 5,
      title: "Sales Analysis Dashboard",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      tags: ["Power BI", "Excel", "SQL"],
      liveLink: "#",
      githubLink: "#",
      description: "Business intelligence dashboard focusing on sales growth and regional performance."
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80",
      tags: ["SQL", "MySQL", "Relational DB"],
      liveLink: "#",
      githubLink: "#",
      description: "Complex SQL database design for managing stock, orders, and suppliers."
    }
  ];

  // 'Data Analysis'
  const categories = ['All', 'Front-End', 'Back-End', 'Full Stack', 'Database', 'Data Analysis'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="py-20 transition-colors bg-white dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-5xl text-slate-900 dark:text-white">
            My Recent <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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
        </div>

        {/* Projects Display */}
        <div className="min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            <motion.div 
              layout
              key={filter}
              className="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-500 transition-all"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1 text-xs font-bold text-white bg-indigo-600 rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">{project.title}</h3>
                      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-lg border dark:border-slate-600 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t dark:border-slate-700">
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline">
                          Live Preview <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600">
                          Source Code <FaGithub />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center col-span-full">
                  <FaFolderOpen className="mb-4 text-6xl text-slate-300" />
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">No Projects Found</h3>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Project;