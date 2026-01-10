import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDiscord, FaDownload, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // FaWhatsapp ইম্পোর্ট করা হয়েছে
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll'; 
import heroImg from '../assets/Hero.png';
import MyResume from '../assets/KAUSER HOSSEN.pdf'; 

const Heros = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/KauserDev" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/kauserdev" },
    { icon: <FaWhatsapp />, href: "https://wa.me/8801567951248" },
    { icon: <FaDiscord />, href: "https://discord.com/channels/@me" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 
      dark:bg-indigo-500/20 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 
      dark:bg-purple-500/20 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left order-2 lg:order-1"
        >
          <h1 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Hi, My Name is <br />
            <span className="text-transparent text-5xl md:text-7xl bg-clip-text 
            bg-gradient-to-r from-indigo-500 to-purple-500">
              Kauser Hossen
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
            And I'm a {' '}
            <span className="text-indigo-500">
              <Typewriter
                words={['Front-end Developer', 'UI/UX Expert', 'React.js Developer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            Passionate about crafting dynamic and user-friendly web solutions with a perfect blend of 
            design and functionality. I bring ideas to life through clean code and creative design.
          </p>

          {/* Button Group */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <motion.a
              href={MyResume}
              download="Kauser_Hossen_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold 
              shadow-lg shadow-indigo-500/30 flex items-center gap-2 transition-all cursor-pointer"
            >
              <FaDownload /> Download CV
            </motion.a>

            <Link to="contact" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 
                hover:bg-indigo-600 hover:text-white rounded-lg font-bold transition-all flex items-center gap-2"
              >
                <FaEnvelope /> Let's Talk
              </motion.button>
            </Link>
          </div>

          {/* Social Links - WhatsApp সহ */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-slate-100 
                dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 
                dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-600 
                hover:border-indigo-600 transition-all shadow-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] border-2 border-transparent 
            border-t-indigo-500 border-b-purple-500 rounded-full"
          />

          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-200 dark:bg-slate-800 rounded-full 
          overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
            <img 
              src={heroImg}
              alt="Kauser Hossen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 w-full h-full bg-indigo-500/20 blur-[80px] rounded-full" />
        </motion.div>

      </div>
    </section>
  );
};

export default Heros;