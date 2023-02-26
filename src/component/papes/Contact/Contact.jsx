import React from 'react';
import { MDBRow, MDBCol} from "mdb-react-ui-kit";
import { keyShop } from "../Db";
import Navbar from '../Navbar/Navbar';
import './contact.css';
import Footer from '../Footer/Footer';

export default function Contact() {
  return (
    <div>

     <Navbar/>
    <div className='contact'>
         <MDBRow>
        <MDBCol md="6">
          <h2>Liên Hệ Với Chúng Tôi</h2>
          <p>Bạn có câu hỏi? Liên hệ với Chúng tôi để được giải đáp.</p>
          <h3>Thời gian làm việc:</h3>
          <p>Thứ Hai - Chủ Nhật: 7:00 am- 6:00 pm</p>
          <p>Dịch vụ khẩn cấp 24/7.</p>
          <p>Địa chỉ: {keyShop.adress}</p>
        </MDBCol>
        <MDBCol md="1">
        <a href= {keyShop.facebook}>
        <img
            src="../assets/services/carkey/facebook.png"
            alt=""
            className="image-face"
          />
          </a>
          <h5>Fanpage</h5>
        </MDBCol>
        <MDBCol md="1">
        <img
            src="../assets/services/carkey/phone_icon-1920w.png"
            alt=""
            className="image-phone"
          />
          <h5>Phone:</h5>
          <h5> {keyShop.phone}</h5>
          <h5> {keyShop.phones}</h5>
          <h5>{keyShop.telephone}</h5>
        </MDBCol>
        <MDBCol md="4">
        <img
            src="../assets/services/carkey/key_man_red-1920w.png"
            alt=""
            className="image-man"
          />
        </MDBCol>
        </MDBRow>
    </div>
    <Footer/>
    </div>
    
  )
}
