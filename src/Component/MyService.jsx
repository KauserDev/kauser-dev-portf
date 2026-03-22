import { motion } from 'framer-motion';
import { FaDatabase, FaChartBar, FaCode, FaRobot, FaTable } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaChartBar className="text-4xl" />,
    title: "Data Visualization",
    description: "Creating interactive and insightful dashboards using Power BI and Excel to transform complex data into clear business stories.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 2,
    icon: <FaDatabase className="text-4xl" />,
    title: "SQL & DB Management",
    description: "Writing efficient SQL queries for data extraction, manipulation, and managing databases to ensure data integrity and accessibility.",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 3,
    icon: <FaTable className="text-4xl" />,
    title: "Advanced Data Analysis",
    description: "Utilizing Microsoft Excel's advanced features for data cleaning, complex calculations, and reporting to drive decision-making.",
    color: "from-green-600 to-emerald-700"
  },
  {
    id: 4,
    icon: <FaCode className="text-4xl" />,
    title: "Web Enthusiast Dev",
    description: "Building modern and functional web interfaces with React.js and Tailwind CSS, optimized with AI-driven development tools.",
    color: "from-indigo-500 to-purple-600"
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
            Providing expert data solutions and modern web experiences to help businesses make informed, data-driven decisions.
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