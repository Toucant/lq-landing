import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-12xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className=" flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="text-left block" aria-label="Liqwid">
            <img className="relative full" src={require('../images/liqwid_FINAL_v2-01.png')} width="125" height="96" alt="Logo 01" />
            </Link>
            <ul>
              
            </ul>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center gap-6 font-bold">
              
            <li className="border-t-4 hover:border-teal-400">
              <a href="https://twitter.com/liqwidfinance" className="flex justify-center items-center no-underline text-gray-600 hover:text-gray-900 hover:from-blue-500 hover:to-teal-400 transition duration-150 ease-in-out" aria-label="Twitter">
                Solutions
              </a>
            </li>
            <li className="border-t-4 hover:border-teal-400">
              <a href="https://github.com/Liqwidfinance" className="flex justify-center items-center no-underline text-gray-600  hover:text-gray-900 bg-white hover:bg-white-100  transition duration-150 ease-in-out" aria-label="Github">
                About Us
              </a>
            </li>
            <li className="border-t-4 hover:border-teal-400">
              <a href="https://liqwid-finance.medium.com/" className="flex justify-center items-center no-underline text-gray-600  hover:text-gray-900 bg-white hover:bg-white-100  transition duration-150 ease-in-out" aria-label="Medium">
                Team
              </a>
            </li>
            
            {/*  */}

              <li>
                <Link to="/signup" className="btn-sm font-bold text-gray-200 rounded-full ml-0 bg-gradient-to-r from-teal-600 to-blue-400">
                  <span>Launch App</span>
                                    
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
