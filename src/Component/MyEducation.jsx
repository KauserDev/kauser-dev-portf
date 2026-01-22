import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    year: "2022 - 2026",
    degree: "Diploma in Engineering (CST)",
    institute: "Rangpur Polytecnic Institute, Rangpur.",
    description: "Focusing on core computer science subjects, web development, and software engineering principles."
  },
  {
    year: "2019 - 2021",
    degree: "Secondary School Certificate (SSC)",
    institute: "Border Guard Public School & Collage, Rangpur.",
    description: "Completed secondary education with a focus on Science subjects."
  },
  {
    year: "sept,25 - Dec,25",
    degree: "Attachment Web Development",
    institute: "E-Learning & Earning Ltd.",
    description: "Web Design & Development."
  },

];

const MyEducation = () => {
  return (
    <section id="education" className="py-20 transition-colors duration-500 bg-slate-50 dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl font-bold md:text-5xl text-slate-900 dark:text-white"
          >
            My <span className="text-indigo-600">Education</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 transform -translate-x-1/2 bg-indigo-600 border-4 border-white rounded-full shadow-lg md:left-1/2 dark:border-slate-900">
                  <FaGraduationCap className="text-lg text-white" />
                </div>

                {/* Content Box */}
                <div className="w-full p-8 ml-12 transition-all bg-white border shadow-xl md:w-5/12 md:ml-0 dark:bg-slate-800 rounded-3xl border-slate-100 dark:border-white/5 hover:border-indigo-500/50">
                  <span className="px-4 py-1 text-sm font-bold text-indigo-600 rounded-full bg-indigo-50 dark:bg-indigo-900/30">
                    {edu.year}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{edu.degree}</h3>
                  <p className="mb-3 font-semibold text-indigo-500">{edu.institute}</p>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                    {edu.description}
                  </p>
                </div>

                {/* Empty Space for Desktop View */}
                <div className="hidden w-5/12 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEducation;