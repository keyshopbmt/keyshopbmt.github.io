import React from 'react';
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import './transponder.css';

export default function Transponder() {
  return (
    <div className="transponder">
      <h2><b>

        Tất cả các loại chìa khóa khác nhau
      </b>
        </h2>
      <p>
        Chìa khóa bộ tiếp sóng tiêu chuẩn chỉ là chìa khóa ô tô có gắn chip
        bên trong. Theo thời gian, các khóa của bộ phát đáp trở nên phức tạp
        hơn. Các nhà sản xuất ô tô bắt đầu tung ra các loại mới và ngày nay
        có rất nhiều tùy chọn cho phím bộ phát đáp - chúng ta hãy xem xét
        tất cả chúng.
      </p>
      <div className="transponder-car">
        <MDBRow>
          <MDBCol md="6">
            <img
              src="../assets/services/carkey/regular_chip_key.png"
              alt=""
              className="image-trasponder"
            />
            <h3><b>

              Chìa khóa chip thông thường
            </b>
              </h3>
            <p>
              <b>Chìa khóa chip thông thường,</b> thường các loại xe đời cũ được
              trang bị loại chìa khóa này. Điều khiển từ xa thường là một
              thiết bị riêng biệt dưới dạng tùy chọn.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <img
              src="../assets/services/carkey/remote_flip_key-1920w.png"
              alt=""
              className="image-trasponder"
            />
            <h3><b>

              Chìa khoá điều khiển / Chìa khoá điều khiển gập
            </b>
              </h3>
            <p>
              <b>Chìa khoá điều khiển / Chìa khoá điều khiển gập</b> là một chiếc chìa
              khóa được trang bị một bộ điều khiển từ xa, giúp việc mang
              theo chìa khóa ô tô của bạn trở nên thuận tiện hơn.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <img
              src="../assets/services/carkey/fobik_keys-1920w.png"
              alt=""
              className="image-trasponder"
            />
            <h3><b>

              Chìa khóa chip Fobik
            </b>
              </h3>
            <p>
              <b>Chìa khóa chip FOBIK</b> là chìa khóa chip đi kèm như một
              điều khiển từ xa và có một lưỡi kim loại khẩn cấp để khóa cửa
              bên trong nó.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <img
              src="../assets/services/carkey/proximity-keys-1920w.png"
              alt=""
              className="image-trasponder"
            />
            <h3><b>

              Proximity key / Comfort access key
            </b>
              </h3>
            <p>
          
              <b>Chìa khóa thông minh</b> hay còn gọi là
              <b> Proximity key </b> là loại chìa khóa thông minh dạng nút
              bấm đi kèm với một lưỡi gạt khẩn cấp bên trong nó.{" "}
            </p>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  )
}
