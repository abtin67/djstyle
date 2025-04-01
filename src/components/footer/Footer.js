import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FiInstagram } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { NavLink, Route, Routes } from "react-router-dom";
import Feminine from "../../pages/feminine/Feminine";

function Footer() {
  <Routes>
    <Route path="feminine" element={<Feminine />} />
  </Routes>;
  return (
    <>
      <footer className="py-3 mt-5">
        <h3 className="footerTitle">فروشگاه آنلاین</h3>
        <Container>
          <Row className="row-cols-2 row-cols-md-3 row-cols-xl-4 m-y-3">
            <Col className="p-y-3">
              <h4>خرید</h4>
              <NavLink to="/feminine" className="nav-link">
                <h6>زنانه</h6>
              </NavLink>
              <NavLink to="/masculine" className="nav-link">
                <h6>مردانه</h6>
              </NavLink>
              <NavLink to="/childish" className="nav-link">
                <h6>بچگانه</h6>
              </NavLink>

              <NavLink to="/beauty" className="nav-link">
                <h6>زیبایی و سلامت</h6>
              </NavLink>
             
            </Col>
            <Col>
              <h4>خدمات مشتریان</h4>
              <h6>پاسخ به پرسش های متداول</h6>
              <h6>رویه های بازگرداندن کالا</h6>
              <h6>شرایط استفاده</h6>
              <h6>حریم خصوصی</h6>
            </Col>
            <Col>
              <h4>اطلاعات فروشگاه</h4>
              <h6>درباره فروشگاه</h6>
              <h6>تماس با فروشگاه</h6>
              <h6>همکاری با فروشگاه</h6>
            </Col>
            <Col>
              <h6>
              <span>شماره پشتیبانی :</span>
              <NavLink dir="ltr" rel="noopener norefrrer" to="tel:+98 9038308519" target="_blank"><span>09038308519</span></NavLink>
              </h6>
              <div className="media">
                <NavLink rel="noopener norefrrer" target="_blank" className='nav-link' to="https://www.instagram.com/frydoun67">
                  <FiInstagram size="25px" />
                </NavLink>
                <NavLink rel="noopener norefrrer" target="_blank" to='https://t.me/@Abtin111' className='nav-link'>
                  <LiaTelegramPlane size="25px" />
                </NavLink>
                <NavLink rel="noopener norefrrer" target="_blank" className='nav-link' to='https://twitter.com'>
                  <FiTwitter size="25px" />
                </NavLink>
              </div>
            </Col>
           
          </Row>
          <span className="py-4">کلیه حقوق این سایت متعلق به <b>فریدون عاقبتی </b>می باشد</span>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
