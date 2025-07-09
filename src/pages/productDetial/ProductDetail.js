import axios from "axios";
import {  useEffect, useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
import Swal from "sweetalert2";
import { useCart } from "../../components/context/CartContext";
import Loaders from "../../components/loders/Loders";


function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`https://db-serverjs.liara.run/categories/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) return <Loaders />;
  if (!product) return <div>محصول یافت نشد!</div>;

  return (
    <Container fluid className="mt-5  d-flex justify-content-center">
    <Row className="product-detail p-5  d-flex justify-content-center row-cols-1  row-cols-md-2">
      <Col className="product-image-container">
      <img src={product.image} alt={product.name} width="50%" />
      
      </Col>
      <Col className="detial-desc">
      <h1 className="product-titel">{product.name}</h1>
      <span className="desc">دسته‌بندی: {product.category}</span>
      <br />
      <span className="desc">توضیحات: {product.description}</span>
      <br />
      <span className="desc">قیمت: {product.price.toLocaleString('fa-IR')} تومان</span>
      <br />
      <button onClick={() => {
  addToCart(product);
  Swal.fire({
    text: `${product.name} به سبد خرید اضافه شد`,
    timer:2500,
    showConfirmButton:false,
    timerProgressBar:true
  });
}}>
  خرید
</button>
      </Col>
    </Row>
    </Container>
  );
}
export default ProductDetail;

