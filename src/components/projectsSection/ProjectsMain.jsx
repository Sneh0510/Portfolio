import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import AnimatedBlock from "../../framerMotion/AnimatedBlock";

const ProjectsMain = () => {
  const projects = [
    {
      name: "Imagify",
      year: "March 2025",
      align: "right",
      image: "/images/Imagify.png",
      link: "https://imagify-rho-three.vercel.app/",
      github: "https://github.com/Sneh0510/Imagify",
    },
    {
      name: "Learning Management System",
      year: "March 2025",
      align: "left",
      image: "/images/lms.png",
      link: "https://lms-azure-three.vercel.app/",
      github: "https://github.com/Sneh0510/LMS",
    },
    {
      name: "Spotify-Clone",
      year: "March 2025",
      align: "right",
      image: "/images/spotify.png",
      link: "https://spotify-clone-henna-tau.vercel.app/",
      github: "https://github.com/Sneh0510/Spotify-clone",
    },
    {
      name: "Slot Booking",
      year: "March 2025",
      align: "left",
      image: "/images/slot_booking.png",
      link: "https://slot-booking-livid.vercel.app/",
      github: "https://github.com/Sneh0510/Cursor-Wave",
    },
    {
      name: "Real Estate Management System",
      year: "Aug 2024",
      align: "right",
      image: "/images/rems.png",
      link: "#",
      github: "https://github.com/Sneh0510/Real-Estate-Management-System",
    },
    {
      name: "Cursor-Wave",
      year: "Jan 2025",
      align: "left",
      image: "/images/website-img-3.jpg",
      link: "#",
      github: "https://github.com/Sneh0510/Cursor-Wave",
    },
  ];

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 pt-4">
      <AnimatedBlock>
        <ProjectsText />
      </AnimatedBlock>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          const delay = index * 0.3;
          return (
            <AnimatedBlock key={index} delay={delay} direction={project.align}>
              <SingleProject
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
                link={project.link}
                github={project.github}
              />
            </AnimatedBlock>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
