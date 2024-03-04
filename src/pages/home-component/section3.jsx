import React from 'react';

import images from '../../icon';

const SectionThree = () => {
  return (
    <div className="p-6">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 leftFlex">
          <div>
            <div>
              <img src={images.Exhibition} className="img-fluid" alt="Exhibition" />
            </div>
            <div className="ahujaText mt-4">Mequitta Ahuja</div>
          </div>
          <div className="dayFlex">
            <div className="dayText">Wed 18 — Tue 31st Oct 2026</div>
            <div className="d-flex mt-2">
              <div className="me-1">
                <img src={images.locationBlack} alt="Location" />
              </div>
              <div className="addressText">KNMA, Delhi</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div>
            <img src={images.Maskgroup} className="img-fluid" alt="Mask Group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;