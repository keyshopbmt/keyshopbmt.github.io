import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import './testimonial.css'

export default function Testimonial() {
  return (
    <MDBContainer className="py-5">
      <div className="text-h1">
        <img src="./assets/shadow_icon2.png" alt="" />
      <h1>Đánh Giá Của Khách Hàng Về Chúng Tôi</h1>

      </div>
      <MDBCarousel showControls dark>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/unnamed.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Nam Le</h5>
                 
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Tôi đã từng làm khóa ở đây. Vợ chồng tiệm khóa Có tâm với nghề, Tư vấn nhiệt tình, sửa chữa nhanh, trang bi máy móc hiện đại. Sửa vặt không lấy tiền chỉ nhận lời cảm ơn. Tuyệt.
                  </p>
                  
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Thu Hỷ</h5>
                 
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Tận tâm, nhanh gọn, thân thiện, uy tín với khách.
                  </p>
                 
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image1.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Ky Nguyen</h5>
                 
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Chuyên nghiệp , nhiệt tình , uy tín thanks shop
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image2.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">DONGNHAT DAM</h5>
                  
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Mình đã làm khóa ở đây. Rất ok nhanh gọn lẹ. Giá cả hợp lí.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                      icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image4.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Sam Võ</h5>
                 
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Dịch vụ tiệm rất tốt và chân tình! 👍👍� …
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image5.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">My Van</h5>
                  
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Sản phẩm chất lượng, nhân viên nhiệt tình…
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                         icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image6.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Thu Huong Chu Le</h5>
                  
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Sửa khoá chuẩn. Rất nhiệt tình, chu đáo 👍
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image7.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Thanh Nguyen Quang</h5>
                  
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Nhanh , uy tính, chất lượng
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>

                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="./assets/image8.png"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="mb-3">Trâm Nguyễn</h5>
                 
                  <p className="px-xl-3">
                    <MDBIcon  icon="fas fa-quote-left"  className="pe-2" />
                    Tận tâm, nhanh gọn, thân thiện, uy tín với khách.
                  </p>
                 
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        icon="fas fa-star" 
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}