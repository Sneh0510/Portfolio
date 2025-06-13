import React from "react";
import { motion } from 'framer-motion';

const CertificateText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] pt-4">
      <motion.h2
        className="mb-10 text-6xl text-cyan"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <motion.p
        className="text-2xl text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Earned certifications showcasing proficiency in responsive design, full-stack MERN development, API integration, and developing dynamic front-end experiences.
      </motion.p>
    </div>
  );
};

export default CertificateText;
