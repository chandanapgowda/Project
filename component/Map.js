import React from 'react';
import './Map.css'

function MapContainer() {
  return (
    <div className="map-container">
      <div className="map">
        <iframe
          src="https://maps.google.com/maps?q=1336%20Phinney's%20Lane%20Unit%201-2,%20Hyannis,%20MA,%2002601,%20US&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
}

export default MapContainer;
