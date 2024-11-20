// import { scroller } from "react-scroll";
import NavbarButton from "../Reusable/NavbarButton";

const Navbar = () => {
  // const scrollToSection = (section) => {
  //   scroller.scrollTo(section, {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: "easeOutBack",
  //     offset: -150,
  //   });
  // };

  return (
    <div className="bg-green-100 z-20 fixed h-16 lg:h-10 w-full border-y-2 border-black">
      <div className="w-full md:w-[650px] lg:w-[960px] xl:w-[1260px] mx-auto text-center flex flex-col items-center lg:items-stretch justify-between">
        <div className="flex flex-row justify-center gap-4 sm:justify-between text-center items-center">
          {/* Website Title */}
          <NavbarButton
            buttonName={"Krishi-Rakshak (कृषि रक्षक)"}
            buttonLinkName={"overview"}
            extraClasses={"font-bold text-xl sm:text-2xl"}
          />

          {/* Options */}
          <div className="hidden lg:flex flex-row gap-4 text-gray-700">
            {/* Project Overview */}
            <NavbarButton buttonName={"Overview"} buttonLinkName={"overview"} />

            {/* Plant Disease Model */}
            <NavbarButton buttonName={"Model"} buttonLinkName={"model"} />

            {/* Project Members */}
            <NavbarButton buttonName={"Members"} buttonLinkName={"members"} />
          </div>
        </div>

        {/* options */}
        <div className="grid lg:hidden grid-cols-3 text-gray-700 justify-between items-center w-full">
          {/* Project Overview */}
          <NavbarButton buttonName={"Overview"} buttonLinkName={"overview"} />

          {/* Plant Disease Model */}
          <NavbarButton buttonName={"Model"} buttonLinkName={"model"} />

          {/* Project Members */}
          <NavbarButton buttonName={"Members"} buttonLinkName={"members"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
