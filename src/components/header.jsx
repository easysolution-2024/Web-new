import React, { useState } from 'react';

import HamburgerImage from '../assets/images/Hamburger.png';
import MenuModal from './menuModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container py-2">
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div>
          <ul className="list-unstyled mb-0">
            <li className="d-inline me-3">
              <button className="btn btn-outline-light" onClick={toggleModal}>
                <img src={HamburgerImage} alt="Menu Icon" />
              </button>
            </li>
            <li className="d-inline">
              <a href="javascript:void()" className="text-light">Menu</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-unstyled mb-0">
            <li className="d-inline me-3">
              <a href="javascript:void()" className="text-light">What's on</a>
            </li>
            <li className="d-inline">
              <a href="javascript:void()" className="text-light">Visit</a>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && <MenuModal />}
    </div>
  );
};

export default Header;