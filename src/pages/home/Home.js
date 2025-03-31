import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Cart from "../../components/cart/Cart";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Footer from '../../components/footer/Footer'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dbObj = localStorage.getItem("db");
    setProducts(JSON.parse(dbObj));
  },[]);
  return (
    <>
      <Container fluid>
        <Row>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {products &&
              products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Col>
                    <Cart {...product} />
                  </Col>
                </SwiperSlide>
              ))}
          </Swiper>
        </Row>

        <div className="container-cart">
          <div className="container-text">
            <NavLink to="fcomponent" className="nav-link">
              زنانه
            </NavLink>
            <NavLink to="mcomponent" className="nav-link">
              مردانه
            </NavLink>
            <NavLink to="chcomponent" className="nav-link">
              بچگانه
            </NavLink>
            <NavLink to="bcomponent" className="nav-link">
              زیبایی و سلامت
            </NavLink>
          </div>
        </div>

        <Outlet />
        <Footer />
      </Container>
      
    </>
  );
};

export default Home;
