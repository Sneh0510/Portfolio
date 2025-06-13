import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, github }) => {
  const isValidLink = link && link !== "#";
  const isValidGithub = github && github !== "#";

  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className={`flex flex-col gap-4 ${align === "left" ? "md:items-end" : "md:items-start"} sm:items-center`}>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className="text-xl font-thin text-center text-white font-special">{year}</h2>

        {/* If both present → inline */}
        {isValidLink && (
          <div className="flex gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg transition-all duration-500 cursor-pointer text-cyan hover:text-orange"
            >
              View <BsFillArrowUpRightCircleFill />
            </a>

            {isValidGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg transition-all duration-500 cursor-pointer text-cyan hover:text-orange"
              >
                GitHub <FaGithub />
              </a>
            )}
          </div>
        )}

        {/* If only github present → show below */}
        {!isValidLink && isValidGithub && (
          <div>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg transition-all duration-500 cursor-pointer text-cyan hover:text-orange"
            >
              GitHub <FaGithub />
            </a>
          </div>
        )}
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 opacity-50 bg-cyan hover:opacity-0 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
