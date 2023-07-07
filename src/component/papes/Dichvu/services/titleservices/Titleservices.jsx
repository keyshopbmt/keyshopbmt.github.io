import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./titleservices.css";

export default function Titleservices() {
  return (
    <div>
      <div className="title-services">
        <h2>Dịch vụ sửa và làm chìa khóa chúng tôi cung cấp</h2>
        <MDBRow>
          <MDBCol md="6">
            <a href="/carkey" className="title-dichvu ">
              <img
                src="../assets/services/dichvu/honda_remote_key-2880w.png"
                alt=""
                className="img-titlesevices"
              />
              <h4>Chìa Khóa Ôtô</h4>
              <p>
                Hầu như tất cả các xe ôtô mới hiện nay đều có tùy chọn điều
                khiển từ xa từ nhà sản xuất. Một lợi ích của việc này là có thể
                khóa và mở khóa cửa từ xa, cũng như các tùy chọn khác tùy thuộc
                vào trang bị của ôtô. Chúng tôi có thể lập trình chúng cho bạn.
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
                Mất hết chìa khóa xe máy? Cần sao chìa khóa xe máy và không biết
                ai làm điều đó trong thành phố? Đừng lo lắng! Chúng tôi có thể
                sao chép hoặc làm chìa khóa từ cho hầu hết mọi loại xe máy.
              </p>
              <span>Read More</span>
            </a>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="table-services">
        <MDBRow>
          <MDBCol md="1" className="img-women">
            <img
              src="../assets/services/dichvu/women-dispatcher-119w.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol md="8" className="title-eight">
            <p>
              Không chắc chắn chính xác loại vấn đề chìa khóa bạn đang gặp phải?
              <br />
              Không sao. Người hỗ trợ của chúng tôi sẽ hỏi bạn những câu hỏi phù
              hợp để tìm hiểu càng nhiều chi tiết càng tốt và đưa ra báo giá
              chính xác cho bạn.
            </p>
          </MDBCol>
          <MDBCol md="2" className="title-phone">
            <h2>0942975959</h2>
            <p>Nhận báo giá cho dịch vụ làm chìa khóa của bạn</p>
          </MDBCol>
          <MDBCol md="1"></MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
