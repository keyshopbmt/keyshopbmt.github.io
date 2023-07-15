import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import News from "../../News/News";
import "./carkey.css";
import Easystep from "./easystep/Easystep";
import Footercar from "./footer-keycar/Footercar";
import Keycar from "./keycar/Keycar";
import Remotecar from "./remote-car/Remotecar";
import Replacing from "./replacing/Replacing";
import Titlecar from "./titlecar/Titlecar";
import Transponder from "./transponder/Transponder";
import Typekeycar from "./typekeycar/Typekeycar";
import { TableTitle } from "../../GeneralFuntions";

export default function Carkey() {
  TableTitle("Chìa Khóa Ôtô | Key Shop BMT");

  return (
    <div>
      <Navbar />
      <div className="card text-bg-dark">
        <img
          src="../assets/services/carkey/backgroup.jpg"
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay">
          <div className="card-car">
            <h3>
              SỬA VÀ LÀM CHÌA KHÓA ÔTÔ CHUYÊN NGHIỆP
              <br />
              TẠI KEYSHOP BMT
            </h3>
          </div>
        </div>
      </div>
      <News />
      <Titlecar />
      <Keycar />
      <Easystep />
      <Typekeycar />
      <Replacing />
      <Remotecar />
      <Transponder />
      <Footercar />
      <Footer />
    </div>
  );
}
