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
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-0 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-left pt-32 md:pt-12">
            <h3 className="text-teal-500 font-bold">Solutions</h3>
            <h2 className="h3 mb-4">Liqwid Solutions</h2>
        
          </div>
          
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-0 md:grid-cols-2 lg:grid-cols-6 items-start align-left md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("Supply")}>
             
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1" >Supply</h4>
            </div>

            {/* 2nd item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("Borrow")}>
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Borrow</h4>
            </div>

            {/* 3rd item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("QToken")}>
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">qTokens</h4>
            </div>

            {/* 4th item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("Governance")}>
                        
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 ">Governance</h4>
            </div>

            {/* 5th item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("Documents")}>
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Documents</h4>
            </div>

            {/* 6th item */}
            <div className="cursor-pointer select-none relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400" onClick={()=> setView("LQ")}>
              <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">$LQ</h3>
            </div>
          </div>
        </div>
        
      </div>
      <div className="relative max-w-6xl mx-auto px-0 sm:px-6">
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