import { scroller } from "react-scroll";
import NavbarButton from "../Reusable/NavbarButton";

const Navbar = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: "easeOutBack",
      offset: -150,
    });
  };

  return (
    <div className="bg-gray-200 z-20 fixed h-20 sm:h-14 lg:h-8 w-full border-y-2 border-black">
      <div className="w-full md:w-[650px] lg:w-[960px] xl:w-[1260px] mx-auto text-center flex flex-col">
        <div className="flex flex-row justify-center gap-4 sm:justify-between">
          {/* Website Title */}
          <NavbarButton
            buttonName={"Krishi-Rakshak (कृषि रक्षक)"}
            buttonLinkName={"overview"}
          />

          {/* Options */}
          <div className="hidden lg:flex flex-row gap-4 text-gray-700">
            {/* Project Overview */}
            <NavbarButton buttonName={"Overview"} buttonLinkName={"overview"} />

            {/* Plant Disease Model */}
            <NavbarButton buttonName={"Model"} buttonLinkName={"model"} />

            {/* Project Code Implementation */}
            <NavbarButton buttonName={"Code"} buttonLinkName={"code"} />

            {/* Project Members */}
            <NavbarButton buttonName={"Members"} buttonLinkName={"members"} />
          </div>
        </div>

        {/* options */}
        <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4 text-gray-700 justify-between">
          {/* Project Overview */}
          <NavbarButton buttonName={"Overview"} buttonLinkName={"overview"} />

          {/* Plant Disease Model */}
          <NavbarButton buttonName={"Model"} buttonLinkName={"model"} />

          {/* Project Code Implementation */}
          <NavbarButton buttonName={"Code"} buttonLinkName={"code"} />

          {/* Project Members */}
          <NavbarButton buttonName={"Members"} buttonLinkName={"members"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
