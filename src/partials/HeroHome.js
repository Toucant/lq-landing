import React from 'react';
import {Link} from 'react-router-dom';

function HeroHome() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
     
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="sm:pt-4 pb-12 md:pt-10 md:pb-0 lg:bg-hero-lg">

          {/* Section header */}
         
          <div className="text-left pb-6 md:pb-16  bg-hero">
          
          <span className="select-none text-left text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              <br/>___</span><img className="relative sm:w-auto md:w-px-125" src={require('../images/liqwid_head.png')} alt="Dewayne Cameron" />
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-6" data-aos="zoom-y-out">The eUTXO Liquidity Protocol</h1>
            <div className="max-w-1xl mx-auto">
            {/* <img class="float-right canvas" src={require('../images/Mask_Group_1.png')} alt="deco"></img> */}
              <p className="text-l text-gray-600 mb-0" data-aos="zoom-y-out" data-aos-delay="150">Liqwid is an open source, algorithmic and non-custodial interest rate protocol built for lenders, borrowers and developers.<br/><br/></p> <Link to="#" className="text-teal-600 font-bold">Launch app &#x2192;</Link>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">  
              </div>
            </div>
          </div>
         
        </div>
        
      </div>
      
    </section>
  );
}

export default HeroHome;