import axios from "axios";
import { useEffect, useState } from "react";
import "./MensCloting.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar, Pagination } from "swiper/modules";
import Footer from "../footer/Footer";
import SwiperButtons from "../swiperButtons/SwiperButtons";
import { Col, Container, Row } from "react-bootstrap";
import CartCours from "../cartcours/CartCours";
import Loaders from "../loders/Loders";

function MensClothing() {
  const [mClothing, setMClothing] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const response = await axios.get("https://dbserverjs.liara.run/categories")
        const categoriesData = response.data;
        const maneCategory = categoriesData.find(
          (category) => category.name === "مردانه"
        );
        if (maneCategory) {
          const clothesSubCategory = maneCategory.subCategories.find(
            (subCategory) => subCategory.name === "لباس مردانه"
          );

          if (clothesSubCategory) {
            setMClothing(clothesSubCategory.products);
            setLoading(false)
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false)
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Container fluid className="container-page">
        <h3 className="title-page">نمونه ها</h3>

        <Swiper
          centeredSlides={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 10,
            },
            940: {
              slidesPerView: 8,
            },
            840: {
              slidesPerView: 7,
            },
            769: {
              slidesPerView: 6,
            },
            600: {
              slidesPerView: 5,
            },
            450: {
              slidesPerView: 4,
            },
            350: {
              slidesPerView: 3,
            },
            300: {
              slidesPerView: 3,
            },
            250: {
              slidesPerView: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="story-box"
        >
          <div className="swiperTopSection">
            <SwiperButtons />
          </div>
          <div>
            {mClothing.map((item) => (
              <SwiperSlide key={item.id} className="story-container">
                <div className="story-item">
                  <img src={item.image} alt="لباس مردانه" />
                  <span>{item.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <h4 style={{ margin: "20px 10px" }}>لباس ها</h4>
        <Row className="row-cart row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
          {loading ? ( <Loaders /> ):(
      
            mClothing.map((item) => (
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
export default MensClothing;
