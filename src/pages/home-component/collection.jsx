import React from 'react';

import images from '../../icon';

const collection = () => {
    return (
      <div>
<div className='bg-5 px-5 bg-8 py-5'>
    <div className='d-flex text-justify p-4  mb-3'>
    <div className='sectionHead me-2'>Browse the collection</div>
    <div className=''>
        <img src={images.downArri} alt="down arrow" />
    </div>
    </div>
    <div className='row align-end'>
<div className='col-lg-3 col-md-3 col-sm-12 col-12'>
<div className='w-100'>
    <img src={images.coll1} alt="collection 1" className='img-fluid w-100'/>
    
    </div>
</div>
<div className='col-lg-3 col-md-3 col-sm-12 col-12'>
<div className='w-100'>
<img src={images.coll2} alt="collection 2" className='img-fluid w-100'/>
</div>

</div>
<div className='col-lg-3 col-md-3 col-sm-12 col-12'>
<div className='w-100'>
<img src={images.coll3} alt="collection 3" className='img-fluid w-100'/>
</div>

</div>
<div className='col-lg-3 col-md-3 col-sm-12 col-12'>
<div className='w-100'>
<img src={images.coll4} alt="collection 4" className='img-fluid w-100'/>
</div>

</div>
    </div>

    <div className='pt-5 text-center'>
    <span className='viewCollection'>View collection</span> <span><img src={images.leftArrowIcon} /></span>
    </div>
</div>
      
</div>

    );
  };

export default collection;