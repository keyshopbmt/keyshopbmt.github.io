import React from 'react';
import './replacemotokey.css';
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { keyShop } from '../Db';


export default function Replacemotokey() {
  return (
    <div className='replacemotokey'>
        <h2><b>Chúng tôi có thể thay thế những loại chìa khóa xe máy nào?</b></h2>
       <p>Chúng tôi tin rằng một kĩ thuật viên chuyên về làm chìa khóa xe máy thực sự nên biết cách làm được bất kỳ chìa khóa xe máy nào. Và chúng tôi cố gắng không ngừng nghiên cứu để theo kịp sự thay đổi thị trường và tìm hiểu những cách mới để tạo chìa khóa xe máy. Chúng tôi cố gắng làm được bất kì chìa khóa xe máy.</p>
       <p>Chúng tôi có thể làm chìa khóa xe máy mới hoặc sao chép từ chìa khóa cũ của các hãng xe máy sau:</p>
       <MDBRow>
          <MDBCol md="6">
           <ul className='replacemoto'>
            <li>Honda</li>
            <li>Yamaha</li>
            <li>Piaggio</li>
            <li>BMW</li>
           </ul>
          </MDBCol>
          <MDBCol md="6">
           <ul className='replacemoto'>
            <li>SYM</li>
            <li>Suzuki</li>
            <li>Vinfast</li>
            <li>Kawasaki</li>
           </ul>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="3">
            <img src="../assets/services/moto/1200px-Honda_Logo.png" alt="" className='img-logo' />
          </MDBCol>
          <MDBCol md="3">
            <img src="../assets/services/moto/Yamaha-Logo.png" alt="" className='img-logo' />
          </MDBCol>
          <MDBCol md="3">
            <img src="../assets/services/moto/Piaggio-Motorcycle-Logo.png" alt="" className='img-logo' />
          </MDBCol>
          <MDBCol md="3">
          <img src="../assets/services/moto/VinFast_2017.png" alt="" className='img-logo' />
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="3">
          <img src="../assets/services/moto/pngegg.png" alt="" className='img-logo' />
          </MDBCol>
          <MDBCol md="3">
          <img src="../assets/services/moto/2560px-Suzuki_logo_2.png" alt="" className='img-logo' />
          </MDBCol>
          <MDBCol md="3">
          <img src="../assets/services/moto/Kawasaki-Logo.png" alt="" className='img-logo' />
          </MDBCol>
          <MDBCol md="3">
            <p>Nếu thương hiệu xe máy của bạn không có trong danh sách, đừng lo lắng!</p>
            <p>Chúng tôi  có thể giúp bạn, hãy liên hệ với chúng tôi để biết thêm thông tin: <span><b>{keyShop.phone}</b></span>.</p>
          </MDBCol>

          </MDBRow>
    </div>
  )
}
