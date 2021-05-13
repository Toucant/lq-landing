import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-0">

        {/* Top area: Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-9 grid-rows-2 md:grid-rows-1 md:gap-8 md:pt-12 border-t border-gray-200 pt-16 md:pt-0 ">

          {/* 1st block */}
          <div className="col-span-full row-span-full md:row-span-1 sm:mx-auto items-center md:col-span-4 md:pl-0">
            
              {/* Logo */}
              
              <img className="relative full mb-0 pr-4 w-screen md:pr-0 md:w-48" src={require('../images/liqwid_FINAL_v2-01.png')}  height="96" alt="Testimonial 01" />
            <p className="text-sm text-gray-600 md:w-48 text-center py-4 ">Liqwid · Finance </p>
              <ul className="flex px-0 mx-auto ml-4 row-span-full pl-10 md:pl-0">
              
            <li>
              <a href="https://twitter.com/liqwidfinance" className="flex text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a href="https://github.com/Liqwidfinance" className="flex text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 -.5 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a href="https://liqwid-finance.medium.com/" className="flex  text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Medium">
              <svg className="w-8 h-8 fill-current" viewBox="-12 -4 48 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
              </svg>
              </a>
            </li>
            <li className="ml-2 pb-6">
              <a href="https://discord.com/invite/CRG8dr2c76" className="flex  text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Discord">
              <svg className="w-8 h-8 fill-current" viewBox="-12 -6.2 48 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
                </svg>
              </a>
            </li>
            </ul>
           
          </div>

          {/* 2nd block */}
          <div className="flex-col text-center md:text-left md:col-span-1">
            <h6 className="text-gray-800 font-medium mb-2 font-bold">Protocol</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">App</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Markets</Link>
              </li>
              <li className="mb-2">
                <a href="https://liqwid-labs.gitbook.io/liqwid-docs/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Docs</a>
              </li>            
            </ul>
          </div>

          {/* 3rd block */}
          <div className="flex-col text-center md:text-left">
            <h6 className="text-gray-800 font-medium mb-2 font-bold">Governance</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <span onClick={() => openInNewTab('https://liqwid-labs.gitbook.io/liqwid-docs')} className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Docs</span>
              </li>
              <li className="mb-2">
                <span onClick={() => openInNewTab('https://drive.google.com/file/d/1HN65TDm7-06m7XwiXmLQeWFevZYKgEZG/view')} className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">White Paper</span>
              </li>
              <li className="mb-2">
                <span onClick={() => openInNewTab('https://github.com/Liqwidfinance')} className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Github</span>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="flex-col text-center md:text-left">
            <h6 className="text-gray-800 font-medium mb-2 font-bold">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About</span>
              </li>
              <li className="mb-2">
                <a href="https://liqwid-labs.gitbook.io/liqwid-docs/faq" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">FAQ</a>
              </li>
            </ul>
          </div>

                

        </div>

        {/* Bottom area */}
        <div className="md:flex md:justify-center pt-0 md:pt-6 pb-8 border-t border-gray-200">
          
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 text-center md:text-left">All rights reserved <a className="text-blue-600 hover:underline" href="https://github.com/Toucant">Liqwid Finance</a></div>

        </div>

      </div>
    </footer>
  );
}
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
export default Footer;
