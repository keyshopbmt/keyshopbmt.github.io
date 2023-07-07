import React from "react";
import "./services.css";

export default function Serviceshouse() {
  return (
    <div className="col-lg-4 col-md-6 pd_0">
      <div className="iconbox3 third h-100">
        <div className="iconbox_wrapper">
          <div className="iconbox_image">
            <div className="iconbox_icon">
              <img
                className="first_icon"
                src="assets/services/icon11.png"
                alt="icon"
              />
              <img
                className="second_icon"
                src="assets/services/icon11_1.png"
                alt="icon"
              />
            </div>
          </div>
          <div className="iconbox_content">
            <h3>
              <a href="/" style={{ textDecoration: "none" }}>
                Mở Cửa Nhà Bị Khóa
              </a>
            </h3>
            <p>
              Nhóm của chúng tôi bao gồm các thợ khóa được đào tạo có kinh
              nghiệm lâu năm và chuyên gia khóa.
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
