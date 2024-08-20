import React from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  // for using react-scroll and react-router at the same time
  // const path = useLocation().pathname;
  // const location = path.split('/')[1];
  // const navigate = useNavigate();
  const scrollToSection = (section) => {
    // console.log(section);
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: 0
    });
  };

  return (
    <div className='text-center flex flex-ro justify-between'>
      <div onClick={() => scrollToSection('home')}>
        Home
      </div>
      <div 
        onClick={() => scrollToSection('credits')}
        className='cursor-pointer'
      >
        Credits
      </div>
    </div>
  )
}

export default Navbar