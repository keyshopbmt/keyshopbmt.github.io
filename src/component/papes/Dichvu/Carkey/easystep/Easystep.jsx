import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./easystep.css";
import { keyShop } from "../Db";

export default function Easystep() {
  return (
    <div className="easy-step">
    <h2><b>4 Bước đơn giản để làm chìa khóa xe Ôtô của bạn</b></h2>
    <Container className="step-image">
      <Row md={4}>
        <Col>
          <img
            src="../assets/services/carkey/no-1.png"
            alt=""
            className="image-no1"
          />
          <br />
          <img
            src="../assets/services/carkey/call-us.png"
            alt=""
            className="image-call"
          />
          <h4>Liên hệ với chúng tôi:</h4>
          <h4>
            <span> {keyShop.phone}</span>
          </h4>
        </Col>
        <Col>
          <img
            src="../assets/services/carkey/no-2.png"
            alt=""
            className="image-no1"
          />
          <br />
          <img
            src="../assets/services/carkey/technician.png"
            alt=""
            className="image-call"
          />
          <h4>Một kỹ thuật viên sẽ được cử đến</h4>
        </Col>
        <Col>
          <img
            src="../assets/services/carkey/no-3.png"
            alt=""
            className="image-no1"
          />
          <br />
          <img
            src="../assets/services/carkey/car-key.png"
            alt=""
            className="image-call"
          />
          <h4>Kỹ thuật viên sẽ thay chìa khóa Ôtô cho bạn </h4>
        </Col>
        <Col>
          <img
            src="../assets/services/carkey/no-4.png"
            alt=""
            className="image-no1"
          />
          <br />
          <img
            src="../assets/services/carkey/payment.png"
            alt=""
            className="image-call"
          />
          <h4>Bạn thanh toán dịch vụ và nhận hóa đơn bảo hành</h4>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
