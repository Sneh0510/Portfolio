import CertificateText from "./CertificateText";
import SingleCertificate from "./SingleCertificate";
import AnimatedBlock from "../../framerMotion/AnimatedBlock";

const certificates = [
  {
    title: "Python for Data Science",
    platform: "NPTEL",
    image: "/certificates/NPTEL_PYTHON.png",
  },
  {
    title: "AI for Beginners",
    platform: "HP",
    image: "/certificates/hp.png",
  },
  {
    title: "JS fundamentals",
    platform: "GreatStack",
    image: "/certificates/greatstack.png",
  },
  {
    title: "AI Tools Workshop",
    platform: "BE10x",
    image: "/certificates/be10x.png",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    platform: "Tata Forage",
    image: "/certificates/forage.png",
  },
  {
    title: "EDA analysis using power BI",
    platform: "SkillEcted",
    image: "/certificates/power_bi.png",
  },
  {
    title: "Mastering Date and Time in Python",
    platform: "SkillEcted",
    image: "/certificates/PYTHONN.png",
  },
  
];

const CertificationMain = () => {
  return (
    <div id="certificates" className="max-w-[1200px] mx-auto px-4 pt-4">
      <AnimatedBlock>
        <CertificateText />
      </AnimatedBlock>

      <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => {
          const delay = index * 0.2;
          return (
            <AnimatedBlock key={index} delay={delay}>
              <SingleCertificate {...cert} />
            </AnimatedBlock>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationMain;
