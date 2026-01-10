
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

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
  }
];

const MyService = () => {
  return (
    <section id="service" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            My <span className="text-indigo-600">Services</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I provide high-quality services to help you build your digital presence and grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 bg-white dark:bg-slate-800 rounded-3xl 
              border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-indigo-500/20 
              transition-all duration-300 overflow-hidden"
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
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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