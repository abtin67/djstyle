import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
// import { useCart } from '../context/CartContext';
 import './CartIcon.css';
 import { useNavigate } from 'react-router-dom';
 import { BiShoppingBag } from 'react-icons/bi';
import LoginModal from '../loginModal/LoginModal';

// const CartIcon = () => {
//   const { cartItems } = useCart();
//   const [showCartIcon, setShowCartIcon] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowCartIcon(true);
//       } else {
//         setShowCartIcon(false);
//         setShowModal(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const getCartItemCount = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   if (cartItems.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       {showCartIcon && (
//         <div
//           className="cart-icon"
//           onMouseEnter={() => setShowModal(true)}
//           onMouseLeave={() => setShowModal(false)}
//           onClick={() => navigate('/shopping')}
//         >
//           <BiShoppingBag size='30px' />
//           {getCartItemCount() > 0 && <span className="cart-count">{getCartItemCount()}</span>}
//           {showModal && (
//             <div className="cart-modal">
//               <h4>سبد خرید</h4>
//               <ul>
//                 {cartItems.map(item => (
//                   <li key={item.id} className="cart-item">
//                     <img src={item.image} alt={item.name} className="cart-item-image" />
//                     <span>{item.name} - {item.quantity}x</span>
//                   </li>
//                 ))}
//               </ul>
//               <button 
//                 className="pay-button"
//                 onClick={() => navigate('/checkout')}
//               >
//                 پرداخت
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default CartIcon;

const CartIcon = () => {
  const { cartItems } = useCart();
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowCartIcon(true);
      } else {
        setShowCartIcon(false);
        setShowModal(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleCartClick = () => {
    if (!userInfo.username && !userInfo.phone) {
      setShowLoginModal(true);
    } else {
      navigate('/shopping');
    }
  };

  const handleLogin = (userData) => {
    setUserInfo(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setShowLoginModal(false); // بستن مودال پس از ورود
    navigate('/shopping'); // هدایت به صفحه سبد خرید پس از ورود
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <>
      {showCartIcon && (
        <div
          className="cart-icon"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
          onClick={handleCartClick}
        >
          <BiShoppingBag size='30px' />
          {getCartItemCount() > 0 && <span className="cart-count">{getCartItemCount()}</span>}
          {showModal && (
            <div className="cart-modal">
              <h4>سبد خرید</h4>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <span>{item.name} - {item.quantity}x</span>
                  </li>
                ))}
              </ul>
              <button 
                className="pay-button"
                onClick={() => navigate('/checkout')}
              >
                پرداخت
              </button>
            </div>
          )}
        </div>
      )}
      <LoginModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default CartIcon;

