import React from 'react';
//import Carousel from 'react-bootstrap';
function Ecosystem() {
  return (
    <section className="relative">


      <div className="max-w-6xl mx-auto">
        <div className="pt-0 md:pt-20">

          {/* Section header */}
          <div className="relative max-w-6xl text-left md:text-center mx-auto px-6 lg:px-0 pt-12">
            <h3 className="text-teal-500 font-bold">Partners</h3>
            <h2 className="h3 mb-4">Meet Our Partners</h2>
                
          </div>

          {/* Items */}
          <div className="max-w-6x1 md:max-w-6xl mx-auto grid gap-0 grid-cols-4 md:grid-cols-4 px-0">

            {/* Item */}
            <div className="flex items-start pt-0 col-span-2 col-auto md:col-auto">
            <img className="cursor-pointer relative full" src={require('../images/atalaprism.png')} width="600" height="96" alt="Atala Prism" onClick={() => openInNewTab('https://atalaprism.io/app')}/>
            </div>

            {/* Item */}
            <div className="flex items-center pt-0 col-span-2 md:col-auto" >
            <img className="cursor-pointer relative full" src={require('../images/credmark.png')} width="600" height="96" alt="Credmark" onClick={() => openInNewTab('https://www.credmark.com/')}/>
            </div>

            {/* Item */}
            <div className="flex items-center  pt-0 col-span-2 md:col-auto">
            <img className="cursor-pointer relative full" src={require('../images/mlabs.png')} width="600" height="96" alt="MLabs" onClick={() => openInNewTab('https://www.mlabs.city/')} />
            </div>

            {/* Item */}
            <div className="flex items-center pt-0 col-span-2 md:col-auto">
            <img className="cursor-pointer relative full" src={require('../images/tweag.png')} width="600" height="96" alt="Tweag" onClick={() => openInNewTab('https://www.tweag.io/')} />
            </div>

            {/* Item */}
           

          </div>
         

        </div>
      </div>
    </section>
  );
}
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
export default Ecosystem;