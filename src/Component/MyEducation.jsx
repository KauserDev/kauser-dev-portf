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
  }
];

const MyEducation = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            My <span className="text-indigo-600">Education</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-800" />

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
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center z-10 shadow-lg">
                  <FaGraduationCap className="text-white text-lg" />
                </div>

                {/* Content Box */}
                <div className="w-full md:w-5/12 ml-12 md:ml-0 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 hover:border-indigo-500/50 transition-all">
                  <span className="text-indigo-600 font-bold text-sm bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1 rounded-full">
                    {edu.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-4">{edu.degree}</h3>
                  <p className="text-indigo-500 font-semibold mb-3">{edu.institute}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Empty Space for Desktop View */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEducation;