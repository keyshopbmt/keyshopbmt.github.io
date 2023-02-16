import React from 'react';
import { MDBRow, MDBCol} from "mdb-react-ui-kit";
import './footercar.css';
import { keyShop } from "../Db";

export default function Footercar() {
  return (
    <div className='footer-keycar'>
        <h2>Cần dịch vụ làm chìa khóa Ôtô bị mất của bạn ở tp Buôn Ma Thuột?</h2>
        <p>Key Shop BMT cung cấp dịch vụ làm khóa Ôtô ở thành phố Buôn Ma Thuột và các khu vực lân cận. Chúng tôi cung cấp dịch vụ làm lại chìa khóa Ôtô bị mất, dịch vụ sao chép chìa khóa bộ phát đáp và cung cấp các giải pháp hệ thống chìa khóa bộ phát đáp bảo mật cao cho hầu hết các phương tiện.</p>
        <p>Chúng tôi luôn đảm bảo rằng chúng tôi đang thực hiện dịch vụ làm chìa khóa Ôtô một cách chuyên nghiệp. Nếu bạn đang ở thành phố Buôn Ma Thuột và bạn cần dịch vụ sửa khóa Ôtô, đừng ngần ngại liên hệ với chúng tôi. Gọi cho chúng tôi ngay hôm nay </p>
        <div className='footer-car'>
        <MDBRow>
        <MDBCol md="5">
          <h2>Liên Hệ Với Chúng Tôi</h2>
          <p>Bạn có câu hỏi? Liên hệ với Chúng tôi để được giải đáp.</p>
          <h3>Thời gian làm việc:</h3>
          <p>Thứ Hai - Chủ Nhật: 7:00 am- 6:00 pm</p>
          <p>Dịch vụ khẩn cấp 24/7.</p>
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
        </MDBCol>
        <MDBCol md="5">
        <img
            src="../assets/services/carkey/key_man_red-1920w.png"
            alt=""
            className="image-man"
          />
        </MDBCol>
        </MDBRow>
            
        </div>
    </div>
  )
}
