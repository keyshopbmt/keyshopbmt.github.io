import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <h3>
              THAY THẾ CHÌA KHÓA ÔTÔ PHẢI CHĂNG VÀ CHUYÊN NGHIỆP
              <br />
              TẠI KEYSHOP BMT
            </h3>
          </div>
        </div>
      </div>
      <div className="title-car">
        <h2>Dịch vụ sửa chữa và thay thế chìa khóa Ôtô tại Key Shop Bmt</h2>

        <div className="row-title">
          <h4>
            Dịch vụ sửa chữa và thay thế khóa Ôtô 24/24 :<span>0942975959</span>
          </h4>
          <p>(chúng tôi làm chìa khóa Ôtô từ xa cho bất kì chiếc xe nào)</p>
          <ul>
            <li>Dịch vụ cắt chìa khóa nhanh chóng uy tín.</li>
            <li>Giá cả phải chăng.</li>
            <li>Cung cấp tất cả các dịch vụ và giải pháp về chìa khóa Ôtô.</li>
            <li>Thay thế và sữa chữa chìa khóa Ôtô chuyên nghiệp</li>
          </ul>
          <h6>**Nhận báo giá cho dịch vụ cắt chìa khóa của bạn ngay hôm nay</h6>
          <img
            src="../assets/services/carkey/1920.jpg"
            alt=""
            className="car-img"
          />
        </div>
      </div>

      <div className="car-key">
        <img
          src="../assets/services/carkey/key.jpg"
          alt=""
          className="rounded-4 shadow-4 float-end m-4"
          style={{ width: "350px", height: "500px", paddingLeft: "10px" }}
        />
        <div className="carkey-title">
          <h3>Làm chìa khóa Ôtô dễ dàng</h3>
          <p>
            Chúng tôi cung cấp nhiều loại dịch vụ làm chìa khóa Ôtô , nếu bạn bị
            mất tất cả chìa khóa Ôtô, chúng tôi có thể khôi phục bộ chìa khóa bị
            mất, flash thiết bị cố định của bạn và xóa thông tin khỏi bộ nhớ của
            những chiếc bị mất.
          </p>
          <p>
            Nếu bạn mất quyền truy cập vào phương tiện của mình và không thể đến
            cửa hàng của chúng tôi, chỉ cần gọi cho chúng tôi. Chúng tôi cung
            cấp dịch vụ di động. Nhân viên điều phối sẽ nhanh chóng cử chuyên
            gia của chúng tôi đến và anh ta sẽ nhanh chóng khôi phục quyền truy
            cập vào xe bằng cách làm một bộ chìa khóa ngay tại chỗ.
          </p>
          <button className="btn btn-secondary btn-lg btn-block">
            Cần chìa khóa xe mới ? Hãy gọi ngay cho chúng tôi:{" "}
            <span> 0942975959</span>
          </button>
          <h3>Tiết kiệm chi phí làm chìa khóa xe của bạn</h3>
          <p>
            Nhiều người đổ xô đến đại lý địa phương của họ để nhận dịch vụ thay
            thế chìa khóa Ôtô. Cuối cùng, họ thường phải trả rất nhiều tiền cho
            chìa khóa xe mới của mình. Thật không may, họ không biết rằng có
            những lựa chọn thay thế rẻ hơn có thể tiết kiệm thời gian và tiền
            bạc mà không ảnh hưởng đến chất lượng của chìa khóa thông minh. Một
            trong những lựa chọn thay thế là gọi cho chúng tôi, thợ khóa xe hơi
            tại Đắk Lắk.
          </p>
          <b>
            Dịch vụ thợ khóa Ôtô đôi khi có thể tiết kiệm tới 50% chi phí chìa
            khóa Ôtô của bạn.
          </b>
          <p>
            Giả sử bạn bị mất chìa khóa Ôtô hoặc cần sao chép lại. Trong trường
            hợp đó, chúng tôi cung cấp dịch vụ thay thế chìa khóa Ôtô. Chúng tôi
            có thể cung cấp chìa khóa Ôtô mới với giá cả rất phải chăng.
          </p>
          <p>
            Điều tuyệt vời nhất là bạn thậm chí không cần phải lái xe hoặc kéo
            xe của mình đến cửa hàng của chúng tôi.
          </p>
        </div>
      </div>
      <div className="easy-step">
        <h2>4 Bước đơn giản để thay thế chìa khóa xe Ôtô của bạn</h2>
        <Container className="step-image">
        <Row md={4}>
        <Col>
        <img src="../assets/services/carkey/no-1.png" alt="" className="image-no1"/><br />
        <img src="../assets/services/carkey/call-us.png" alt="" className="image-call"/>
        <h4>Liên hệ với chúng tôi:</h4>
        <h4><span>0942975959</span></h4>
        </Col>
        <Col >
        <img src="../assets/services/carkey/no-2.png" alt="" className="image-no1"/><br />
        <img src="../assets/services/carkey/technician.png" alt="" className="image-call"/>
        <h4>Một kỹ thuật viên sẽ được cử đến</h4>
        </Col>
        <Col>
        <img src="../assets/services/carkey/no-3.png" alt="" className="image-no1"/><br />
        <img src="../assets/services/carkey/car-key.png" alt="" className="image-call"/>
        <h4>Kỹ thuật viên sẽ thay chìa khóa Ôtô cho bạn </h4>
        </Col>
        <Col>
        <img src="../assets/services/carkey/no-4.png" alt="" className="image-no1"/><br />
        <img src="../assets/services/carkey/payment.png" alt="" className="image-call"/>
        <h4>Bạn thanh toán dịch vụ và nhận hóa đơn bảo hành</h4>
        </Col>
      </Row>
    </Container>
      </div>
      <div className="type-keycar">
        <h2>Các loại remote Ôtô chúng tôi cung cấp và thay thế</h2>
        <img
          src="../assets/services/carkey/hand-carkeys.jpg"
          alt=""
          className="rounded-4 shadow-4 float-end m-4"
          style={{ width: "500px", height: "410px", paddingLeft: "10px" }}
        />
        <div className="type-keycar-title">
          <p>Chúng tôi cố gắng trở thành nhà cung cấp dịch vụ chìa khóa Ôtô tốt nhất ở Buôn Ma Thuột, Đắk Lắk; đây là lý do tại sao chúng tôi không ngừng nghiên cứu và tìm hiểu thị trường. Nó cho phép chúng tôi thay thế càng nhiều chìa khóa Ôtô càng tốt cho khách hàng của mình.<b>Chúng tôi có thể sao chép hoặc thay thế chìa khóa xe bị mất bằng chìa khóa mới cho hầu hết các loại xe</b></p>
          <h3>Chúng tôi làm chìa khóa Ôtô cho tất cả các hãng xe</h3>
          <p>Các kỹ thuật viên lành nghề của chúng tôi có thể thay thế bất kỳ điều khiển từ xa cho Ôtô, chẳng hạn như:</p>
          <ul>
            <li><b>Chìa khóa thông thường</b> - Điều khiển từ xa đi kèm dưới dạng một bộ phận riêng biệt với chìa khóa bộ phát (chìa khóa ô tô thông thường.)</li>
            <li><b>Chìa khóa điều khiển từ xa hoặc chìa khóa lật từ xa</b> - Điều khiển từ xa đi kèm như một thiết bị có chip bộ phát đáp (chìa khóa và điều khiển từ xa trong một thiết bị)</li>
            <li><b>Chìa khóa thông minh (hệ thống khởi động bằng nút bấm)</b>- Điều khiển từ xa tiên tiến cho phép người dùng truy cập vào xe theo kiểu không cần chìa khóa và khởi động xe bằng cách nhấn một nút để khởi động xe.</li>
          </ul>
          <button className="btn btn-secondary btn-lg btn-block">
            Để đặt hẹn, xin vui lòng gọi đường dây chính của chúng tôi: 
            <span> 0942975959</span>
          </button>
        </div>
        <div className="replacing-carkey">
          <img
          src="../assets/services/carkey/key-cutting.jpg"
          alt=""
          className="rounded-4 shadow-4 float-start m-4"
          style={{ width: "450px", height: "600px", paddingLeft: "10px" }}
          />
          <h2>Thay chìa khóa Ôtô ngày càng khó</h2>
          <div className="replacing-key">
            <h3>Thợ khóa phải đầu tư vào các thiết bị mới để luôn phù hợp với sự thay đổi công nghệ</h3>
            <p>Với những tiến bộ không ngừng trong công nghệ bảo mật Ôtô, các loại hệ thống chìa khóa từ xa mới đang được giới thiệu hàng năm với nhiều tùy chọn và khả năng hơn.</p>
            <p>Ngày nay, hầu hết tất cả các nhà sản xuất Ôtô đều cài đặt một số loại tính năng ra vào không cần chìa khóa trong xe của họ khi chúng được sản xuất. Những chiếc Ôtô được trang bị công nghệ tiên tiến nhất thậm chí còn có các ứng dụng cho phép chủ sở hữu mở hoặc khóa Ôtô của bạn từ xa hoặc truy cập thông tin trực tuyến về Ôtô của bạn.</p>
            <p>Hệ thống từ xa Ôtô như vậy an toàn hơn và phức tạp hơn để lập trình. Một thợ khóa Ôtô phải đối mặt với những thách thức khi việc lập trình trở nên khó khăn hơn mỗi năm. Thợ khóa Ôtô phải theo kịp xu hướng và mua các công cụ lập trình tốt hơn với khả năng lập trình lớn hơn để luôn phù hợp. Nó dẫn đến việc dịch vụ cắt chìa khóa Ôtô trở nên đắt đỏ hơn.</p>
            <h3>Kỹ thuật viên của chúng tôi được trang bị các kĩ thuật mới nhất</h3>
            <p>Đây là lý do tại sao chúng tôi tại Key Shop BMT đầu tư mạnh vào công nghệ và thiết bị mới để cung cấp dịch vụ thay thế chìa khóa ô tô cho nhiều loại phương tiện. Nếu cần thay chìa khóa từ xa, bạn có thể tin tưởng vào nhóm của chúng tôi tại  Key Shop BMT để cung cấp cho bạn dịch vụ thay thế chìa khóa ô tô chuyên nghiệp.</p>


          </div>
        </div>
      </div>
    </div>
  );
}
