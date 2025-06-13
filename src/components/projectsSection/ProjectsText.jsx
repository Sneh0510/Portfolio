import React from 'react';
import { motion } from 'framer-motion';

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      
      <motion.h2 
        className="mb-10 text-6xl text-cyan"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.p 
        className="text-2xl text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I have hands-on experience working on diverse MERN stack projects, including responsive business websites, scalable full-stack applications, RESTful APIs, and interactive front-end interfaces.
      </motion.p>

    </div>
  );
};

export default ProjectsText;
