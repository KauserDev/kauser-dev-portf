import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt, FaRobot } from 'react-icons/fa'; // FaRobot add hoyeche

const services = [
  {
    id: 1,
    icon: <FaCode className="text-4xl" />,
    title: "Web Development",
    description: "Building responsive and high-performance websites using React.js, Tailwind CSS, and modern web technologies.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    icon: <FaPaintBrush className="text-4xl" />,
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces that provide a great user experience and visual appeal.",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-4xl" />,
    title: "Responsive Design",
    description: "Ensuring your website looks perfect on all devices, including mobile phones, tablets, and desktops.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    icon: <FaRobot className="text-4xl" />,
    title: "AI-Powered Dev",
    description: "Utilizing AI tools to accelerate coding, debugging, and project delivery with maximum precision and speed.",
    color: "from-orange-500 to-red-600"
  }
];

const MyService = () => {
  return (
    <section id="service" className="py-20 transition-colors duration-500 bg-slate-50 dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-5xl text-slate-900 dark:text-white"
          >
            My <span className="text-indigo-600">Services</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto mt-4 text-slate-600 dark:text-slate-400">
            I provide high-quality services leveraging modern tools and AI to help you build your digital presence faster.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 overflow-hidden transition-all duration-300 bg-white border shadow-xl group dark:bg-slate-800 rounded-3xl border-slate-200 dark:border-white/10 hover:shadow-indigo-500/20"
            >
              {/* Background Glow on Hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} 
                opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl 
                bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg 
                transform group-hover:rotate-6 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>

              {/* Bottom Decorative Bar */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} 
                w-0 group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyService;