import React from "react";
import "./history.css";
import { keyShop } from "../Db";

export default function History() {
  return (
    <div>
      <div className="experience bglayer_1 pd_tp_110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="group_image_holder type_1">
                <div className="expe_box">
                  <div className="expe_box_inner">
                    Với Hơn
                    <h1>20</h1>
                    Năm Kinh Nghiệm
                  </div>
                </div>
                <img
                  className="main_img"
                  src="assets/services/image6.png"
                  alt=""
                />
                <img
                  className="sub_img"
                  src="assets/services/image5.png"
                  alt=""
                />
                <img
                  className="sub_img2"
                  src="assets/services/image4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="experience_content">
                <div
                  className="section_header aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="shadow_icon">
                    <img src="assets/services/shadow_icon1.png" alt="" />
                  </div>
                  <h5 className="section_sub_title">KEY SHOP BMT</h5>
                  <h1 className="section_title">
                    Cung Cấp Dịch Vụ Nhanh Chóng
                  </h1>
                  <p className="section_desc"></p>
                  <h5 className="appoint">
                    Liên Hệ: <span>{keyShop.phone} (Mr.Tiến)</span>
                  </h5>
                </div>
                <div
                  className="read_more aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <a className="button" href="#">
                    Chi Tiết
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
