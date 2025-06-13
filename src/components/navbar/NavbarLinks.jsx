import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { link: "About Me", section: "about", isRoute: false },
  { link: "Skills", section: "skills", isRoute: false },
  { link: "Projects", section: "/projects", isRoute: true },
  { link: "Certificates", section: "/certificates", isRoute: true },
  { link: "Contact", section: "contact", isRoute: false },
];

const NavbarLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -130,
        });
      }, 100); // Small delay to allow rendering
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -130,
      });
    }
  };

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            {link.isRoute ? (
              <button
                onClick={() => navigate(link.section)}
                className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
              >
                {link.link}
              </button>
            ) : (
              <button
                onClick={() => handleScrollNavigation(link.section)}
                className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
              >
                {link.link}
              </button>
            )}
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
