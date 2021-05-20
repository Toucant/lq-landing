import React from 'react';
import {Link} from 'react-router-dom';

function HeroHome() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
     
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="relative md:absolute text-center items-center sm:pt-4 pb-0 md:pt-10 md:pb-0 lg:bg-hero-lg">

          {/* Section header */}
         
          <div className="text-left justify-center pb-0 md:pb-0 pl-0 md:pl-32 ">
          {/* liqwid_head */} 
          {/* Liqwid-render-green-purplev2@2x.png */}
          <span className="select-none text-left text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              <br/><br/></span>

            <h1 className="text-5xl text-center md:text-5xl font-extrabold leading-tighter tracking-tighter mb-6" data-aos="zoom-y-out">The eUTXO Liquidity Protocol</h1>
            <div className="max-w-1xl mx-auto text-center pl-0">
            {/* <img class="float-right canvas" src={require('../images/Mask_Group_1.png')} alt="deco"></img> */}
              <p className="text-l text-gray-600 mb-0" data-aos="zoom-y-out" data-aos-delay="150">Liqwid is an open source, algorithmic and non-custodial interest rate protocol built for lenders, borrowers and developers.
              <br/><br/></p> 
              {/* <Link to="#" className="text-teal-600 align-center font-bold ">Launch app &#x2192;</Link> */}
              
            </div>
            
          </div>
         
        </div>
        
      </div>
      <img className="h-100 md:w-screen visible display-none" src={require('../images/Liqwid-render-green-purplev2@2x.png')} alt="Liqwid background" />
      
    </section>
  );
}

export default HeroHome;