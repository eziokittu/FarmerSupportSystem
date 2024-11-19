/* eslint-disable react/prop-types */
import { scroller } from "react-scroll";

const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 1500,
    delay: 100,
    smooth: "easeOutBack",
    _offset: -150,
  });
};

const NavbarButton = ({buttonName, buttonLinkName}) => {
  return (
    <div
      onClick={() => scrollToSection(buttonLinkName)}
      className="cursor-pointer hover:underline transition-all duration-300 hover:text-black"
    >
      {buttonName}
    </div>
  );
};

export default NavbarButton;
