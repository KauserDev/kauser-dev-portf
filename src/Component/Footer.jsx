import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord, FaWhatsapp, FaArrowUp } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/KauserDev" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/kauserdev" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/kauserdev0" },
    { icon: <FaDiscord />, href: "https://discord.com/channels/@me" },
    { icon: <FaWhatsapp />, href: "https://wa.me/8801567951248" },
  ];

  //animated logic
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <footer className="relative px-6 pt-16 pb-8 overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] 
      bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 gap-10 mb-12 text-center sm:grid-cols-2 lg:grid-cols-3 md:text-left">
          
          {/* Logo Section */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-4 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 font-bold text-white shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                KH.
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Kauser<span className="text-indigo-500">.dev</span>
              </span>
            </div>
            <p className="max-w-xs mx-auto text-sm leading-relaxed text-gray-400 md:mx-0">
              Expert in Data Analytics (SQL, Power BI, Excel) and Front-end Development. 
              Helping businesses grow through data-driven solutions and modern web design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 md:flex md:flex-col md:gap-3">
              {['Home', 'About', 'Service', 'Skills', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-sm text-gray-400 transition-colors cursor-pointer hover:text-indigo-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-end">
            <h3 className="mb-4 text-lg font-semibold text-white">Stay Connected</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-full shadow-sm bg-white/5 border-white/10 hover:bg-indigo-600 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-500 md:text-sm">Email: kauserhossendev@gmail.com</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-white/5 sm:flex-row"
        >
          <p className="text-xs text-center text-gray-500 md:text-sm">
            © {currentYear} <span className="font-medium text-indigo-500">Kauser Hossen</span>. All rights reserved.
          </p>
          
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="flex items-center gap-2 text-gray-400 transition-all cursor-pointer group hover:text-indigo-500"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-white/5 group-hover:bg-indigo-500"
            >
             <FaArrowUp className="text-xs group-hover:text-white" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;