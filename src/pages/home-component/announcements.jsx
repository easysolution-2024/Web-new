import React from 'react';

import images from '../../icon';

const announcements = () => {
    return (
      <div>
<div className='bg-5 px-5 bg-6 py-5'>
    <div className='d-flex text-justify p-4  mb-3'>
    <div className='sectionHead me-2'>Announcements</div>
    <div className=''>
        <img src={images.downArri} alt="down arrow" />
    </div>
    </div>
    <div className='row'>
<div className='col-lg-6 col-md-6 col-sm-12 col-12'>
<div className='w-100'>
    <img src={images.ann1} alt="Announcements 1" className='img-fluid w-100'/>
    <div className='annImgText mt-3'>KNMA opens to the public on April 2026</div>
    <div>
        <ul className='readMoreText'>
            <li>
                <a href="javascript:void">Read more <img src={images.leftArrowIcon} /> </a>
            </li>
        </ul>
    </div>
    </div>
</div>
<div className='col-lg-3 col-md-3 col-sm-12 col-12'>
<div className='w-100'>
    <img src={images.ann2} alt="Announcements 2" className='img-fluid w-100'/>
</div>
<div className='lobbyText mt-3'>
Anish Kapoor reveals new sculpture in lobby
</div>
<div>
        <ul className='readMoreText'>
            <li>
                <a href="javascript:void">Read more <img src={images.leftArrowIcon} /> </a>
            </li>
        </ul>
    </div>
</div>
<div className='col-lg-3 col-md-3 col-sm-12 col-12'>
<div className='w-100'>
    <img src={images.ann3} alt="Announcements 3" className='img-fluid w-100'/>
</div>
<div className='lobbyText mt-3'>
Roobina Karode curates exhibition on abstraction
</div>
<div>
        <ul className='readMoreText'>
            <li>
                <a href="javascript:void">Read more <img src={images.leftArrowIcon} /> </a>
            </li>
        </ul>
    </div>
</div>
    </div>
</div>
<div className='bg-7'>
<marquee direction="left" class="marqueeText">Anish Kapoor:Untrue <img src={images.ReftArrowIcon} />   Opening today</marquee>
</div>

       
</div>

    );
  };

export default announcements;