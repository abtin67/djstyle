import { useEffect, useState,memo } from "react";
import "./Beauty.css";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import beautyBaner from "../../assets/images/beautyBaner2.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Loaders from "../../components/loders/Loders";
import CartCours from "../../components/cartcours/CartCours";
import ReactPaginate from "react-paginate";
import Footer from '../../components/footer/Footer'


function Beauty() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://db-serverjs.liara.run/categories");
        const categoriesData = response.data;
        
        if (categoriesData) {
          const beautyCategory = categoriesData.filter(
            (category) => category.category === "زیبایی و سلامت"
          );
          
              setProducts(beautyCategory);
            
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <Container fluid>
        <div className="container-baner">
          <img src={beautyBaner} alt="بنر زیبایی و سلامت" className="img-fluid" />
        </div>
        <div className="title-page">
          <span>انتخاب از بین تمام محصولات زیبایی و سلامت</span>
          <MdOutlineKeyboardArrowDown size="40px" />
        </div>
        
        <Row className="py-5 d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {loading ? (
            <Loaders />
          ) : products.length > 0 ? (
            currentItems.map((item) => (
              <Col key={item.id} className="col-items">
                <CartCours {...item} />
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <p>محصولی یافت نشد</p>
            </Col>
          )}
        </Row>

        {!loading && pageCount > 1 && (
          <ReactPaginate
            previousLabel={"قبلی"}
            nextLabel={"بعدی"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            forcePage={currentPage}
          />
        )}

        <Footer />
      </Container>
    </>
  );
}

export default memo(Beauty);