import { Col, Container, Row } from "react-bootstrap";
import childishBaner from "../../assets/images/childesh-baner.jpg";
import Footer from "../../components/footer/Footer";
import childrenbaner from "../../assets/images/ch.jpg";
import girlsBaner from "../../assets/images/girlsBaner.jpg";
import boyBaners from "../../assets/images/boyBaner.jpg";
import "./Childish.css";
import { NavLink } from "react-router-dom";

function Childish() {
  return (
    <>
      <Container fluid>
        <div className="baner-container">
        <img src={childishBaner} alt="بنر بچگانه" />
        </div>

        <div className="title-page">
          <span>دسته بندی</span>
        </div>

        <Row className="d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 px-4">
          <NavLink to="/productChildish" className="nav-link">
            <Col className="col-baner">
              <img src={childrenbaner} alt="بچگانه" />
              <span>نوزاد</span>
            </Col>
          </NavLink>

          <NavLink to="/productGirlish" className="nav-link">
            <Col className="col-baner">
              <img src={girlsBaner} alt="دخترانه" />
              <span>دخترانه</span>
            </Col>
          </NavLink>

          <NavLink to='/boyish' className='nav-link'>
            <Col className="col-baner">
              <img src={boyBaners} alt="پسرانه" />
              <span>پسرانه</span>
            </Col>
          </NavLink>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
export default Childish;
