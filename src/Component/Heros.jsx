import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDiscord, FaDownload, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
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
    <section id="home" className="relative flex items-center min-h-screen overflow-hidden transition-colors duration-500 bg-white dark:bg-slate-950">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 
      dark:bg-indigo-500/20 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 
      dark:bg-purple-500/20 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="container relative z-10 grid items-center grid-cols-1 gap-12 px-6 mx-auto lg:grid-cols-2">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-left lg:order-1"
        >
          <h1 className="mb-4 text-xl font-bold leading-tight md:text-3xl text-slate-900 dark:text-white">
            Hi, My Name is <br />
            <span className="text-5xl text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Kauser Hossen
            </span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold md:text-4xl text-slate-800 dark:text-slate-200">
            And I'm a {' '}
            <span className="text-indigo-500">
              <Typewriter
                words={['Data Analyst', 'Power BI Expert', 'SQL Developer', 'Web Enthusiast']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="max-w-xl mb-8 text-lg leading-relaxed text-slate-600 dark:text-gray-400">
            Professionally driven by data insights using <strong>Excel, SQL, and Power BI</strong>. 
            I also enjoy crafting interactive web experiences, blending analytical precision with creative development.
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

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all border rounded-lg shadow-sm w-11 h-11 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-600 hover:border-indigo-600"
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
          className="relative flex items-center justify-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] border-2 border-transparent 
            border-t-indigo-500 border-b-purple-500 rounded-full"
          />

          <div className="relative w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-2xl md:w-80 md:h-80 bg-slate-200 dark:bg-slate-800 dark:border-slate-900">
            <img 
              src={heroImg}
              alt="Kauser Hossen"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -z-10 w-full h-full bg-indigo-500/20 blur-[80px] rounded-full" />
        </motion.div>

      </div>
    </section>
  );
};

export default Heros;