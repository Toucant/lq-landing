import React from 'react';
//import Carousel from 'react-bootstrap';
function Ecosystem() {
  return (
    <section className="relative">


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pt-32 md:pt-12">
            <h3 className="text-teal-500 font-bold">Partners</h3>
            <h2 className="h3 mb-4">Partners in the Ecosystem</h2>
                <p>The Liqwid team is composed of traditional finance industry veterans, defi Students of the game and Haskell developers.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 sm:col-auto md:col-auto">
            <img className="relative full" src={require('../images/atalaprism.png')} width="600" height="150" alt="Atala Prism" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img className="relative full" src={require('../images/credmark.png')} width="600" height="96" alt="Credmark" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img className="relative full" src={require('../images/mlabs.png')} width="600" height="96" alt="MLabs" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            <img className="relative full" src={require('../images/tweag.png')} width="600" height="96" alt="Tweag" />
            </div>

            {/* Item */}
           

          </div>
         

        </div>
      </div>
    </section>
  );
}

export default Ecosystem;