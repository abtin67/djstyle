import imggirl from "../../../assets/images/sport.jpg";
import imgCkafsh from "../../../assets/images/ckafsh.jpg";
import imgAcsessury from "../../../assets/images/eynack.jpg";
import imgVarzeshi from "../../../assets/images/varzeshi.jpg";
import "./Fcomponent.css";
import { NavLink } from "react-router-dom";

function Fcomponent() {
  return (
    <>
      <div className="imgContainer">
        <NavLink to="/feminine" className="nav-link">
          <div className="img-full">
            <img src={imggirl} alt="لباس زنانه" />
            <h5 className="caption">لباس زنانه</h5>
          </div>
          <div className="img-row">
            <div className="imgThree1">
              <img src={imgCkafsh} alt="کفش زنانه" />
              <h5 className="caption">کفش زنانه</h5>
            </div>
            <div className="imgThree1">
              <img src={imgAcsessury} alt="اکسسوری زنانه" />
              <h5 className="caption">اکسسوری زنانه</h5>
            </div>
            <div className="imgThree1">
              <img src={imgVarzeshi} alt="ورزشی زنانه" />
              <h5 className="caption">ورزشی زنانه</h5>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
export default Fcomponent;
