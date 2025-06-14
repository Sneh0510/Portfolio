import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

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
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const handleScrollNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -130,
        });
      }, 100);
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -130,
      });
    }

    // Close menu if it's open
    if (menuOpen) {
      dispatch(toggleMenu());
    }
  };

  const handleRouteNavigation = (route) => {
    if (location.pathname !== route) {
      navigate(route);
    }
    if (menuOpen) {
      dispatch(toggleMenu());
    }
  };

  return (
    <ul className="
      flex 
      lg:flex-row 
      sm:flex-col 
      gap-6 
      text-white 
      font-body 
      lg:relative 
      sm:relative 
      sm:text-center 
      sm:items-center 
      sm:justify-center 
      left-[50%] -translate-x-[50%] 
      lg:text-md 
      sm:text-xl 
      sm:bg-cyan/30 
      backdrop-blur-lg 
      lg:bg-black 
      sm:w-full 
      py-4"
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          {link.isRoute ? (
            <button
              onClick={() => handleRouteNavigation(link.section)}
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
      ))}
    </ul>
  );
};

export default NavbarLinks;
