import { Link as ScrollLink, scroller } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on home, just scroll
      scroller.scrollTo("contact", {
        smooth: true,
        duration: 500,
        offset: -120,
      });
    } else {
      // Navigate to home first, then scroll after small timeout
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("contact", {
          smooth: true,
          duration: 500,
          offset: -120,
        });
      }, 300); // adjust timeout if needed
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-4 py-2 text-xl font-bold text-white transition-all duration-500 border rounded-full cursor-pointer font-body border-cyan bg-gradient-to-r from-darkCyan to-orange hover:scale-110 hover:border-orange hover:shadow-neonShadow"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
