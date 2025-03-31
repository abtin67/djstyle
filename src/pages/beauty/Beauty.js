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
  const [beauty, setBeauty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dbserverjs.liara.run/categories");
        const categoriesData = response.data;
  
        if (categoriesData && Array.isArray(categoriesData)) {
          const beautyCategories = categoriesData.find(
            (category) => category.name === "زیبایی و سلامت"
          );
  
          if (beautyCategories && Array.isArray(beautyCategories.subCategories)) {
            const beautySubCategory = beautyCategories.subCategories.find(
              (subCategory) => subCategory.name === "تمام محصولات"
            );
  
            if (beautySubCategory && Array.isArray(beautySubCategory.products)) {
              setBeauty(beautySubCategory.products);
            } else {
              console.warn("No products found in the subcategory.");
            }
          } else {
            console.warn("No subcategories found in the beauty category.");
          }
        } else {
          console.warn("No categories data found.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = beauty.slice(offset, offset + itemsPerPage);

  return (
    <>
      <Container fluid>
        <div className="container-baner">
          <img src={beautyBaner} alt="بنر زیبایی و سلامت" />
        </div>
        <div className="title-page">
          
            <span>انتخاب از بین تمام محصولات زیبایی و سلامت</span>
            <MdOutlineKeyboardArrowDown size="40px" />
         
        </div>
        <Row className="py-5 d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {loading ? (
            <Loaders />
          ) : (
            currentItems.map((item) => (
              <Col key={item.id} className="col-items">
                <CartCours {...item} />
              </Col>
            ))
          )}
        </Row>
        {!loading && (
          <ReactPaginate
            previousLabel={"قبلی"}
            nextLabel={"بعدی"}
            pageCount={Math.ceil(beauty.length / itemsPerPage)}
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
          />
        )}

        <Footer />
      </Container>
    </>
  );
}

export default memo(Beauty);
