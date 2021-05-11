import React from 'react'

function Team() {
    return (
        <section className="relative mx-auto sm:px-6">
          
          <div className="max-w-6xl mx-auto text-left pt-32 sm:px-6">
            <h3 className="text-teal-500 font-bold">Team</h3>
            <h2 className="h3 mb-4">Core Team</h2>
                <p>The Liqwid team is composed of traditional finance industry veterans, defi Students of the game and Haskell developers.</p>
          </div>
          <div className="max-w-6xl mx-auto text-left " data-aos="zoom-y-out">
            <div className="relative flex items-start border-gray-200 bg-white">
                
              {/* Testimonial */}
              <div className="px-0 py-0 pt-12 mx-auto text-left pt-32 sm:px-6">
                
                  <div className="max-w-sm md:max-w-6xl mx-auto grid gap-6 grid-cols-4 md:grid-cols-6">
                  <div className="relative flex flex-col items-left p-0 bg-white">
                  <img className="relative " src={require('../images/Team/dc.png')} width="125" height="125" alt="Dewayne Cameron" />   
                  <p className="text-l text-black  mb-1">Dewayne Cameron</p>
                  <p className="text-teal-500">Founder</p>
           </div>
           <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/ja.png')} width="125" height="125" alt="Joshua Akpan" />  
             <p className="text-l text-black  mb-1">Joshua Akpan</p>
             <p className="text-teal-500">Co-Founder</p>
           </div>
           <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/tv.png')} width="125" height="125" alt="Dewayne Cameron" />  
             <p className="text-l text-black  mb-1">Tashoma Vilini</p>
             <p className="text-teal-500">Co-Founder</p>
           </div>
           <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/hh.png')} width="125" height="125" alt="Dewayne Cameron" />  
             <p className="text-l text-black  mb-1">Holger Hartstock</p>
             <p className="text-teal-500">Tech Lead</p>
           </div>
           <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/fv.png')} width="125" height="125" alt="Dewayne Cameron" />  
             <p className="text-l text-black  mb-1">Florian Volery</p>
             <p className="text-teal-500">Product Lead</p>
           </div>
           <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/emily.png')} width="125" height="125" alt="Dewayne Cameron" />  
           <p className="text-l text-black  mb-1">Emily Martins</p>
             <p className="text-teal-500">Core Developer</p>
           </div>
                  
                  
                  </div>
              </div>

            </div>
          </div>
          <div className="max-w-6xl mx-auto text-left pt-32 md:pt-12">
            <h3 className="text-teal-500 font-bold">Team</h3>
            <h2 className="h3 mb-4">Advisors</h2></div>
            <div className="max-w-6xl mx-auto text-left " data-aos="zoom-y-out">
            <div className="relative flex items-start border-gray-200 bg-white">
                
              {/* Testimonial */}
              <div className="px-0 py-8 pt-0 mx-auto text-left pt-32 sm:px-6">
                
                  <div className="max-w-sm md:max-w-6xl mx-auto grid gap-6 grid-cols-4 md:grid-cols-6">
                  <div className="relative flex flex-col items-left p-0 bg-white">
                  <img className="relative " src={require('../images/Team/advisor-ac.png')} width="125" height="125" alt="Dewayne Cameron" />   
                  <p className="text-l text-black  mb-1">Alex Cater</p>
             <p className="text-teal-500">Strategic Advisor</p>
             </div>
             <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/advisor-hp.png')} width="125" height="125" alt="Dewayne Cameron" />  
           <p className="text-l text-black  mb-1">Hinrich Pfeifer</p>
             <p className="text-teal-500">Cardano Foundation</p>
           </div>
           <div className="relative flex flex-col items-left p-0 bg-white">
           <img className="relative " src={require('../images/Team/advisor-ld.png')} width="125" height="125" alt="Dewayne Cameron" />  
           <p className="text-left text-black mb-1">Larry Doyle</p>
             <p className="text-teal-500">Economic Advisor</p>
           </div>
             </div>
             
             </div>
             </div>
             </div>
        </section>
    )
}

export default Team
