import React from "react";
import "./services.css";

export default function Servicesindustrial() {
  return (
    <div className="col-lg-4 col-md-6 pd_0">
      <div className="iconbox3 first h-100">
        <div className="iconbox_wrapper">
          <div className="iconbox_image">
            <div className="iconbox_icon">
              <img
                className="first_icon"
                src="assets/services/icon12.png"
                alt="icon"
              />
              <img
                className="second_icon"
                src="assets/services/icon12_1.png"
                alt="icon"
              />
            </div>
          </div>
          <div className="iconbox_content">
            <h3>
              <a href="/" style={{ textDecoration: "none" }}>
                Lắp Đặt Thiết Bị An Ninh Hộ Gia Đình
              </a>
            </h3>
            <p>
              Chúng tôi cung cấp các dịch vụ toàn diện cho công trình, doanh
              nghiệp, khu dân cư.{" "}
            </p>
            <div className="read_more">
              <a href="/" style={{ textDecoration: "none", color: "#dc3545" }}>
                <span>CHI TIẾT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
