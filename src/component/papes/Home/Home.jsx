import React from "react";
import './home.css'
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <header className="header">
      <div className="top_bar">
        <div className="container">
          <div className="top_bar_inner">
            <div className="header_social">
              <ul className="top_social">
                <li className="facebook">
                  <a href="#">
                  <MDBIcon color="white" icon="fa-brands fa-facebook" />
                  </a>
                </li>
               
                <li className="mail">
                  <a href="#">
                  <MDBIcon color="white" icon="fa-regular fa-envelope " />
                  </a>
                </li>
               
              </ul>
            </div>
            <div className="header_info">
              <div className="schedule">
                <img src="assets/clock.png" alt="schedule" />{" "}
                <div>
                  Monday - Sunday <span >(7.00am-9.00pm)</span>
                </div>
              </div>
              <div className="phone">
                <img src="assets/phone.png" alt="phone" />
                <div>
                  <span>Liên Hệ</span>
                  <br />
                  (+084)0942975959
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
				
    </header>
  );
}
