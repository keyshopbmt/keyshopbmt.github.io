import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./carkey.css";
import Easystep from "./easystep/Easystep";
import Keycar from "./keycar/Keycar";
import Titlecar from "./titlecar/Titlecar";
import Typekeycar from "./typekeycar/Typekeycar";

export default function Carkey() {
  return (
    <div>
      <Navbar/>
      <div className="card text-bg-dark" >
    <img
      src="../assets/services/carkey/backgroup.jpg"
      className="card-img"
      alt=""
    />
    <div className="card-img-overlay">
      <div className="card-car">
        <h3>
          THAY THẾ CHÌA KHÓA ÔTÔ PHẢI CHĂNG VÀ CHUYÊN NGHIỆP
          <br />
          TẠI KEYSHOP BMT
        </h3>
      </div>
    </div>
  </div>
    <Titlecar/>
    <Keycar/>
    <Easystep/>
    <Typekeycar/>

    
     
    </div>
  );
}
