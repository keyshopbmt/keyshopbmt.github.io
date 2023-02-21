import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./titleservices.css";

export default function Titleservices() {
  return (
    <div className="title-services">
      <h2>Dịch vụ sửa và làm chìa khóa chúng tôi cung cấp</h2>
      <MDBRow>
        <MDBCol md="6">
          <a href="/carkey" className="title-dichvu">
            <img
              src="../assets/services/dichvu/honda_remote_key-2880w.png"
              alt=""
              className="img-titlesevices"
            />
            <h4>Chìa Khóa Ôtô</h4>
            <p>
              Hầu như tất cả các xe ôtô mới hiện nay đều có tùy chọn điều khiển
              từ xa từ nhà sản xuất. Một lợi ích của việc này là có thể khóa và
              mở khóa cửa từ xa, cũng như các tùy chọn khác tùy thuộc vào trang
              bị của ôtô. Chúng tôi mang theo điều khiển từ xa chất lượng cao và
              có thể lập trình chúng cho bạn.
            </p>
            <span>Read More</span>
          </a>
        </MDBCol>
        <MDBCol md="6">
        <a href="/carkey" className="title-dichvu">
          <img
            src="../assets/services/dichvu/motorcycle_key-2880w.png"
            alt=""
            className="img-titlesevices"
          />
          <h4>Chìa Khóa Xe Máy</h4>
          <p>
            Mất hết chìa khóa xe máy? Cần sao chìa khóa xe máy và không biết ai
            làm điều đó trong thành phố? Đừng lo lắng! Chúng tôi có thể sao chép
            hoặc làm chìa khóa từ cho hầu hết mọi loại xe máy.
          </p>
          <span>Read More</span>
          </a>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
