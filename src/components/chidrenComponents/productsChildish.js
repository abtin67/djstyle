import { Col, Container, Row } from "react-bootstrap";
import "./ProductsChildish.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CartCours from "../cartcours/CartCours";
import Footer from "../footer/Footer";
import Loaders from "../loders/Loders";

function ProductsChildish() {
  const [baby, setBaby] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://db-serverjs.liara.run/categories')
        const categoriesData = response.data;
        const babyCategory = categoriesData.filter(
          (category) => category.category === "نوزاد"
        );
            setBaby(babyCategory);
            setLoading(false);
         
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Container fluid className="container-baby">
        <h3>محصولات نوزادی</h3>
        <Row className="py-5 d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {loading ? (
            <Loaders />
          ) : (
            baby.map((item) => (
              <Col className="col-box" key={item.id}>
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
export default ProductsChildish;
