import { useCart } from "../context/CartContext";
import "./CartCours.css";


function CartCours(props) {

  const formattedPrice = props.price.toLocaleString('fa-IR');

    const { addToCart } = useCart();
  return (
    <>
      <div className="containerCartCours">
        <img src={props.image} alt={props.name} />
        <div className="containerTextCart">
          <h6>{props.name}</h6>
          <span className="description">{props.description}</span>
          <br />
          <span
            className="description"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            قیمت : {formattedPrice} تومان
          </span>
        </div>
        <button className="buyButton" onClick={() => addToCart(props)}>خرید آسان</button>
      </div>
    </>
  );
}
export default CartCours;
