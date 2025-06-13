import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useEffect } from "react";

const FooterMain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "/projects" },
    { name: "Certificates", section: "/certificates" },
    { name: "Contact", section: "contact" },
  ];

  const handleScrollLinkClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -120,
        });
      }, 300); // small delay to ensure DOM is loaded
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -120,
      });
    }
  };

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Sneh Yadav</p>
        <ul className="flex gap-4 text-xl text-lightGrey">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                {item.section.startsWith("/") ? (
                  <RouterLink
                    to={item.section}
                    className="transition-all duration-500 cursor-pointer hover:text-white"
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  <span
                    onClick={() => handleScrollLinkClick(item.section)}
                    className="transition-all duration-500 cursor-pointer hover:text-white"
                  >
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 Sneh | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
