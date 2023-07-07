import React from "react";
import "./proceduremoto.css";

export default function Proceduremoto() {
  return (
    <div className="procedure-motokey">
      <h2>
        <b>Các bước làm chìa khóa xe máy</b>
      </h2>
      <div className="procedure-moto">
        <img
          src="../assets/services/moto/writing_icon.png"
          alt=""
          className="rounded-4 shadow-4 float-start m-4"
          style={{
            width: "50px",
            height: "50px",
          }}
        />

        <div className="procedure-keymoto">
          <h3>
            <b>Chuẩn bị thông tin về xe của bạn và gọi cho chúng tôi.</b>
          </h3>
          <p>
            <span>
              Kỹ thuật viên sẽ phải xác minh quyền sở hữu của chiếc xe máy khi
              đến nơi.Đây là một bước mà tất cả các thợ khóa phải tuân theo. Có
              sẵn những thông tin này sẽ tiết kiệm thời gian và cho phép kỹ
              thuật viên thợ khóa bắt đầu làm việc với xe máy nhanh hơn.
            </span>
          </p>
        </div>
        <div className="procedure-moto">
          <img
            src="../assets/services/moto/mechanical_chain-1920w.png"
            alt=""
            className="rounded-4 shadow-4 float-start m-4"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <div className="procedure-keymoto">
            <h3>
              <b>Sau đó kỹ thuật viên tiến hành làm chìa khóa</b>
            </h3>
            <p>
              <span>
                Sau khi xác minh thông tin của bạn, bạn cần tìm tổ hợp cơ khí
                cho xe máy của mình để cắt chìa khóa mới. Mỗi phím có các rãnh
                riêng (còn gọi là vết cắt) và không có hai phím nào được cắt
                giống nhau. Kỹ thuật viên có thể có được các vết cắt ban đầu
                bằng hai cách: Bằng cách trích xuất một trong các hình trụ và
                giải mã nó hoặc bằng cách sử dụng một công cụ đọc đặc biệt.
              </span>
            </p>
          </div>
          <div className="procedure-moto">
            <img
              src="../assets/services/moto/machine_cutter_icon-1920w.png"
              alt=""
              className="rounded-4 shadow-4 float-start m-4"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <div className="procedure-keymoto">
              <h3>
                <b>Cắt chìa khóa xe máy mới đúng tổ hợp</b>
              </h3>
              <p>
                <span>
                  Sau khi giải mã thành công xi lanh, kỹ thuật viên sẽ tiến hành
                  cắt chìa khóa xe máy mới bằng máy cắt chuyên dụng. Anh ta sẽ
                  cắt chiếc chìa khóa theo các đường rãnh mà anh ta đã giải mã
                  được từ khối trụ trước đó. Cắt chìa khóa xe máy không phải là
                  một nhiệm vụ dễ dàng vì trong số chúng yêu cầu cài đặt đặc
                  biệt và thẻ cắt độc đáo.
                </span>
              </p>
            </div>
          </div>
          <div className="procedure-moto">
            <img
              src="../assets/services/moto/racing_finish_flag.png"
              alt=""
              className="rounded-4 shadow-4 float-start m-4"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <div className="procedure-keymoto">
              <h3>
                <b>Bước hoàn thiện</b>
              </h3>
              <p>
                <span>
                  Nếu xi lanh đã được rút ra, điều duy nhất còn lại cần làm là
                  đặt nó trở lại. Tuy nhiên, nếu bạn có xe máy được trang bị hệ
                  thống chìa khóa chip, kỹ thuật viên sẽ cần tháo mô-đun điện ra
                  khỏi xe máy, đọc dữ liệu được lưu trữ chứa dữ liệu "mật khẩu"
                  phù hợp của bạn cho chiếc xe máy cụ thể đó và ghi đè lên bằng
                  dữ liệu của chính anh ta. dữ liệu. Sau thủ tục này, anh ta sẽ
                  phải lắp ráp lại mọi thứ và bạn sẽ có một chiếc chìa khóa mới
                  để khởi động xe máy.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
