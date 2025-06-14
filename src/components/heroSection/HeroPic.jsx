import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import { FaRegSquare } from "react-icons/fa";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex items-center justify-center h-full pt-10 md:pt-0"
    >
      <img
        src="/images/sneh.jpg"
        alt="Sneh Yadav"
        className="max-h-[400px] w-auto rounded-3xl"
      />

      <div className="absolute flex items-center justify-center -z-10 animate-pulse">
        <FaRegSquare className=" md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
