
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900">
      {/* logo animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center justify-center w-20 h-20 mb-8 bg-indigo-600 shadow-2xl rounded-2xl"
      >
        <span className="text-3xl font-bold text-white">KH</span>
      </motion.div>

      {/* Loading Bar */}
      <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-indigo-500 rounded-full"
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-xs font-medium tracking-widest uppercase text-slate-400"
      >
        Loading Excellence...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;