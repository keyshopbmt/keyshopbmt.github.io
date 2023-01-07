import React from "react";
import './home.css';
import Navbar from "../Navbar";

export default function Home() {
  return (
    <div className="home">
    <Navbar/>
   

            <div className="card text-bg-dark" id="thongdiep">
                <img src="../assets/slider_bg1.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="text-civic">
                        <h3 className="card-title">DỊCH VỤ KHẨN CẤP: 0942975959</h3>
                        <h2 className="text-card">DỊCH VỤ LUÔN SẴN SÀNG 24/7</h2>

                        <p className="card-text">
                            Tách mình khỏi những chuẩn mực cố định, Honda Civic chuyển mình để bứt phá trong từng đường
                            nét <br />
                            thiết kế và tính năng, kiến tạo nên những thành công mới cho chủ sở hữu
                        </p>
                    </div>
                </div>
            </div>

   </div>
  );
}
