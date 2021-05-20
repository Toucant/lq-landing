import React from 'react'

function Team() {
    return (
        <section id="Team"  className="relative pt-8 px-2 md:pt-16">
          <div className ="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-left pt-0 md:pt-12">
            <h3 className="text-teal-500 font-bold">Team</h3>
            <h2 className="h3">Core Team</h2>
                
          </div>
          <div className="max-w-6xl mx-auto text-left " data-aos="zoom-y-out">
            
                
              {/* Core */}
              <div className=" text-left max-w-sm md:max-w-6xl mx-auto grid grid-cols-2 gap-2 md:grid-cols-6 sm:grid-cols-4 sm:grid-rows-1 md:gap-0 md:gap-6 pt-6">
                
                  <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
                  <img className="relative w-auto md:w-px-125" src={require('../images/Team/dc.png')} alt="Dewayne Cameron" />   
                  <p className="text-sm font-bold  text-black  mb-1/2 text-center">Dewayne Cameron</p>
                  <p className="text-teal-500 text-center">Founder</p>
           </div>
           <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/ja.png')} alt="Joshua Akpan" />  
             <p className="text-sm font-bold  text-black  mb-1/2 text-center">Joshua Akpan</p>
             <p className="text-teal-500 text-center">Co-Founder</p>
           </div>
           <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/tv.png')} alt="Tashoma Vilini" />  
             <p className="text-sm font-bold  text-black mb-1 text-center">Tashoma Vilini</p>
             <p className="text-teal-500 text-center">Co-Founder</p>
           </div>
           <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/hh.png')}  alt="Holger Hartstock" />  
             <p className="text-sm font-bold  text-black  mb-1 text-center">Holger Hartstock</p>
             <p className="text-teal-500 text-center">Tech Lead</p>
           </div>
           <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/fv.png')}  alt="Florian Volery" />  
             <p className="text-sm font-bold  text-black  mb-1 text-center">Florian Volery</p>
             <p className="text-teal-500 text-center">Product Lead</p>
           </div>
           <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/emily.png')}  alt="Emily Martins" />  
           <p className="text-sm font-bold  text-black  mb-0 text-center">Emily Martins</p>
             <p className="text-teal-500 text-center">Core Developer</p>
           </div>
                  
                  
                  
              </div>

            
          </div>
          <div className="max-w-6xl mx-auto text-left pt-0 md:pt-12">
            <h3 className="text-teal-500 font-bold">Team</h3>
            <h2 className="h3">Advisors</h2></div>
            <div className="max-w-6xl mx-auto text-left" data-aos="zoom-y-out">
            <div className="relative items-start border-gray-200 bg-white">
                
              {/* Advisors */}
              <div className=" text-left max-w-sm md:max-w-6xl mx-auto grid grid-cols-2 gap-2 md:grid-cols-6 sm:grid-cols-4 sm:grid-rows-1 md:gap-2 md:gap-6 pt-6">
                
                  <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
                  <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/advisor-ac.png')}  alt="Dewayne Cameron" />   
                  <p className="text-sm font-bold  text-black  mb-0 text-center">Alex Cater</p>
             <p className="text-teal-500 text-center">Strategic Advisor</p>
             </div>
             <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/advisor-hp.png')}  alt="Dewayne Cameron" />  
           <p className="text-sm font-bold  text-black  mb-0 text-center">Hinrich Pfeifer</p>
             <p className="text-teal-500 text-center">Cardano Foundation</p>
           </div>
           <div className="relative mx-auto flex flex-col align-center sm:items-center md:items-start bg-white">
           <img className="relative sm:w-auto md:w-px-125" src={require('../images/Team/advisor-ld.png')}  alt="Dewayne Cameron" />  
           <p className="text-sm font-bold  text-black  mb-0 text-center">Larry Doyle</p>
             <p className="text-teal-500 text-center">Economic Advisor</p>
           </div>
             </div>
             </div>
             </div>
             </div>
             
        </section>
    )
}

export default Team
