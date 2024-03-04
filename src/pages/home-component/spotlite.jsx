import React from 'react';

import images from '../../icon';

const SpotLight = () => {
  return (
    <div className="pe-3 ps-3">
      <div class="relative">
        <img src={images.img1} className="w-100 img-fluid" alt="Image 1" />
        <div className='blurImage'>
          <img src={images.blurImg} alt="blur" className='w-100'/>
        </div>
        <div className='imageText'>
          <div>
            <button className="ScreeningBtn">Screening</button>
          </div>
          <div className="mt-2 userNameText">
            Anish Kapoor: Untrue Unreal
          </div>
          <div className="dayFlex">
            <div className="dayText text-white mb-2">18 — 31 Oct 2026</div>
            <div className="d-flex">
              <div className="me-1">
                <img src={images.LocationOn} alt="Location" />
              </div>
              <div className="addressText text-white">Tate, London</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">

      <div class="relative">
        <img src={images.img2} className="w-100 img-fluid" alt="Image 2" />
        <div className='blurImage'>
          <img src={images.blurImgTwo} alt="blur" className='w-100'/>
        </div>
        <div className='imageText'>
          <div>
            <button className="ScreeningBtn">Event</button>
          </div>
          <div className="mt-2 userNameText">
          Noemie Goudall
          </div>
          <div className="dayFlex">
            <div className="dayText text-white mb-2">18 — 31 Oct 2026</div>
            <div className="d-flex">
              <div className="me-1">
                <img src={images.LocationOn} alt="Location" />
              </div>
              <div className="addressText text-white">Tate, London</div>
            </div>
          </div>
        </div>
      </div>


        {/* <img src={images.img2} className="w-100 img-fluid" alt="Image 2" /> */}
      </div>
      <div className="mt-2">
      <div class="relative">
        <img src={images.img3} className="w-100 img-fluid" alt="Image 3" />
        <div className='blurImage'>
          <img src={images.blurImgThree} alt="blur" className='w-100'/>
        </div>
        <div className='imageText'>
          <div>
            <button className="ScreeningBtn">Screening</button>
          </div>
          <div className="mt-2 userNameText">
          Ali Kazim
          </div>
          <div className="dayFlex">
            <div className="dayText text-white mb-2">18 — 31 Oct 2026</div>
            <div className="d-flex">
              <div className="me-1">
                <img src={images.LocationOn} alt="Location" />
              </div>
              <div className="addressText text-white">Barbican, London</div>
            </div>
          </div>
        </div>
      </div>



        {/* <img src={images.img3} className="w-100 img-fluid" alt="Image 3" /> */}
      </div>
    </div>
  );
};

export default SpotLight;