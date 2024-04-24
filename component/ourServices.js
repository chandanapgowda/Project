import React from 'react';
import '../component/ourServices';

function OurServices() {
  return (
    <div className="our_services">
      <div className="our_servicesbox">
        <div className="our_servicesbox1">
          <div className="title">OUR SERVICES</div>
          <div className="service_catogory">
            <div className="service_catogory_image">
              <a className="link_catogory_linktag" href="">
                <div className="imagecontent imagecontent2">
                  <img className="categories_image" src="cattoys1.jpg" width="100%" alt="" style={{ display: 'block', border: 0, outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic' }} />
                  <div className="title2">BOUTIQUE</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
