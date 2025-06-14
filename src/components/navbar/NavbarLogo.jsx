import { useNavigate, useLocation } from "react-router-dom";

const NavbarLogo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      // Already at home, you can optionally scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1
        className="text-2xl text-white sm:hidden md:block"
        onClick={handleLogoClick}
      >
        Sneh Yadav
      </h1>
      <h1
        className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl font-special md:hidden sm:block"
        onClick={handleLogoClick}
      >
        Sneh
      </h1>
    </div>
  );
};

export default NavbarLogo;
