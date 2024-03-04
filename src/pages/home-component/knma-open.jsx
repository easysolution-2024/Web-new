import React from 'react';

import images from '../../icon';

const KnmaOpen = () => {
    return (
      <div>
        <div className="ps-2 bg-2">
        <marquee direction="left">
          <div className="knmaOpen">
            KNMA opens to public Sept 2026
            <span><img src={images.ArrowIcon} className="img-fluid" alt="Arrow Slider" /></span>
          </div>
          </marquee>
        </div>
        <div className="p-6 bg-3">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 leftFlex">
              <div>
                <div>
                  <img src={images.Exhibition} className="img-fluid" alt="Exhibition" />
                </div>
                <div className="ahujaText mt-4">Tyeb Mehta</div>
              </div>
              <div className="dayFlex">
                <div className="dayText">
                  Tyeb Mehta was an Indian painter, sculptor and film maker. He was part of the Bombay Progressive Artists' Group and the first post-colonial generation of artists in India.
                </div>
                <div className="dayText">Wed 18 — Tue 31st Oct 2026</div>
                <div className="d-flex mt-2">
                  <div className="me-1">
                    <img src={images.locationBlack} alt="Location" />
                  </div>
                  <div className="addressText">KNMA, Delhi</div>
                </div>
                <div className='relative mt-5 cursor-pointer'>
                  <div><img src={images.polygonOne} alt='' /></div>
                  <div className="polygonBtn">Book tickets</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div>
                <img src={images.Three} className="img-fluid" alt="Three" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default KnmaOpen;