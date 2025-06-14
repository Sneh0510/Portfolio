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
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        dispatch(closeMenu());
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, dispatch]);

  return (
    <button
      ref={buttonRef}
      className="p-3 text-2xl border rounded-full border-orange"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
