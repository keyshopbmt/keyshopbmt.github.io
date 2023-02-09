import {React, useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Navbar() {
  const [isServiceButtonHovering, setIsHoveringServiceButton] = useState(false);

  const handleMouseEnterServiceButton = () => {
    setIsHoveringServiceButton(true);
  };

  const handleMouseLeaveServiceButton = () => {
    setIsHoveringServiceButton(false);
  };

  return (
    <header className="header">
      <div className="top_bar">
        <div className="container">
          <div className="top_bar_inner">
            <div className="header_social">
              <ul className="top_social">
                <li className="facebook">
                  <a href="https://www.facebook.com/chiakhoaotobmt">
                    <MDBIcon color="white" icon="fa-brands fa-facebook" />
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
                <img src="assets/phone.png" alt="phone"/>
                <div>
                  <span>Liên Hệ : </span>
                  <br />
                     0942975959
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

              <a href="/">
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Trang chủ
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="./product"
                  role="button"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </Link>
                <ul className="dropdown-menu">
              
                </ul>
              </li>
              <li className="nav-item dropdown button-services" >
                <Link className="nav-services" href="/dichvu" style={{float:"left", paddingTop:"0.5rem", textDecoration:"none",
                 color: isServiceButtonHovering ? "#000000b3": "#0000008c"}} onMouseEnter={handleMouseEnterServiceButton} onMouseLeave={handleMouseLeaveServiceButton}>
                  Dịch Vụ
                </Link>
                <Link
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
              
                  
                  role="button"
                  aria-expanded="false"
                >
                  
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item"  to="./">
                     Sửa Khóa Và Làm Chìa
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item"  to="./">
                    Làm Remote Cửa Cuốn
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/carkey">
                    Chìa Khóa Ôtô 
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="./">
                    Chìa Khóa Xe Máy
                    </Link>
                  </li>
                
                </ul>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="./news">
                  Tin Tức
                  </Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="#">Liên Hệ</Link>
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
