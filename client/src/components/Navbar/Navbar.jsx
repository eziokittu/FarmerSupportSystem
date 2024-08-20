import React from 'react';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -150
    });
  };

  return (
    <div className='bg-gray-200 z-20 fixed h-24 md:h-14 lg:h-8 w-full border-y-2 border-black'>

      <div className='w-full md:w-[650px] lg:w-[960px] xl:w-[1260px] mx-auto text-center flex flex-col'>
        <div className='flex flex-row justify-between'>
          {/* Website Title */}
          <div
            onClick={() => scrollToSection('home')}
            className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
          >Farmer Support System</div>

          {/* Options */}
          <div className='hidden lg:flex flex-row gap-4 text-gray-700'>

            {/* Plant Diseases */}
            <div
              onClick={() => scrollToSection('plant-diseases')}
              className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
            >Plant Disease Detection</div>

            {/* Home */}
            <div
              onClick={() => scrollToSection('crop-recommendation')}
              className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
            >Crop Recommendation</div>

            {/* Home */}
            <div
              onClick={() => scrollToSection('market-prediction')}
              className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
            >Market Price Prediction</div>

          </div>

          {/* Credits */}
          <div
            onClick={() => scrollToSection('credits')}
            className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
          >Credits</div>
        </div>

        {/* options */}
        <div className='flex lg:hidden flex-col md:flex-row text-gray-700 justify-between'>

          {/* Plant Diseases */}
          <div
            onClick={() => scrollToSection('plant-diseases')}
            className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
          >Plant Disease Detection</div>

          {/* Home */}
          <div
            onClick={() => scrollToSection('crop-recommendation')}
            className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
          >Crop Recommendation</div>

          {/* Home */}
          <div
            onClick={() => scrollToSection('market-prediction')}
            className='cursor-pointer hover:underline transition-all duration-300 hover:text-black'
          >Market Price Prediction</div>

        </div>
      </div>

    </div>
  )
}

export default Navbar