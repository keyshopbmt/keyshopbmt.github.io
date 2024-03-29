import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Services from "./Services/Services";
import History from "./History";
import Common from "./Common/Common";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import { keyShop } from "../Db";
import News from "../News/News";
import { TableTitle } from "../GeneralFuntions";

const Home = () => {
  TableTitle("Key Shop BMT");

  return (
    <div className="home">
      <Navbar />

      <div className="card text-bg-dark" id="backgroup">
        <img src="../assets/slider_bg1.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
          <img src="./assets/1.png" alt="" className="img-1" />
          <div className="card-textkey">
            <h3 className="card-title">
              DỊCH VỤ KHẨN CẤP: <span> {keyShop.phone}</span>
            </h3>
            <h3 className="text-card">
              DỊCH VỤ
              <br /> <span>LUÔN SẴN SÀNG 24/7</span>
            </h3>

            <p>
              Chúng tôi cung cấp các dịch vụ linh hoạt để đáp ứng nhu cầu của
              khách hàng
            </p>
          </div>
        </div>
      </div>
      <News />
      <Services />
      <History />
      <Common />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default Home;
