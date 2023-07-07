import React from "react";
import Navbar from "../../Navbar/Navbar";
import Replacemotokey from "./replacemotokey/Replacemotokey";
import Titlemoto from "./titlemoto/Titlemoto";
import "./motokey.css";
import Proceduremoto from "./proceduremoto/Proceduremoto";
import Footermotokey from "./footer-motokey/Footermotokey";
import Footer from "../../Footer/Footer";
import News from "../../News/News";

export default function Motokey() {
  return (
    <div>
      <Navbar />
      <div className="card text-bg-dark">
        <img
          src="../assets/services/moto/motor_cycle_background.jpg"
          className="card-img-moto"
          alt=""
        />
        <div className="card-img-overlay">
          <div className="card-moto">
            <h3>
              LÀM CHÌA KHÓA XE MÁY CHUYÊN NGHIỆP
              <br />
              TẠI KEYSHOP BMT
            </h3>
          </div>
        </div>
      </div>
      <News />
      <Titlemoto />
      <Replacemotokey />
      <Proceduremoto />
      <Footermotokey />
      <Footer />
    </div>
  );
}
