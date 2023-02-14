import React from 'react';
import './remote.css';

export default function Remotecar() {
  return (
    <div className="car-remote">
    <h2><b>Các bước thay Remote Ôtô </b></h2>
    <div className="information-car">
      <img
        src="../assets/services/carkey/writing_icon.png"
        alt=""
        className="rounded-4 shadow-4 float-start m-4"
        style={{
          width: "50px",
          height: "50px",
          
        }}
      />

      <div className="information-carkey">
        <h3><b>Chuẩn bị thông tin về xe của bạn và gọi cho chúng tôi.</b></h3>
        <p>
          <span>
            Trước khi gọi thợ khóa Ôtô, điều cần thiết là phải chuẩn bị
            sẵn tất cả thông tin về chiếc xe của bạn cho kỹ thuật viên. Nó
            phải bao gồm số nhận dạng xe (VIN), kiểu xe, nhà sản xuất, năm
            sản xuất và các tùy chọn đi kèm. Thông tin này sẽ giúp bạn
            tiết kiệm thời gian bằng cách hỗ trợ kỹ thuật viên của chúng
            tôi xác định đúng "ID FCC" (số bộ phận) cho khóa mới của bạn
            nhanh hơn.
          </span>
        </p>
      </div>
      <div className="information-car">
        <img
          src="../assets/services/carkey/quick_response.png"
          alt=""
          className="rounded-4 shadow-4 float-start m-4"
          style={{
            width: "50px",
            height: "50px",
            
          }}
        />
        <div className="information-carkey">
          <h3><b>

            Kỹ thuật viên sẽ đến địa điểm của bạn, xác định remote có phù
            hợp với Ôtô của bạn.
          </b>
          </h3>
          <p>
            <span>
              Dựa trên thông tin bạn cung cấp, kỹ thuật viên sẽ xác định
              remote có phù hợp với xe của bạn và chuẩn bị cho công việc.
              Khi kỹ thuật viên đến địa điểm của bạn, anh ta sẽ ngay lập
              tức tiến hành thay thế chìa khóa mới cho Ôtô của bạn.
            </span>
          </p>
        </div>
        <div className="information-car">
          <img
            src="../assets/services/carkey/racing_finish_flag.png"
            alt=""
            className="rounded-4 shadow-4 float-start m-4"
            style={{
              width: "50px",
              height: "50px",
            
            }}
          />
          <div className="information-carkey">
            <h3><b>
              
              Bước hoàn thiện
            </b>
              </h3>
            <p>
              <span>
                Bước cuối cùng, tùy thuộc vào loại chìa khóa remote mà bạn
                có. Nếu loại remote bạn có không phải là loại chìa khóa
                thông thường, kỹ thuật viên sẽ phải lấy "mã khóa" cơ khí
                của bạn và cắt lưỡi dao. Lưỡi dao có thể là lưỡi cắt tiêu
                chuẩn hoặc lưỡi cắt laser. Tất cả các kỹ thuật viên của
                chúng tôi đều được trang bị các công cụ phù hợp và có thể
                cắt cả hai loại một cách dễ dàng.
              </span>
            </p>
            <p>
              <span >
                Sau khi lưỡi dao được cắt, công việc sẽ hoàn thành và bạn
                sẽ có một chìa khóa dự phòng mới cho Ôtô của mình!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
