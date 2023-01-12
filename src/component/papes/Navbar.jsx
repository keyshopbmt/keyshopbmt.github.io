import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <header className="header">
      <div className="top_bar">
        <div className="container">
          <div className="top_bar_inner">
            <div className="header_social">
              <ul className="top_social">
                <li className="facebook">
                  <a href="https://www.facebook.com/tienphatexpertkeyworld">
                    <MDBIcon color="white" icon="fa-brands fa-facebook" />
                  </a>
                </li>

                <li className="mail">
                  <a href="/">
                    <MDBIcon color="white" icon="fa-regular fa-envelope " />
                  </a>
                </li>
              </ul>
            </div>
            <div className="header_info">
              <div className="schedule">
                <img src="assets/clock.png" alt="schedule" />{" "}
                <div>
                  Thứ 2 - Chủ Nhật <span>(7.00am-6.00pm)</span>
                </div>
              </div>
              <div className="phone">
                <img src="assets/phone.png" alt="phone" />
                <div>
                  <span>Liên Hệ</span>
                  <br />
                  (+084)0942975959
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_bar">
        <div className="container">
          <div className="middle_bar_inner">
            <div className="logo">

              <a >
                <img src="assets/logo1.png" alt="logo" />
              </a>
            </div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm ">
        <div className="container">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-3 " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="./following"
                  role="button"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </Link>
                <ul className="dropdown-menu">
              
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="./services"
                  role="button"
                  aria-expanded="false"
                >
                  Dịch vụ
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item"  href="./">
                     Sửa Khóa Và Làm Chìa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item"  href="./">
                    Làm Remote Cửa Cuốn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./">
                    Chìa Khóa Ôtô Và Xe Máy
                    </a>
                  </li>
                 
                
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Liên Hệ</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
           
          </div>
        </div>
      </div>
    </header>
  );
}
