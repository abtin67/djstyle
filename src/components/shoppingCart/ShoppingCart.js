import { useCart } from "../context/CartContext";
import "./ShoppingCart.css";
import CheckoutForm from "../checkoutForm/checkoutForm";
import { useState } from "react";
import { Fragment } from "react";

function ShoppingCart() {
  const [showCheckout, setShowCheckout] = useState(false);
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice.toLocaleString('fa-IR');
  };

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };
  const handleCloseForm = () => {
    setShowCheckout(false);
  };

  return (
    <div className="cartContainer">
      <h2>سبد خرید</h2>
      {cartItems.length === 0 ? (
        <h2>سبد خرید شما خالی است</h2>
      ) : (
        <Fragment>
          <ul>
            {cartItems.map((item, index) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                  <div className="cart-item-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="quantity-num">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">جمع کل : {getTotalPrice()} تومان</div>
          <button className="checkout-button" onClick={handleCheckoutClick}>
            تکمیل سفارش
          </button>
          {showCheckout && <CheckoutForm onClose={handleCloseForm} />}
        </Fragment>
      )}
    </div>
  );
}

export default ShoppingCart;
