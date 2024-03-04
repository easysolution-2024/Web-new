import React from 'react';

import images from '../../icon';

const discover = () => {
    return (
      <div>
<div className='bg-5 px-5 bg-5 py-5'>
    <div className='d-flex text-justify p-4'>
    <div className='sectionHead me-2'>Discover</div>
    <div className=''>
        <img src={images.downArri} alt="down arrow" />
    </div>
    </div>
    <div className='row'>
<div className='col-lg-3 col-md-3 col-sm-6 col-12'>
    <div>
    <img src={images.dis1} alt='discover 1' className='img-fluid'/>
    </div>
    <div className='w-100'>
            <div className='d-flex mt-4'>
                <div className='me-2'>
                    <button className='discoverBtn'>Event</button>
                </div>
                <div>
                    <span className='me-1'>
                        <img src={images.locationBlack} alt="Location" className='w-20'/>
                    </span>
                    <span className='disCoverAdd'>
                    KNMA, Noida
                    </span>
                </div>
        </div>
        <div className='disHeading mt-3'>Craftopia for kids</div>
        <div className='disYear mt-2'>29.09 — 12.10.23</div>
    </div>
</div>

<div className='col-lg-3 col-md-3 col-sm-6 col-12'>
    <div>
    <img src={images.dis2} alt='discover 2' className='img-fluid'/>
    </div>
    <div className='w-100'>
            <div className='d-flex mt-4'>
                <div className='me-2'>
                    <button className='discoverBtn'>Exhibition</button>
                </div>
                <div>
                    <span className='me-1'>
                        <img src={images.locationBlack} alt="Location" className='w-20'/>
                    </span>
                    <span className='disCoverAdd'>
                    KNMA, Delhi
                    </span>
                </div>
        </div>
        <div className='disHeading mt-3'>Dillion Francis + Nolan (Live)</div>
        <div className='disYear mt-2'>29.09 — 12.10.23</div>
    </div>
</div>


<div className='col-lg-3 col-md-3 col-sm-6 col-12'>
    <div>
    <img src={images.dis3} alt='discover 3' className='img-fluid'/>
    </div>
    <div className='w-100'>
            <div className='d-flex mt-4'>
                <div className='me-2'>
                    <button className='discoverBtn'>Exhibition</button>
                </div>
                <div>
                    <span className='me-1'>
                        <img src={images.locationBlack} alt="Location" className='w-20'/>
                    </span>
                    <span className='disCoverAdd'>
                    Tate, London
                    </span>
                </div>
        </div>
        <div className='disHeading mt-3'>AI: More than Human</div>
        <div className='disYear mt-2'>29.09 — 12.10.23</div>
    </div>
</div>


<div className='col-lg-3 col-md-3 col-sm-6 col-12'>
    <div>
    <img src={images.dis4} alt='discover 4' className='img-fluid'/>
    </div>
    <div className='w-100'>
            <div className='d-flex mt-4'>
                <div className='me-2'>
                    <button className='discoverBtn'>Tours</button>
                </div>
                <div>
                    <span className='me-1'>
                        <img src={images.locationBlack} alt="Location" className='w-20'/>
                    </span>
                    <span className='disCoverAdd'>
                    KNMA, Delhi
                    </span>
                </div>
        </div>
        <div className='disHeading mt-3'>Architecture Tours</div>
        <div className='disYear mt-2'>29.09 — 12.10.23</div>
    </div>
</div>

    </div>
</div>


       
</div>

    );
  };

export default discover;