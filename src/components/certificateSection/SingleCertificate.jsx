import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ title, platform, image }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{
        scale: 1.08,  // slightly more zoom
        y: -5,        // little lift
        boxShadow: "0px 10px 20px rgba(150, 155, 255, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="overflow-hidden border rounded-lg"
      style={{
        borderColor: '#2b293d',
        backgroundColor: '#1a1823',
        transition: 'all 0.3s',
      }}
    >
      <img src={image} alt={title} className="object-cover w-full h-64" />
      <div className="p-4 text-center">
        <h3 className="mb-2 text-2xl text-white">{title}</h3>
        <p className="text-lg text-cyan">{platform}</p>
      </div>
    </motion.div>
  );
};

export default SingleCertificate;
