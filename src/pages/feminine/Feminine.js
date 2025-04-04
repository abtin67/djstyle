import { Col, Container, Row } from "react-bootstrap";
import saate from "../../assets/images/saat-header.jpg";
import "./Feminine.css";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CartCours from "../../components/cartcours/CartCours";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperButtons from "../../components/swiperButtons/SwiperButtons";
import axios from "axios";
import Loaders from "../../components/loders/Loders";

function Feminine() {
  const [tshirts, setTshirts] = useState([]);
  const [womensShoe, setWomensShoe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dbserverjs.liara.run/categories")
      .then((response) => {
        const categoriesData = response.data;

        if (categoriesData && Array.isArray(categoriesData)) {
          const womenCategory = categoriesData.find(
            (category) => category.name === "زنانه"
          ) || { subCategories: [] }; // مقدار پیش‌فرض

          if (womenCategory.subCategories) {
            const tshirtSubCategory = womenCategory.subCategories.find(
              (subCategory) => subCategory.name === "تشرت زنانه"
            ) || { products: [] }; // مقدار پیش‌فرض

            const bagsAndShoesSubCategory = womenCategory.subCategories.find(
              (subCategory) => subCategory.name === "کیف و کفش زنانه"
            ) || { products: [] }; // مقدار پیش‌فرض

            setTshirts(tshirtSubCategory.products);
            setWomensShoe(bagsAndShoesSubCategory.products);
          }
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loaders />;
  }

  if (!tshirts.length && !womensShoe.length) {
    return <div>هیچ محصولی یافت نشد.</div>;
  }

  return (
    <>
      <Container fluid>
        <div className="imgCantainer">
          <img style={{ width: "100%",marginBottom:"20px" }} src={saate} alt={saate} />
        </div>
        <Row className="row-swiper">
          <div className="containerswiper">
            <div className="textFixed">
              <h3>تیشرت ها</h3>
            </div>
            <Swiper
              spaceBetween={10}
              slidesPerView={"auto"}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  centeredSlides: true,
                },
                992: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
                767: {
                  slidesPerView: 2,
                  centeredSlides: false,
                  spaceBetween: 15,
                },
                480: {
                  slidesPerView: 1,
                  centeredSlides: false,
                  spaceBetween: 10,
                },
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="swiperTopSection">
                <SwiperButtons />
              </div>
              {tshirts &&
                tshirts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Col className="d-flex justify-content-center">
                      <CartCours {...product} />
                    </Col>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </Row>
        <div style={{ textAlign: "center", width: "100%", padding: "20px 0" }}>
          <h3>سایر محصولات زنانه</h3>
        </div>

        <Row className=" row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          {loading ? (
            <Loaders />
          ) : (
            womensShoe.map((item) => (
              <Col className="mb-4 d-flex justify-content-center" key={item.id}>
                <CartCours {...item} />
              </Col>
            ))
          )}
        </Row>
        <>
          <Footer />
        </>
      </Container>
    </>
  );
}
export default Feminine;
