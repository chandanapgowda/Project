import React from 'react';
import Slider from './component/Slider.js';
import AboutUs from './component/Aboutus.js';
import OurServices from './component/ourServices.js';
import OurLocation from './component/ourLocation.js';
import MapContainer from './component/Map.js';
import locationSection from './component/photoGallery.js';

import Navbar from './component/Navbar.js';

function App() {
  return (
    <div className='App' >
     <Navbar />
   
      <Slider />
     
      <AboutUs />
      
      <ourServices />

      <OurLocation />

      <MapContainer />

      <locationSection />

    </div>
  )
}

export default App;
    

    

