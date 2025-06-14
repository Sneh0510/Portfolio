import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center py-1.5 px-4 rounded-full border-orange border-[0.5px] transition-all duration-300">
        <NavbarLogo />

        {/* Desktop links */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      {/* Hamburger button */}
      <div className="flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-orange border-[0.5px] transition-all duration-300">
        <NavbarToggler />
      </div>

      {/* Mobile menu with transition */}
      <div className={`absolute top-[80px] w-full left-0 right-0 z-10 transition-all duration-500 ease-in-out transform origin-top ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
        <div className="bg-black px-4 py-4 rounded-b-2xl border-orange border-[0.5px]">
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
