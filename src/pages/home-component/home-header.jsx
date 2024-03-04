import React from 'react';

import Header from '../../components/header';
import images from '../../icon';

const HomeHeader = () => {
  return (
    <div className="relative">
      <div className="w-100">
        <video className="w-100" controls autoPlay>
          <source src={images.video1} type="video/mp4" />
          <source src={images.video1} type="video/ogg" />
        </video>
      </div>
      <div className="absoluteDiv">
        <div className="container">
          <div className="flexDiv">
            <Header />
          </div>
        </div>
        <div className="whiteLogoSection">
          <img src={images.LogoWhite} className="img-fluid" alt="White Logo" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;