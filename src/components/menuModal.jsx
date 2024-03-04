import React, { useState } from 'react';

//import CloseIcon from '../assets/images/CloseIcon.png';
import images from '../icon';

const MenuModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle modal open/close state
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen && (
      <div className="container-fluid p-0">
        <div className="py-6 bg-1 pe-6 ps-6">
          <div>
            <img src={images.CloseIcon} alt="Close Icon" onClick={toggleModal} style={{ cursor: 'pointer' }}  />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5">
              <ul className="modalAction">
                <li>
                  <a href="javascript:void()">Visit</a>
                  <a href="javascript:void()">What's on</a>
                  <a href="javascript:void()">Collection</a>
                  <a href="javascript:void()">The Museum</a>
                  <a href="javascript:void()">About</a>
                  <a href="javascript:void()">Shop</a>
                  <a href="javascript:void()" className="brd-bottom">Support</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-12 col-lg-4 col-md-4 col-sm-8 p-0 mt-5 offset-lg-1 offset-md-1">
              <div className="modalHeading">Membership benefits</div>
              <div className="mt-3">
                <div>
                  <ul className="memberShipSubText">
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon" />
                      Access to the KNMA Lounge with your guests
                    </li>
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon" />
                      Access to KNMA Private Viewing for General Admission only
                    </li>
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon" />
                      Priority booking and member discounts
                    </li>
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon" />
                      Priority lanes access for General Admission only
                    </li>
                  </ul>
                </div>
              </div>
              <div className="polygonFlex my-4-5">
                <a href="javascript:void()" className="relative">
                  <img src={images.PolygonIcon} className="img-fluid" alt="Polygon Icon"/>
                  <p className="becomeAmember">Become a member</p>
                </a>
              </div>

              <div className="modalHeading">
                Stay in the know!
              </div>

              <div className="mt-3">
                <div>
                  <ul className="memberShipSubText">
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon"/>
                      Discover new videos and articles
                    </li>
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon"/>
                      Be up to date on what’s happening at KNMA
                    </li>
                    <li>
                      <img src={images.ArrowIcon} className="me-2" alt="Arrow Icon"/>
                      Choose what content you’d like to receive
                    </li>
                  </ul>
                </div>
                <div className="polygonFlex my-5">
                  <a href="javascript:void()" className="relative">
                    <img src={images.PolygonIcon} className="img-fluid" alt="Polygon Icon"/>
                    <p className="becomeAmember">Subscribe</p>
                  </a>
                </div>

                <div>
                  <ul className="modalBottomIcon">
                    <li>
                      <a href="javascript:void()">
                        <img src={images.FacebookIcon} alt="Facebook Icon"/>
                      </a>
                      <a href="javascript:void()">
                        <img src={images.XVectorIcon} alt="X Vector Icon"/>
                      </a>
                      <a href="javascript:void()">
                        <img src={images.InstagramIcon} alt="Instagram Icon"/>
                      </a>
                      <a href="javascript:void()">
                        <img src={images.YoutubeIcon} alt="Youtube Icon"/>
                      </a>
                      <a href="javascript:void()">
                        <img src={images.WhatsappIcon} alt="Whatsapp Icon"/>
                      </a>
                      <a href="javascript:void()">
                        <img src={images.VIcon} alt="V Icon"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
    }
  </>
  );
};

export default MenuModal;