import { motion } from 'framer-motion';
import aboutImg from '../assets/Hero.png';
import { FaBolt, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden transition-colors duration-500 bg-white dark:bg-slate-950">
      <div className="container px-6 mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-5xl text-slate-900 dark:text-white"
          >
            About <span className="text-indigo-600">Me</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left Side: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto overflow-hidden border-4 border-white shadow-2xl aspect-square rounded-2xl dark:border-slate-800">
              <img 
                src={aboutImg} 
                alt="About Kauser" 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute hidden w-full h-full max-w-md border-4 border-indigo-600 -bottom-6 -right-6 rounded-2xl -z-0 md:block" />
            <div className="absolute w-32 h-32 rounded-full -top-10 -left-10 bg-purple-500/10 blur-3xl" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-slate-100">
              Data Driven <span className="text-indigo-500">Professional</span> & Web Enthusiast
            </h3>
            
            <p className="text-lg leading-relaxed text-justify text-slate-600 dark:text-gray-400">
              Hello! I'm Kauser Hossen. Professionally, I specialize in data management and visualization using 
              <span className="font-semibold text-slate-800 dark:text-white"> Excel, SQL, and Power BI</span>. 
              I am passionate about turning raw data into meaningful insights that help in making better business decisions.
            </p>

            <p className="text-lg leading-relaxed text-justify text-slate-600 dark:text-gray-400">
              Beyond my core profession, I have a deep interest in web development. I enjoy building 
              interactive front-end experiences using <span className="font-medium">React.js and Tailwind CSS</span>. 
              To maintain high efficiency, I often leverage <span className="italic font-semibold text-indigo-600">AI-driven development tools</span>, 
              allowing me to deliver functional web solutions with remarkable speed.
            </p>

            <p className="text-lg leading-relaxed text-justify text-slate-600 dark:text-gray-400">
              My unique combination of data expertise and web development skills allows me to approach problems 
              with both analytical precision and creative technicality.
            </p>

            {/* Stats/Info Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 border shadow-sm rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                   <p className="text-2xl font-bold text-indigo-600">Data</p>
                   <FaDatabase className="text-xl text-indigo-500" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">SQL & Power BI Expert</p>
              </div>
              <div className="p-4 border shadow-sm rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                   <p className="text-2xl font-bold text-indigo-600">Fast</p>
                   <FaBolt className="text-yellow-500" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">AI-Powered Web Dev</p>
              </div>
            </div>

            {/* Read More or Hire Button */}
            <div className="pt-6">
               <a 
                href="mailto:kauserhossendev@gmail.com?subject=Hiring Inquiry"
                target="_blank" 
                rel="noopener noreferrer"
                >
                <button className="px-8 py-3 font-bold text-white transition-all bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 active:scale-95">
                    Contact Me
                </button>
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;