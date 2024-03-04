import React from 'react';

import images from '../../icon';

const becomeMember = () => {
    return (
      <div className='bg-1 p-5'>
       <div className='becomeMember text-center'>Become a Member</div>
       <div className='memberText text-center'>Embark on a journey of endless inspiration and discovery,<br /> unlock a world of art, culture,  and knowledge.</div>
       <div class="relative mt-5 cursor-pointer"><div><img src={images.polygonOne} alt="" /></div><div class="polygonBtn">Book tickets</div></div>
</div>

    );
  };

export default becomeMember;