import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Cart from "../../components/cart/Cart";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";


const Home = () => {
  const [products, setProducts] = useState([]);

 
 

  useEffect(() => {
    const dbObj = localStorage.getItem("db");
    setProducts(JSON.parse(dbObj));
  }, []);

 

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
            <NavLink
              to="fcomponent"
              className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              زنانه
            </NavLink>

            <NavLink
              to="mcomponent"
              className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              مردانه
            </NavLink>

            <NavLink
              to="chcomponent"
              className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              بچگانه
            </NavLink>

            <NavLink
              to="bcomponent"
              className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              }
            >
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
