import { Col, Container, Row } from "react-bootstrap";
import "./Masculine.css";
import headerMane from "../../assets/images/headerMans.jpg";
import { NavLink, useLocation } from "react-router-dom";
import lebaseMardane from "../../assets/images/lebaceMardane";
import kafshe from "../../assets/images/kafshe-mardane.jpg";
import acsessory from "../../assets/images/acsesory-mardane.jpg";
import varzeshi from "../../assets/images/varzeshi-mardane.jpg";
import Footer from "../../components/footer/Footer";


function Masculine() {

 
  return (
    <>
      <Container fluid>
        <div className="baner-container">
          <img src={headerMane} alt="بنر مردانه" />
        </div>
        <div className="title-container">
          <span className="title-masculin">دسته بندی ها</span>
        </div>
        <Row className="py-5 d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
          <NavLink to="/mCloding" className="nav-link">
            <Col className="box-mane">
              <img src={lebaseMardane} alt="لباس مردانه" />
              <span>لباس مردانه</span>
            </Col>
          </NavLink>

          <NavLink to="/mAccessory" className="nav-link">
            <Col className="box-mane">
              <img src={acsessory} alt="اکسسوری مردانه" />
              <span>اکسسوری مردانه</span>
            </Col>
          </NavLink>

          <NavLink to="/mShoes" className="nav-link">
            <Col className="box-mane">
              <img src={kafshe} alt="کفش مردانه" />
              <span>کفش مردانه</span>
            </Col>
          </NavLink>

          <NavLink to="/mSport" className="nav-link">
            <Col className="box-mane">
              <img src={varzeshi} alt="ورزشی مردانه" />
              <span>ورزشی مردانه</span>
            </Col>
          </NavLink>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
export default Masculine;
