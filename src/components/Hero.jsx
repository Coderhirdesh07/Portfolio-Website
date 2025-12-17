import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-4xl text-center">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I’m{" "}
          <span className="text-indigo-500">
            Your Name
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
        >
          I build modern, fast, and scalable web applications using
          React and modern frontend technologies.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex justify-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Floating Background Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl -z-10"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
export default Hero;
