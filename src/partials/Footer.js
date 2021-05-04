import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
                </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              Liqwid · Finance
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Protocol</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</Link>
              </li>              
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Docs</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">GitBook</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Medium</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">White Paper</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Github</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Community</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">IdeaScale</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Twitter</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Discord</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
                

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-blue-600 hover:underline" href="https://cruip.com/">Dirty Mike and the Boys</a></div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
