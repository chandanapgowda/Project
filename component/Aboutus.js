import React from 'react';
import '../component/Aboutus.css';

function AboutUs() {
  return (
    <div className="container">
      <div className="aboutus-image">
        <div className="aboutus-image-img">
          <div className="aboutus-image-img_img">
            <img src="aboutus.jpg" alt="About Us" />
          </div>
        </div>
        <div className="aboutus-container">
          <div className="about_heading">
            About Us
            <div className="about_para">
              Mashpee's Hot Diggity, the original, offers an array of posh products for you and your pup, from exquisite collars to premium treats, toys, and fashionable apparel. Discover quality and style at our store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
