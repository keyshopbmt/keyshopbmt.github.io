import React from 'react';
import './footer.css';



export default function Footer() {
  return (
    <div>
        <footer className="footer aos-init aos-animate" data-aos="fade-up">
            <div className="footer_above">
                <div className="container">
					<div className="logo_footer_top d-md-block d-lg-none text-center aos-init aos-animate" data-aos="fade-up">
						<a href="/">
							<img src="./assets/logo1.png" alt="KeyShop"/>
						</a>
					</div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 pd_0">
                            <div className="footer_widget footer_links aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                                <h4 className="widget_title">
									Service List
									<span className="title_line"></span>
                                </h4>
                                <div className="footer_nav">
                                    <ul className="footer_menu">
                                        <li className="menu-item"><a href="#">Automobile Door Lock Opening</a></li>
                                        <li className="menu-item"><a href="#">Openning Locked House Door</a></li>
                                        <li className="menu-item"><a href="#">Household Security Installation</a></li>
                                        <li className="menu-item"><a href="#">Lost Lock Key Duplication</a></li>
                                        <li className="menu-item"><a href="#">Door Auto Lock Installation</a></li>
                                        <li className="menu-item"><a href="#">Strike Plate &amp; Bitting of Key</a></li>
                                    </ul>
                                </div>
                            </div>
						</div>
						<div className="col-lg-6 col-sm-6 pd_lr_65">
                            <div className="footer_widget footer_contact aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
								<div className="logo_footer d-none d-md-none d-lg-block">
									<a href="index.html">
										<img src="assets/logo2.png" alt="Locksmith"/>
									</a>
								</div>
								<h4 className="widget_title d-md-block d-lg-none">
									Contact Us
									<span className="title_line"></span>
                                </h4>
								<div className="contact_info">
									<h4>chaveiro@gmail.com</h4>
									<h4>Gr. Benjamin Street 609<br/> Florida, USA</h4>
									<div className="phone">
										<img src="assets/phone2.png" alt="phone"/>
										<div><span>Mon- Fri (9am - 9pm)</span><br/>+33.123.456.789</div>
									</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 pd_0">
                            <div className="footer_widget aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
                                <h4 className="widget_title">
									Project Gallery
									<span className="title_line"></span>
                                </h4>
                                <ul className="most_read">
                                    <li className="most_read_item">
										<div className="most_read_image">
											<img className="primary_img" src="assets/blog/thumbnail4.jpg" alt=""/>
										</div>
										<div className="most_read_content">
											<h5><a href="#">Opening the auto lock in 5 sec</a></h5>
											<h6>09 April 2020</h6>
										</div>
									</li>
									<li className="most_read_item">
										<div className="most_read_image">
											<img className="primary_img" src="assets/thumbnail5.jpg" alt=""/>
										</div>
										<div className="most_read_content">
											<h5><a href="#">Modern locks are very effective</a></h5>
											<h6>06 April 2020</h6>
										</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container-fluid">
                    <div className="footer_bottom_inner">
                        <div className="copyright">
                            <p> © All rights reserved to <a href="#">WP ThemeBooster</a></p>
						</div>
						<div className="footer_social">
							<ul className="bottom_social">
								<li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
								<li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
								<li className="dribbble"><a href="#"><i className="ion-social-dribbble-outline"></i></a></li>
								<li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
								<li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
							</ul>
						</div>
						<div className="totop">
							<a href="#"><i className="ion-ios-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
