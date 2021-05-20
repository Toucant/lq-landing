import React, {useState} from 'react';
import Supply from './SubMenu/Supply';
import Borrow from './SubMenu/Borrow';
import Documents from './SubMenu/Documents';
import Governance from './SubMenu/Governance';
import QToken from './SubMenu/QToken';
import LQ from './SubMenu/LQ';


// function setView(viewName) {
//   this.setView((viewName) => {
    
//   })
// }
// function testView() {
//   this.setView((viewState)=> {
//     return {viewState}
//   })
// };
export default function FeaturesBlocks() {
  const [viewState, setView] = useState("Supply");
  return (
    <section id="Solutions" className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-0 md:py-6 md:pt-32">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-left pt-0 md:pt-16">
            <h3 className="text-teal-500 font-bold">Solutions</h3>
            <h2 className="h3 mb-4">Liqwid Solutions</h2>
        
          </div>
          
          {/* Items */}
          <div className="max-w-6x1 mx-auto gap-0  grid grid-flow-col grid-rows-2 md:grid-rows-1 md:grid md:flex-grid md:grid-cols-5 items-start align-left md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400 focus:border-teal-400" onClick={()=> setView("Supply")}>
             
              <h4 id="Supply" className="text-m md:text-xl leading-behind font-bold md:{leading-snug tracking-tight} " >Supply</h4>
            </div>

            {/* 2nd item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("Borrow")}>
              
              <h4 id="Borrow"className="text-m md:text-xl font-bold md:{font-bold leading-snug tracking-tight} ">Borrow</h4>
            </div>

            {/* 3rd item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("QToken")}>
              
              <h4 id="QToken" className="text-m md:text-xl font-bold md:{font-bold leading-snug tracking-tight} ">qTokens</h4>
            </div>

            {/* 4th item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("Governance")}>
                        
              <h4 id="Governance" className="text-m md:text-xl font-bold md:{font-bold leading-snug tracking-tight} ">Governance</h4>
            </div>

            {/* 5th item */}
            

            {/* 6th item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("LQ")}>
              <h3 id="LQ" className="text-m md:text-xl  font-bold md:{font-bold leading-snug tracking-tight}">$LQ</h3>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" flex mx-auto px-8 ">
        {viewState === "Supply" && <Supply />}
        {viewState === "Borrow" && <Borrow />}
        {viewState === "QToken" && <QToken />}
        {viewState === "Governance" && <Governance />}
        {viewState === "Documents" && <Documents />}
        {viewState === "LQ" && <LQ />}
        </div>
    </section>
  );
  
}