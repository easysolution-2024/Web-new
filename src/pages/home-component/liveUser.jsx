import React from 'react';

import images from '../../icon';

const liveUser = () => {
    return (
      <div>
       <div className="mt-0">
      <div class="relative">
        <img src={images.img4} className="w-100 img-fluid" alt="Image 4" />
        
        <div className='imageText-4'>
          <div>
            <button className="ScreeningBtn">Screening</button>
          </div>
          <div className='lineHeight-300'>
          <div className="mt-2 userNameText-4">
          Ryoji Ikeda
          </div>
          <div className="mt-1 userNameText-4">
            Live
          </div>
          </div>
        </div>
      </div>
      <div className='w-100 bg-4'>
      <marquee direction="left" className='marqueeText'>

      Wednesdays families go free!

</marquee> 
      </div>
      </div>
</div>

    );
  };

export default liveUser;