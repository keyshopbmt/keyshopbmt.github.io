import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from "../../Navbar/Navbar";
import "./carkey.css";

export default function Carkey() {
  return (
    <div>
      <Navbar />
      <div classNameName="card text-bg-dark" id="backgroup">
        <img
          src="../assets/services/carkey/backgroup.jpg"
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay">
          <div className="card-car">
            <h3 >THAY THẾ CHÌA KHÓA ÔTÔ PHẢI CHĂNG VÀ CHUYÊN NGHIỆP 
              <br />
              TẠI KEYSHOP BMT 
              
            </h3>
          </div>
        </div>
      </div>
    <div className="title-car">
      <h2>Dịch vụ sửa chữa và thay thế chìa khóa Ôtô tại Key Shop Bmt</h2>
      <MDBRow>
      <MDBCol md='8'>
      <h4>
        Dịch vụ sửa chữa và thay thế khóa Ôtô 24/24
      </h4>
      <ul>
        <li>Dịch vụ cắt chìa khóa nhanh chóng uy tín.</li>
        <li>Giá cả phải chăng.</li>
        <li>Cung cấp tất cả các dịch vụ và giải pháp về chìa khóa Ôtô.</li>
        <li>Thay thế và sữa chữa chìa khóa Ôtô chuyên nghiệp</li>

      </ul>

      </MDBCol>
      <MDBCol md='4'>
        <h4> 0942975959
        </h4>
        <p>
Chúng tôi làm chìa khóa ô tô từ xa cho bất kỳ chiếc xe nào.</p>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
  );
}
