
import { motion } from 'framer-motion';
import aboutImg from '../assets/Hero.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 
    transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            About <span className="text-indigo-600">Me</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl 
            overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src={aboutImg} 
                alt="About Kauser" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full max-w-md h-full 
            border-4 border-indigo-600 rounded-2xl -z-0 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
              I'm a Passionate <span className="text-indigo-500">Front-End Developer</span>
            </h3>
            
            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed text-justify">
              Hello! I'm Kauser Hossen, a web developer who loves building clean, interactive, and user-centric websites. 
              My journey in web development started with a curiosity about how things work on the internet, 
              which turned into a career where I focus on crafting high-quality digital experiences.
            </p>

            <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed text-justify">
              I specialize in <span className='font-medium'>React.js, Tailwind CSS, and JavaScript</span>
              . I enjoy solving complex problems 
              and turning design mockups into fully functional web applications. My goal is to always 
              deliver code that is not only efficient but also maintainable.
            </p>

            {/* Stats/Info Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-indigo-600 font-bold text-xl">10+</p>
                <p className="text-slate-500 dark:text-slate-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-indigo-600 font-bold text-xl">1.5+</p>
                <p className="text-slate-500 dark:text-slate-400">Years Experience</p>
              </div>
            </div>

            {/* Read More or Hire Button */}
            <div className="pt-6">
               <a 
                href="mailto:kauserhossendev@gmail.com?subject=Hiring Inquiry"
                target="_blank" 
                rel="noopener noreferrer"
                >
                <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg 
                shadow-lg hover:bg-indigo-700 transition-all active:scale-95">
                    Hire Me
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