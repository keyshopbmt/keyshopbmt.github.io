import React from 'react';
import './services.css';

export default function Services() {
  return (
    <div>
        <div className="services">
				<div className="row g-0 ">
					<div className="col-lg-4 col-md-6 pd_0">
						<div className="iconbox3 first">
							<div className="iconbox_wrapper">
								<div className="iconbox_image">
									<div className="iconbox_icon">
										<img className="first_icon" src="assets/services/icon12.png" alt="icon"/>
										<img className="second_icon" src="assets/services/icon12_1.png" alt="icon"/>
               
									</div>
								</div>
								<div className="iconbox_content">
									<h3><a href="/" style={{ textDecoration: 'none'}}>Lắp Đặt Thiết Bị An Ninh Hộ Gia Đình</a></h3>
									<p>Chúng tôi cung cấp  các dịch vụ toàn diện cho công trình, doanh nghiệp, khu dân cư.  </p>
									<div className="read_more">
										<a href="/" style={{ textDecoration: 'none', color:'#dc3545' }}><span>CHI TIẾT</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 pd_0">
						<div className="iconbox3 second">
							<div className="iconbox_wrapper">
								<div className="iconbox_image">
									<div className="iconbox_icon">
										<img className="first_icon" src="assets/services/icon10.png" alt="icon"/>
										<img className="second_icon" src="assets/services/icon10_1.png" alt="icon"/>
									</div>
								</div>
								<div className="iconbox_content">
									<h3><a href="/" style={{ textDecoration: 'none' }}>Mở Khóa Cửa Ôtô và Xe Máy</a></h3>
									<p>Chúng tôi sẽ cung cấp cho bạn và công ty của bạn dịch vụ chuyên nghiệp, nhanh chóng, hiệu quả và cạnh tranh.</p>
									<div className="read_more">
										<a href="/" style={{ textDecoration: 'none', color:'#dc3545' }}><span>CHI TIẾT</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 pd_0">
						<div className="iconbox3 third">
							<div className="iconbox_wrapper">
								<div className="iconbox_image">
									<div className="iconbox_icon">
										<img className="first_icon" src="assets/services/icon11.png" alt="icon"/>
										<img className="second_icon" src="assets/services/icon11_1.png" alt="icon"/>
									</div>
								</div>
								<div className="iconbox_content">
									<h3><a href="/" style={{ textDecoration: 'none' }}>Mở Cửa Nhà Bị Khóa</a></h3>
									<p>Nhóm của chúng tôi bao gồm các thợ khóa được đào tạo có kinh nghiệm lâu năm và chuyên gia khóa.</p>
									<div className="read_more">
										<a href="/" style={{ textDecoration: 'none', color:'#dc3545' }}><span>CHI TIẾT</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}
