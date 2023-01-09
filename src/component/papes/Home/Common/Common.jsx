import React from 'react'
import './common.css'

export default function Common() {
  return (
    <div>
        <div class="section services_1">
                <div class="container">
					<div class="section_header text-center aos-init aos-animate" data-aos="fade-up">
						<div class="shadow_icon"><img src="assets/services/shadow_icon2.png" alt=""/></div>
						<h6 class="section_sub_title">Common problem solutions</h6>
						<h1 class="section_title">Most popular locksmith services</h1>
						<p class="section_desc">When a locksmith is discussing re-keying that are referring<br/> 
							to altering the code of the lock so that it </p>
					</div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="iconbox2 first">
                                <div class="iconbox_wrapper">
                                    <div class="iconbox_image">
                                        <img src="assets/services/v_1.jpg" alt="img"/>
                                    </div>
                                    <div class="iconbox_content">
                                        <h3><a href="service-details.html">Automobile Door lock Opening</a></h3>
                                        <div class="read_more">
											<a href="service-details.html"><span>Get Service</span></a>
										</div>
									</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="iconbox2 second">
                                <div class="iconbox_wrapper">
                                    <div class="iconbox_image">
                                        <img src="assets/services/v_2.jpg" alt="img"/>
                                    </div>
                                    <div class="iconbox_content">
                                        <h3><a href="service-details.html">Auto door lock installation</a></h3>
                                        <div class="read_more">
											<a href="service-details.html"><span>Get Service</span></a>
										</div>
									</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="iconbox2 third">
                                <div class="iconbox_wrapper">
                                    <div class="iconbox_image">
                                        <img src="assets/services/v_3.jpg" alt="img"/>
                                    </div>
                                    <div class="iconbox_content">
                                        <h3><a href="service-details.html">Lost lock key Duplication</a></h3>
                                        <div class="read_more">
											<a href="service-details.html"><span>Get Service</span></a>
										</div>
									</div>
                                </div>
                            </div>
                        </div>
					</div>
					<h6 class="explore_all">If You Have Other Locksmith Problems <a href="services.html">Explore All Services</a> or Call to <span>+33 123 456 789</span> </h6>
				</div>
			</div>
    </div>
  )
}
