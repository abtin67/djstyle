import nozade from "../../../assets/images/nozad.jpg";
import docktarane from "../../../assets/images/docktrane.jpg";
import pesarane from "../../../assets/images/pesarane.jpg";
import "../chcomponent/Chcomponent.css";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Chcomponent() {
  return (
    <>
      <div className="imgContainer">
        <NavLink to='/childish' className='nav-link btnLink'>
        <div className="img-full">
          <img src={nozade} alt='نوزادی' />
          <h5 className="caption">نوزاد</h5>
        </div>
        <div className="img-row">
          <div className="imgThree">
            <img src={docktarane}  alt='دخترانه' />
            <h5 className="caption">دخترانه</h5>
          </div>
          <div  className="imgThree">
            <img  src={pesarane} alt='پسرانه' />
            <h5 className="caption">پسرانه</h5>
          </div>
        </div>
        </NavLink>
       
      </div>
    </>
  );
}
export default Chcomponent;
