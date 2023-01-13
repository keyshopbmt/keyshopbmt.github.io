import React from "react";
import "./home.css";
import Navbar from "../Navbar";
import Services from "./Services/Services";
import History from "./History";
import Common from "./Common/Common";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="card text-bg-dark" id="backgroup">
        <img src="../assets/slider_bg1.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
            <img src="./assets/1.png" alt="" className="img-1" />
          <div className="card-textkey">
            <h3 className="card-title">
              DỊCH VỤ KHẨN CẤP: <span>0942975959</span>
            </h3>
            <h2 className="text-card">
              DỊCH VỤ
              <br /> <span>LUÔN SẴN SÀNG 24/7</span>
            </h2>

            <p>
              Chúng tôi cung cấp các dịch vụ linh hoạt <br /> để đáp ứng nhu cầu
              của khách hàng
            </p>
          </div>
        </div>
      </div>
      <Services/>
			<History/>
      <Common/>		
      <Testimonial/>
      <Footer/>
    </div>
  );
}
