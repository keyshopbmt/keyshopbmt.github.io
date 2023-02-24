import React from 'react';
import './chipkey.css';
import { keyShop } from '../Db';

export default function Chipkey() {
  return (
    <div>
        <div className='chip-key'>
            <h2>Các loại chìa khóa chip chúng tôi có thể làm và sao chép</h2>
        </div>
        <div className='chip-key-title'>
        <img
            src="../assets/services/dichvu/car-key-duplication-machine-578w.jpg"
            alt=""
            className="rounded-4 shadow-4 float-start m-4"
            style={{ width: "300px", height: "470px", paddingRight: "20px" }}
          />
            
          <p>
            <b>Chúng tôi là nhà cung cấp dịch vụ làm chìa khóa hàng đầu ở Buôn Ma Thuột. Chúng tôi cung cấp dịch vụ làm chìa khóa chip cho mọi loại chìa</b>
          </p>
          <p>Các kỹ thuật viên của chúng tôi được đào tạo đầy đủ và có công nghệ tiên tiến nhất cho các giải pháp chìa khóa chip. Nếu bạn cần một dịch vụ làm chìa khóa ở Buôn Ma Thuột, chúng tôi muốn bạn tin tưởng vào chúng tôi; hãy yên tâm rằng công việc sẽ được thực hiện một cách nhanh chóng và chuyên nghiệp.</p>
          <p>Chúng tôi cung cấp dịch vụ cắt chìa cho mọi loại chìa chíp như:</p>
          <ul>
            <li>Chìa khóa điều khiển từ xa</li>
            <li>Chìa khóa chip thông thường</li>
            <li>Chìa khoá điều khiển gập</li>
            <li>Chìa khóa Proximity</li>
            <li>Chìa khóa điều khiển FOBIK</li>
          </ul>
          <p>Dịch vụ làm chìa khóa hoạt động từ 7h sáng đến 6h tối mỗi ngày. Chúng tôi cũng cung cấp dịch vụ làm chìa khẩn cấp  mọi lúc 24h.</p>
          <button className="btn btn-secondary btn-lg btn-block">
        Cần làm chìa khóa mới ? Hãy gọi ngay cho chúng tôi:{" "}
        <span> {keyShop.phone}, {keyShop.phones}, {keyShop.telephone}</span></button>
        <div className='chip-title-key'>

        <p>
            <b>Tiếp cận công nghệ mới</b>
          </p>
          <p>Các công nghệ ngày nay ngày càng trở nên phức tạp hơn và {keyShop.title} đang thích ứng với các công nghệ chống trộm mới. Chúng tôi đảm bảo rằng tất cả các kỹ thuật viên thợ khóa của chúng tôi đều được trang bị công nghệ tiên tiến nhất và được đào tạo đầy đủ.</p>
        </div>
        </div>
    </div>
  )
}
