import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const AboutMeText = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p className="text-lg">
        I’m Sneh, Versatile MERN Stack Developer with strong skills in
        JavaScript, React.js, Node.js, Express.js, and MongoDB. Experienced in
        building scalable web applications with clean, efficient code. Leverages
        AI tools like ChatGPT to accelerate development and problem-solving.
        Delivers high-quality results quickly and thrives in collaborative
        environments.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 mt-10 text-lg transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
          onClick={() => navigate("/projects")}
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
