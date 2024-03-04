import React from 'react';

import images from '../../icon';

const HomeVideo = () => {
  return (
    <div className="ps-5 pe-5 py-5">
      <div className="indiaLargestText">India’s largest cultural center, over 100,000 sqm of art.</div>
      <div className="w-100 mt-5">
        <video className="w-100" controls autoPlay>
          <source src={images.video2} type="video/mp4" />
          <source src={images.video2} type="video/ogg" />
        </video>
      </div>
      <div className="row">
        <div className="indiaLargestText col-lg-10 col-md-10 col-sm-10 col-12">
          International cultural destination for visual arts, music, dance and theatre. The initiative of art collector and philanthropist Kiran Nadar.
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-12 flexBtn">
          <img src={images.visitUs} alt="Visit Us" />
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;