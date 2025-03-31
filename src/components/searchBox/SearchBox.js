import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import CartCours from "../cartcours/CartCours";
import { memo } from "react";

import Footer from "../footer/Footer";
import "./SearchBox.css";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/public/db.json/categories");
        const allProducts = response.data.flatMap((category) =>
          category.subCategories.flatMap((subCategory) =>
            subCategory.products.map((product) => ({
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              image: product.image,
              category: category.name,
              subCategory: subCategory.name,
            }))
          )
        );
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterProducts(term, minPrice, maxPrice);
  };

  const handleMinPriceChange = (event) => {
    const price = event.target.value;
    setMinPrice(price);
    filterProducts(searchTerm, price, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    const price = event.target.value;
    setMaxPrice(price);
    filterProducts(searchTerm, minPrice, price);
  };

  const filterProducts = (term, minPrice, maxPrice) => {
    const filtered = products.filter((product) => {
      const name = product.name.toLowerCase();
      const category = product.category.toLowerCase();
      const subCategory = product.subCategory.toLowerCase();
      const price = product.price;
      const meetsPriceCriteria =
        (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
      return (
        (name.includes(term) ||
          category.includes(term) ||
          subCategory.includes(term)) &&
        meetsPriceCriteria
      );
    });
    setFilteredProducts(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <Container fluid className="search-box">
      <form className="search-container" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="جستجو در تمام محصولات..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="price-input-container">
          <Form.Control
            type="number"
            placeholder="حداقل قیمت"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="price-input"
          />
          <Form.Control
            type="number"
            placeholder="حداکثر قیمت"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="price-input"
          />
        </div>
      </form>
      <Row className="py-5 product-list row-cols-1 row-cols-sm-2 row-cols-md-3">
        {filteredProducts.length > 0 && searchTerm ? (
          filteredProducts.map((product) => (
            <Col
              key={product.id}
              className=" d-flex justify-content-center product-item"
            >
              <CartCours {...product} />
            </Col>
          ))
        ) : (
          <span>محصولی یافت نشد.</span>
        )}
      </Row>
      <Footer />
    </Container>
  );
};

export default memo(SearchBox);
