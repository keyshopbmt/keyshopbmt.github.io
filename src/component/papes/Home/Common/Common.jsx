import React from "react";
import "./common.scss";
import { keyShop } from "../Db";

export default function Common() {
  return (
    <div>
      <div className="section services_1">
        <div className="container">
          <div
            className="section_header text-center aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="shadow_icon">
              <img src="assets/services/shadow_icon2.png" alt="" />
            </div>
            <h6 className="section_sub_title">Các Sự Cố Thường Gặp</h6>
            <h1 className="section_title">
              Các Dịch Vụ Sửa Khóa Phổ Biến Nhất
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="iconbox2 first">
                <div className="iconbox_wrapper  ">
                  <div className="iconbox_image">
                    <img src="assets/services/v_1.jpg" alt="img" />
                  </div>
                  <div className="iconbox_content  ">
                    <h3>
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "#dc3545" }}
                      >
                        Mở Khóa Cửa Ôtô
                      </a>
                    </h3>
                    <div className="read_more">
                      <a href="/carkey" style={{ textDecoration: "none" }}>
                        <span style={{ color: "white" }}>Nhận Dịch Vụ</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="iconbox2 second  ">
                <div className="iconbox_wrapper ">
                  <div className="iconbox_image">
                    <img src="assets/services/v_2.jpg" alt="img" />
                  </div>
                  <div className="iconbox_content ">
                    <h3>
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "#dc3545" }}
                      >
                        Dịch Vụ Mở Khóa Tại Nhà
                      </a>
                    </h3>
                    <div className="read_more">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <span style={{ color: "white" }}>Nhận Dịch Vụ</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="iconbox2 third  ">
                <div className="iconbox_wrapper ">
                  <div className="iconbox_image">
                    <img src="assets/services/v_3.jpg" alt="img" />
                  </div>
                  <div className="iconbox_content ">
                    <h3>
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "#dc3545" }}
                      >
                        Làm Lại Chìa Khóa Bị Mất
                      </a>
                    </h3>
                    <div className="read_more">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <span style={{ color: "white" }}>Nhận Dịch Vụ</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="explore_all">
            Nếu Bạn Gặp Các Vấn Đề Về Khóa,
            <a
              href="/dichvu"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              Hãy Khám Phá Các Dịch Vụ
            </a>{" "}
            Hoặc Gọi Tới{" "}
            <span style={{ color: "red" }}> {keyShop.phone}(Mr.Tiến)</span>{" "}
          </h6>
        </div>
      </div>
      <div className="banner type_3 aos-init aos-animate" data-aos="fade-up">
        <div className="container">
          <div className="banner_content">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_text">
                  <h1>
                    Nếu Bạn Có Bất Kỳ Câu Hỏi Nào Khác, Bạn Có Thể Gọi Cho Chúng
                    Tôi
                  </h1>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner_phone">
                  <img src="assets/phone3.png" alt="" />
                  <span style={{ paddingLeft: "15px" }}>{keyShop.phone} </span>

                  <span style={{ paddingLeft: "80px" }}>
                    {" "}
                    {keyShop.phones}{" "}
                  </span>
                  <br />
                  <span style={{ paddingLeft: "80px" }}>
                    {" "}
                    {keyShop.telephone}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
