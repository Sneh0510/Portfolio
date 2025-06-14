import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../../state/menuSlice";
import { useEffect, useRef } from "react";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const buttonRef = useRef();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
        dispatch(closeMenu());
      }
    };

    const handleScroll = () => {
      if (menuOpen) {
        dispatch(closeMenu());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, dispatch]);

  return (
    <button
      ref={buttonRef}
      className={`text-2xl p-3 border border-orange rounded-full transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
