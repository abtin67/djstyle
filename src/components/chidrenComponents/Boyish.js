import { Col, Container, Row } from "react-bootstrap";
import "./ProductsChildish.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CartCours from "../cartcours/CartCours";
import Footer from "../footer/Footer";
import Loaders from "../loders/Loders";

function Boyish() {
  const [boyish, setBoyish] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://db-serverjs.liara.run/categories')
        const categoriesData = response.data;
        const boyCategory = categoriesData.filter(
          (category) => category.category === "پسرانه"
        );
        
            setBoyish(boyCategory);
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
        <h3>محصولات پسرانه</h3>

        <Row className="py-5 d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {loading ? (
            <Loaders />
          ) : (
            boyish.map((item) => (
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
export default Boyish;
