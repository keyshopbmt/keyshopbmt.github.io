import React from "react";
import "./footer.css";
import { keyShop } from "../Db";

export default function Footer() {
  return (
    <div>
      <footer className="footer aos-init aos-animate" data-aos="fade-up">
        <div className="footer_above">
          <div className="container">
            <div
              className="logo_footer_top d-md-block d-lg-none text-center aos-init aos-animate"
              data-aos="fade-up"
            >
              <a href="/">
                <img src="./assets/logo1.png" alt="KeyShop" />
              </a>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 pd_0">
                <div
                  className="footer_widget footer_links aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h4 className="widget_title">
                    Danh Sách Dịch Vụ
                    <span className="title_line"></span>
                  </h4>
                  <div className="footer_nav">
                    <ul className="footer_menu">
                      <li className="menu-item">
                        <a
                          href="./carkey"
                          style={{ textDecoration: "none", color: "#dc3545" }}
                        >
                          Mở Khóa Cửa Ôtô
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="./#"
                          style={{ textDecoration: "none", color: "#dc3545" }}
                        >
                          Mở Cửa Nhà Bị Khóa
                        </a>
                      </li>

                      <li className="menu-item">
                        <a
                          href="./#"
                          style={{ textDecoration: "none", color: "#dc3545" }}
                        >
                          Làm Lại Chìa Khóa
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="./#"
                          style={{ textDecoration: "none", color: "#dc3545" }}
                        >
                          Làm Lại Remote Cửa Cuốn
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="widget_title">
                    Đường dẫn đến trang admin
                    <span className="title_line"></span>
                  </h4>
                  <div className="footer_nav">
                    <ul className="footer_menu">
                      <a
                        href="./admin"
                        style={{ textDecoration: "none", color: "#dc3545" }}
                      >
                        Admin
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 pd_lr_65">
                <div
                  className="footer_widget footer_contact aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div className="logo_footer d-none d-md-none d-lg-block">
                    <a href="/">
                      <img src="assets/logo2.png" alt="Locksmith" />
                    </a>
                  </div>
                  <h4 className="widget_title d-md-block d-lg-none">
                    Liên Hệ Với Chúng Tôi
                    <span className="title_line"></span>
                  </h4>
                  <div className="contact_info">
                    <h4>{keyShop.mail}</h4>
                    <h4>
                      Số 10 Nguyễn Chí Thanh, Phường Tân An
                      <br /> Tp Buôn Ma Thuột, Đắk Lắk, Việt Nam
                    </h4>
                    <div className="phone">
                      <img src="assets/phone2.png" alt="phone" />
                      <div>
                        Thứ 2- CN <span>(7:00 a.m - 6:00 p.m)</span>
                        <h4>{keyShop.phone}</h4>
                        <h4> {keyShop.phones}</h4>
                        <h4>{keyShop.telephone}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pd_0">
                <div
                  className="footer_widget aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4 className="widget_title">
                    Bản Đồ
                    <span className="title_line"></span>
                  </h4>
                  <iframe
                    title="This is a unique title"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.45701398121344!2d108.06488454818692!3d12.693019242281123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7931e050c67%3A0x696c4c914d9cb2d0!2zU-G7rWEgS2jDs2EgQnXDtG4gTWEgVGh14buZdCBUaeG7h20gS2jDs2EgVGnhur9uIFBow6F0!5e0!3m2!1svi!2s!4v1673438520489!5m2!1svi!2s"
                    width="350"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
