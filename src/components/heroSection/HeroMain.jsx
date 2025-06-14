import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import { simpleFade } from "../../framerMotion/variants";
import { motion } from "framer-motion";

const HeroMain = () => {
  return (
    <div className="pb-16 pt-[120px]">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <div className="flex flex-col gap-6">
          <HeroText />

          <motion.div
            className="flex gap-4"
            variants={simpleFade(0.6)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold text-white transition-all duration-300 bg-cyan rounded-xl hover:bg-cyan-700"
              variants={simpleFade(0.8)}
            >
              View Resume
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 font-semibold transition-all duration-300 bg-transparent border-2 border-cyan text-cyan rounded-xl hover:bg-cyan hover:text-white"
              variants={simpleFade(1)}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
