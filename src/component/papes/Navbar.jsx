import React from "react";
import "./navbar.css";

import { MDBIcon } from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <header className="header">
      <div className="top_bar">
        <div className="container">
          <div className="top_bar_inner">
            <div className="header_social">
              <ul className="top_social">
                <li className="facebook">
                  <a href="#">
                    <MDBIcon color="white" icon="fa-brands fa-facebook" />
                  </a>
                </li>

                <li className="mail">
                  <a href="#">
                    <MDBIcon color="white" icon="fa-regular fa-envelope " />
                  </a>
                </li>
              </ul>
            </div>
            <div className="header_info">
              <div className="schedule">
                <img src="assets/clock.png" alt="schedule" />{" "}
                <div>
                  Monday - Sunday <span>(7.00am-9.00pm)</span>
                </div>
              </div>
              <div className="phone">
                <img src="assets/phone.png" alt="phone" />
                <div>
                  <span>Liên Hệ</span>
                  <br />
                  (+084)0942975959
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_bar">
        <div className="container">
          <div className="middle_bar_inner">
            <div className="logo">
              <a href="index.html">
                <img src="assets/logo1.png" alt="logo" />
              </a>
            </div>

            <div className="header_right_part">
              <div className="mainnav">
                <ul className="main_menu">
                  <li className="menu-item menu-item-has-children active">
                    <a href="/">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="about.html">About</a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="services.html">Services</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="blog-1.html">Blog One</a>
                      </li>
                      <li className="menu-item">
                        <a href="blog-2.html">Blog Two</a>
                      </li>
                      <li className="menu-item">
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="team.html">Team</a>
                      </li>
                      <li className="menu-item">
                        <a href="faq.html">FAQ</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Contact</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="contact-1.html">Contact One</a>
                      </li>
                      <li className="menu-item">
                        <a href="contact-2.html">Contact Two</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul data-ma5order="ma5-ul" class="ma5menu__panel--active lvl-0">
									<li data-ma5order="ma5-li-1"><span class="ma5menu__btn--enter"></span><a href="index.html">Home</a>
										
									</li>
									<li data-ma5order="ma5-li-2"><a href="about.html">About</a></li>
									<li data-ma5order="ma5-li-3"><span class="ma5menu__btn--enter"></span><a href="services.html">Services</a>
										<ul data-ma5order="ma5-ul-3" class="lvl-1">
											<li data-ma5order="ma5-li-3-1"><div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Services</div><a href="service-details.html">Service Details</a></li>
										</ul>
									</li>
									<li data-ma5order="ma5-li-4"><span class="ma5menu__btn--enter"></span><a href="#">Blog</a>
										<ul data-ma5order="ma5-ul-4" class="lvl-1">
											<li data-ma5order="ma5-li-4-1"><div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Blog</div><a href="blog-1.html">Blog One</a></li>
											
										</ul>
									</li>
									<li data-ma5order="ma5-li-5"><span class="ma5menu__btn--enter"></span><a href="#">Pages</a>
										<ul data-ma5order="ma5-ul-5" class="lvl-1">
											<li data-ma5order="ma5-li-5-1"><div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Pages</div><a href="team.html">Team</a></li>
											<li data-ma5order="ma5-li-5-2"><a href="faq.html">FAQ</a></li>
										</ul>
									</li>
									<li data-ma5order="ma5-li-6"><span class="ma5menu__btn--enter"></span><a href="#">Contact</a>
										<ul data-ma5order="ma5-ul-6" class="lvl-1">
											<li data-ma5order="ma5-li-6-1"><div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Contact</div><a href="contact-1.html">Contact One</a></li>
											
										</ul>
									</li>
								</ul>
              </div>
              <div className="header_search">
                <form className="search_form" action="search.php">
                  <input
                    type="text"
                    name="search"
                    className="keyword form-control"
                    placeholder="Search..."
                  />
                  <button type="submit" className="form-control-submit">
                    <i className="ion-ios-search"></i>
                  </button>
                </form>
              </div>

              <div className="aside_open">
                <i className="ion-ios-keypad"></i>
              </div>
              <button className="ma5menu__toggle" type="button">
                <i className="ion-android-menu"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
