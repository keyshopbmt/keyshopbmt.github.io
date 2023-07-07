import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./footermotokey.css";
import { keyShop } from "../Db";

export default function Footermotokey() {
  return (
    <div className="footer-motokey">
      <div className="footer-keymoto">
        <h2>
          Cần dịch vụ làm chìa khóa xe máy bị mất của bạn ở tp Buôn Ma Thuột?
        </h2>
        <p>
          Làm chìa khóa xe máy có thể là một thách thức, nhiều thợ khóa không có
          kiến ​​thức và sẽ tránh những công việc như vậy. Chúng tôi ở{" "}
          {keyShop.title} sẽ không làm bạn thất vọng, các kỹ thuật viên của
          chúng tôi mang theo những công cụ tiên tiến nhất để có thể làm mọi
          chìa khóa xe máy mới nhất có thể. Vì vậy, nếu bạn đang tìm kiếm một
          thợ khóa xe máy có trình độ ở tp Buôn Ma Thuột mà bạn có thể tin
          tưởng, hãy gọi cho chúng tôi ngay hôm nay {keyShop.phone} hoặc liên hệ
          với chúng tôi để đặt lịch hẹn.{" "}
        </p>
      </div>
      <div className="footer-car">
        <MDBRow>
          <MDBCol md="5">
            <h2>Liên Hệ Với Chúng Tôi</h2>
            <p>Bạn có câu hỏi? Liên hệ với Chúng tôi để được giải đáp.</p>
            <h3>Thời gian làm việc:</h3>
            <p>Thứ Hai - Chủ Nhật: 7:00 am- 6:00 pm</p>
            <p>Dịch vụ khẩn cấp 24/7.</p>
          </MDBCol>
          <MDBCol md="1">
            <a href={keyShop.facebook}>
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
  );
}
