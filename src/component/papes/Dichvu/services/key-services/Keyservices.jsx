import React from "react";
import "./keyservices.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Keyservices() {
  return (
    <div>
      <div className="key-locksmith">
        <h2>
          <b>Thợ Khóa tốt nhất thành phố Buôn Ma Thuột </b>
        </h2>
        <div className="key-services-title">
          <img
            src="../assets/services/dichvu/keyshop.jpg"
            alt=""
            className="rounded-4 shadow-4 float-end m-4"
            style={{ width: "300px", height: "600px", paddingLeft: "20px" }}
          />
          <div className="key-title">
            <h3>
              <b>Thợ khóa đáng tin cậy ở Buôn Ma Thuột</b>
            </h3>
            <p>
              Key Shop BMT là nhà cung cấp dịch vụ chìa khóa và thợ khóa hàng
              đầu ở thành phố Buôn Ma Thuột. Ngày nay, có rất nhiều kiểu chìa
              khóa khác nhau, vì vậy điều cần thiết là phải đào tạo nhân viên
              một cách bài bản và cập nhật tất cả các kỹ năng mới nhất của thợ
              khóa.
            </p>
            <p>
              Tại Key Shop BMT, chúng tôi luôn đảm bảo trang bị tất cả các chìa
              khóa cần thiết để đảm bảo chúng tôi cung cấp dịch vụ nhanh nhất
              cho cuộc gọi khẩn cấp của bạn và các kỹ thuật viên của chúng tôi
              được trang bị các công nghệ mới nhât.
            </p>
            <h3>
              <b>Thợ khóa bạn có thể tin cậy</b>
            </h3>
            <p>
              Một trong những lý do chính khiến mọi người gọi cho chúng tôi về
              dịch vụ làm chìa khóa ở Buôn Ma Thuột là vì họ bị mất chìa khóa.
              Chúng tôi là một trong số ít ở Buôn Ma Thuột cung cấp dịch vụ thợ
              khóa di động không.
            </p>
            <p>
              Cho dù chìa khóa của bạn bị đánh cắp, bạn đánh rơi hoặc vô tình xả
              xuống bồn cầu, đội ngũ trực điện thoại của chúng tôi luôn sẵn sàng
              hỗ trợ bạn. Chúng tôi rất sẵn lòng đến bất cứ nơi nào bạn ở và
              giúp bạn thay chìa khóa.
            </p>
            <h3>
              <b>Các thợ khóa chuyên nghiệp</b>
            </h3>
            <p>
              Tại Key Shop BMT, chúng tôi sẵn sàng trợ giúp bạn bằng cách cung
              cấp các dịch vụ làm chìa khóa tốt nhất hiện có ở thành phố Buôn Ma
              Thuột. Chúng tôi cố gắng cung cấp dịch vụ tốt cho khách hàng và
              cung cấp các giải pháp hiệu quả với giá cả phải chăng cho tất cả
              các nhu cầu về chìa khóa của bạn. Các dịch vụ của chúng tôi bao
              gồm dịch vụ thợ khóa dân cư cho cộng đồng địa phương và dịch vụ
              thợ khóa thương mại cho các công ty và đại lý ô tô địa phương.
            </p>
            <p>
              Sự hài lòng của khách hàng luôn là ưu tiên số một của chúng tôi,
              đây là lý do tại sao chúng tôi luôn cung cấp các dịch vụ chuyên
              nghiệp.
              <b>
                {" "}
                Giá cả của chúng tôi hoàn toàn minh bạch, vì khách hàng của
                chúng tôi luôn biết giá trước khi bắt đầu bất kỳ dịch vụ
              </b>
              . Bạn kiểm tra trước khi thanh toán hóa đơn để đảm bảo bạn hoàn
              toàn hài lòng với dịch vụ đã hoàn thành.
            </p>
          </div>
        </div>
      </div>
      <div className="title-booking">
        <MDBRow>
          <MDBCol md="4">
            <h3>
              Cần một bộ chìa khóa mới?
              <br />
              Liên hệ với chúng tôi ngay hôm nay!
            </h3>
          </MDBCol>
          <MDBCol md="4">
            <p>
              Đặt hẹn dễ dàng, thợ khóa của chúng tôi sẽ được cử đến địa điểm
              của bạn; và cung cấp cho bạn một bộ chìa khóa mới.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <a className="btn btn-danger" href="/" role="button">
              Liên Hệ
            </a>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
