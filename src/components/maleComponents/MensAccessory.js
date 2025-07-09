import { useEffect, useState } from "react";
import "./MensCloting.css";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CartCours from "../cartcours/CartCours";
import Footer from "../footer/Footer";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";
import SwiperButtons from "../swiperButtons/SwiperButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import Loaders from "../loders/Loders";
import { NavLink } from "react-router-dom";

function MensAccessory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://db-serverjs.liara.run/categories");
        const categoriesData = await res.data;

        if (categoriesData) {
          const accessoryCategory = categoriesData.filter(
            (item) => item.category === "اکسسوری مردانه"
          );
          setProducts(accessoryCategory);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setProducts();
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Container fluid className="container-page">
        <h3 className="title-page">اکسسوری مردانه</h3>
        <div style={{ widows: "100px" }}>
          <img
            src={products.image}
            style={{ width: "100px" }}
            alt={products.name}
          />
          <span>{products.name}</span>
        </div>
        {/* اسلایدر محصولات */}
        {products.length > 0 && (
          <Swiper
            centeredSlides={false}
            grabCursor={true}
            keyboard={{ enabled: true }}
            breakpoints={{
              1200: { slidesPerView: 10 },
              940: { slidesPerView: 8 },
              840: { slidesPerView: 7 },
              769: { slidesPerView: 6 },
              600: { slidesPerView: 5 },
              450: { slidesPerView: 4 },
              350: { slidesPerView: 3 },
              300: { slidesPerView: 3 },
              250: { slidesPerView: 2 },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="story-box"
          >
            <div className="swiperTopSection">
              <SwiperButtons />
            </div>
            <div>
              {products.map((item) => (
                <SwiperSlide key={item.id} className="story-container">
                  <div className="story-item">
                    <NavLink to={`/products/${item.id}`}>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </NavLink>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )}

        <h4 style={{ margin: "20px 10px" }}>محصولات اکسسوری مردانه</h4>

        {/* لیست محصولات */}
        <Row className="row-cart row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
          {loading ? (
            <Loaders />
          ) : (
            products.map((item) => (
              <Col className="col-item" key={item.id}>
                <CartCours {...item} />
              </Col>
            ))
          )}
        </Row>

        <Footer />
      </Container>
    </>
  );
}
export default MensAccessory;
