import React, {useState} from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';

import Footer from '../partials/Footer';
import Ecosystem from '../partials/Ecosystem';
import Team from '../partials/Team';

export default ({children}) => (
  <div>
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        
        {/*children*/}
        {/*Add info from featuresBlocks selector*/}


        
        <Team />
        <Ecosystem />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
    </div>
  )
function Stuff() {
  return <h1>Stuff</h1>
}