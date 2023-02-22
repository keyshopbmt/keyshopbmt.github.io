import React from 'react';
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import './serviceskey.css';

export default function Serviceskey() {
  return (
    <div className='serviceskey'>
        <MDBRow>
            <MDBCol md='4'>
            <img
              src="../assets/services/dichvu/women-hand-showing-thumbs-up-outside-of-the-car-429w.jpg"
              alt=""
              className="img-serviceskey"
            />
            </MDBCol>
            <MDBCol md='4' >
                <ul>
                    <li>Làm khóa Ôtô ở tp Buôn Ma Thuột</li>
                    <li>Làm khóa transponder bảo mật cao</li>
                    <li>Sao chép khóa transponder và khóa chip</li>
                    <li>Sao chép khóa Ôtô dự phòng</li>
                    <li>Sửa và làm chìa khóa xe máy</li>
                    <li>Chìa khóa chip thông minh được lập trình</li>
                </ul>
            </MDBCol>
            <MDBCol md='4'>
            <ul>
                <li>Làm Remote cửa cuốn</li>
                <li>Thay chìa khóa cốp các loại</li>
                <li>Dịch vụ thay chìa khóa khẩn cấp</li>
                <li>Dịch vụ lắp khóa cửa</li>
                <li>Cung cấp chìa khóa chip dự phòng</li>
                <li>Xóa chìa khóa xe bị đánh cắp</li>
            </ul>

            </MDBCol>
        </MDBRow>
    </div>
  )
}
