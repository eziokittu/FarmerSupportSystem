/* eslint-disable react/prop-types */
import { scroller } from "react-scroll";

const scrollToSection = (section) => {
  scroller.scrollTo(section, {
    duration: 1500,
    delay: 100,
    smooth: "easeOutBack",
    _offset: -280,
  });
};

const NavbarButton = ({buttonName, buttonLinkName, extraClasses}) => {
  return (
    <div
      onClick={() => scrollToSection(buttonLinkName)}
      className={`cursor-pointer hover:underline transition-all duration-300 hover:text-black ${extraClasses}`}
    >
      {buttonName}
    </div>
  );
};

export default NavbarButton;
