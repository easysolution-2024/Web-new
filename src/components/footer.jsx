import React from 'react';

import images from '../icon';

const Footer = () => {
  return (
    <div className="footerSection container-fluid bg-1">
      <div className="py-5 pe-5 ps-5">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-3 col-12">
            <img src={images.Logo} className="img-fluid" alt="Logo" />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-12">
            <div className="row ps-4">
              <div className="col">
                <div className="d-flex justify-space headingBorder">
                  <div className="footerHeading">About 2</div>
                  <div><img src={images.DownArrow} alt="Down Arrow" /></div>
                </div>
                <div className="footerList pt-2">
                  <ul className="footerListUl">
                    <li>
                      <a href="javascript:void()">Press</a>
                      <a href="javascript:void()">Jobs</a>
                      <a href="javascript:void()">Our Team</a>
                      <a href="javascript:void()">Our Policies</a>
                      <a href="javascript:void()">Newsletter</a>
                      <a href="javascript:void()">Foundation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
        <div className="d-flex justify-space headingBorder">
          <div className="footerHeading">Membership</div>
          <div><img src={images.DownArrow} alt="Down Arrow" /></div>
        </div>
        <div className="footerList pt-2">
          <ul className="footerListUl">
            <li>
              <a href="javascript:void()">Young KNMA</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-space headingBorder">
          <div className="footerHeading">Locations</div>
          <div><img src={images.DownArrow} alt="Down Arrow" /></div>
        </div>
        <div className="footerList pt-2">
          <ul className="footerListUl">
            <li>
              <a href="javascript:void()">KNMA Delhi</a>
              <a href="javascript:void()">KNMA Saket</a>
              <a href="javascript:void()">KNMA Noida</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-space headingBorder">
          <div className="footerHeading">Get involved</div>
          <div><img src={images.DownArrow} alt="Down Arrow" /></div>
        </div>
        <div className="footerList pt-2">
          <ul className="footerListUl">
            <li>
              <a href="javascript:void()">Volunteer</a>
              <a href="javascript:void()">Participate</a>
              <a href="javascript:void()">Curate</a>
              <a href="javascript:void()">Jobs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-space headingBorder">
          <div className="footerHeading">Follow us</div>
          <div><img src={images.DownArrow} alt="Down Arrow" /></div>
        </div>
        <div className="footerList pt-2">
          <ul className="footerListUlIcon">
            <li>
              <a href="javascript:void()"><img src={images.FacebookIcon} alt="Facebook" /></a>
              <a href="javascript:void()"><img src={images.XVectorIcon} alt="X Vector" /></a>
              <a href="javascript:void()"><img src={images.InstagramIcon} alt="Instagram" /></a>
              <a href="javascript:void()"><img src={images.YoutubeIcon} alt="YouTube" /></a>
              <a href="javascript:void()"><img src={images.WhatsappIcon} alt="WhatsApp" /></a>
              <a href="javascript:void()"><img src={images.VIcon} alt="V Icon" /></a>
            </li>
          </ul>
        </div>
      </div>
            </div>
          </div>
        </div>
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default Footer;