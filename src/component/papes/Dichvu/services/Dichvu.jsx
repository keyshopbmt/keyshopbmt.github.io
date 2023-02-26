import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './dichvu.css';
import { MDBRow, MDBCol} from "mdb-react-ui-kit";
import Titleservices from './titleservices/Titleservices';
import Serviceskey from './services-key/Serviceskey';
import Keyservices from './key-services/Keyservices';
import Chipkey from './chip-key/Chipkey';
import Footerservices from './footer-services/Footerservices';
import Footer from '../../Footer/Footer';

export default function Dichvu() {
  return (
      <div>
        <Navbar/>
        <div className="card text-bg-dark" >
    <img
      src="../assets/services/dichvu/laser_cut_background-2880w.jpg"
      className="services-img"
      alt=""
    />
    <div className="card-img-overlay">
      <div className="dichvu">
        <h3>
        SỬA VÀ LÀM CHÌA KHÓA CHUYÊN NGHIỆP
          <br />
          TẠI KEYSHOP BMT
        </h3>
      </div>
    </div>
    <div className='dichvu-contact'>
    <MDBRow>
    <MDBCol md="8">
      <p>Khi bạn mất chìa khóa, đó là một tình huống căng thẳng. Key Shop BMT là nơi sửa và làm chìa khóa uy tín ở thành phố Buôn Ma Thuột, cung cấp nhiều dịch vụ sửa và làm chìa khóa ở thành phố Buôn Ma Thuột và các khu vực lân cận, bao gồm các dịch vụ khẩn cấp và không khẩn cấp. Đội ngũ của chúng tôi luôn sẵn sàng trợ giúp bạn.</p>
    </MDBCol>
    <MDBCol md="2">
    <a className="btn btn-danger" href="/" role="button">Liên Hệ</a>
    </MDBCol>
    </MDBRow>
    </div>
    </div>
   <Titleservices/> 
   <Serviceskey/>
   <Keyservices/>
   <Chipkey/>
   <Footerservices/>
    <Footer/>
    </div>
  )
}
