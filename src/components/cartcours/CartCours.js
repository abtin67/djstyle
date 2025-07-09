import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartCours.css";
import Swal from "sweetalert2";


function CartCours(props) {

  const formattedPrice = props.price.toLocaleString('fa-IR');

    const { addToCart } = useCart();
  return (
    <>
      <div className="containerCartCours">
        <NavLink to={`/products/${props.id}`} className='nav-link'>
        
        <img src={props.image} alt={props.name} />
        <div className="containerTextCart">
          <h3>{props.name}</h3>
         
          <br />
          <span
            className="description"
          >
            قیمت : {formattedPrice} تومان
          </span>
        </div>
        </NavLink>
        <button className="buyButton" onClick={() => {
          addToCart(props);
           Swal.fire({
              text: `${props.name} به سبد خرید اضافه شد`,
              timer:2500,
              showConfirmButton: false,
              timerProgressBar: true
            });
        }}>خرید آسان</button>
      </div>
    </>
  );
}
export default CartCours;
