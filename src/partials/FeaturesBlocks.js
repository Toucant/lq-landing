import React from 'react';
import {Link} from 'react-router-dom';

function FeaturesBlocks() {
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
          <div className="max-w-sm mx-auto grid gap-0 md:grid-cols-2 lg:grid-cols-6 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400">
             
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Supply</h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Borrow</h4>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">qTokens</h4>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400">
                        
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 ">Governance</h4>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Documents</h4>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded border-t-2 hover:border-teal-400">
              <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">$LQ</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
