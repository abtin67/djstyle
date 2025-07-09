import React, { useState, useEffect, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Modal,
  Button,
} from "react-bootstrap";
import { useCart } from "../context/CartContext";
import "./MyNavbar.css";
import LoginModal from "../loginModal/LoginModal";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb";


const MyNavbar = ({ showNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const [userInfo, setUserInfo] = useState({
    username: "",
    phone: "",
    address: "",
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
    setUserInfo({
      username: storedUserInfo.username || "",
      phone: storedUserInfo.phone || "",
      address: storedUserInfo.address || "",
    });
  }, []);

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const redirectToCart = () => {
    window.location.href = "/shopping";
  };

  const handleCartClick = () => {
    if (!userInfo.username && !userInfo.phone) {
      setShowLoginModal(true);
    } else {
      redirectToCart();
    }
  };

  const handleLogin = (userData) => {
    setUserInfo(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setShowLoginModal(false); // بستن مودال پس از ورود
    redirectToCart(); // هدایت به صفحه سبد خرید پس از ورود
  };

  const handelLogout = () => {
    setShowLogoutModal(true);
  };
  const confirmLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo({
      username: "",
      phone: "",
      address: "",
    });
    setShowLogoutModal(false);
  };

  const handleCloseMenu = ()=>{
    setIsMenuOpen(false)
  }

  return (
    <>
      {showNavbar && (
        <>
          <header className="top-header">
            <form>
              <div className="d-flex" style={{ marginRight: "5px" }}>
                <button
                  className="btn-icon"
                  type="button"
                  onClick={handleCartClick}
                >
                  <CgShoppingCart size="35px" />
                  {getCartItemCount() > 0 && (
                    <span className="cart-count">{getCartItemCount()}</span>
                  )}
                  <RiArrowDropDownLine size="35px" />
                  <FaRegUser size="20px" />
                  {userInfo.username || userInfo.phone ? (
                    <span className="px-2">
                      {userInfo.username
                        ? `${userInfo.username} عزیز سلام`
                        : `${userInfo.phone} عزیز سلام`}
                    </span>
                  ) : null}
                </button>
              </div>
              <div className="store-name lalezar" style={{ borderBottom: "1px solid" }}>
                <h1>فروشگاه من</h1>
              </div>
              <div className="searchContainer d-flex lalezar">
                <GoSearch size="30px" />
                <NavLink to="/searchBox" className="nav-link px-5">
                  جستجو...
                </NavLink>
              </div>
            </form>
          </header>

          <Navbar  expand='md' expanded={isMenuOpen} className="mb-3 " onToggle={(isOpen)=> setIsMenuOpen(isOpen)}>
            <Container fluid className="mt-3">
              <NavLink to="/" className="nav-link ">
                <h4 className="lalezar">فروشگاه آنلاین</h4>
                <BreadcrumbComponent/>
              </NavLink>
               
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-md`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="start"
                show={isMenuOpen}
                onHide={() => setIsMenuOpen(false)}
              >
                <Offcanvas.Header closeButton>
                  <NavLink to="/" className="nav-link lalezar">
                    <Offcanvas.Title
                    
                      id={`offcanvasNavbarLabel-expand-md`}
                    >
                      فروشگاه 
                    </Offcanvas.Title>
                  </NavLink>
                </Offcanvas.Header>
                <div className="searchContainer mt-5 d-flex d-md-none">
                  <GoSearch size="30px" />
                  <NavLink to="/searchBox" className="nav-link px-5">
                    جستجو...
                  </NavLink>
                </div>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink to="/contact" className="nav-link" onClick={handleCloseMenu}>
                      تماس با ما
                    </NavLink>
                    <NavLink to="/about" className="nav-link" onClick={handleCloseMenu}>
                      درباره ما
                    </NavLink>
                    {userInfo.username || userInfo.phone ? (
                      <Nav.Link onClick={()=>{
                        handelLogout();
                        handleCloseMenu();
                      }
                      }
                      >خروج</Nav.Link>
                    ) : (
                      <Nav.Link as={NavLink} to="/loginPage" onClick={handleCloseMenu}>
                        ورود
                      </Nav.Link>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
             
            </Container>
          </Navbar>
          <LoginModal
            show={showLoginModal}
            onHide={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
          <Modal
            show={showLogoutModal}
            onHide={() => setShowLogoutModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>خروج از حساب کاربری</Modal.Title>
            </Modal.Header>
            <Modal.Body>آیا مطمئن هستید که می‌خواهید خارج شوید؟</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowLogoutModal(false)}
              >
                لغو
              </Button>
              <Button variant="primary" onClick={confirmLogout}>
                بله، خارج شو
              </Button>
            </Modal.Footer>
          </Modal>
           
        </>
      )}
    </>
  );
};

export default memo(MyNavbar);
