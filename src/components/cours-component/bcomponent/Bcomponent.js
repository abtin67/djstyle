import arayeshi from "../../../assets/images/lavazemArayshi.jpg";
import mpoust from "../../../assets/images/mraghebatPost.jpg";
import lbehdashti from "../../../assets/images/lavazemBehdshti.jpg";
import barghi from "../../../assets/images/l.sh.barghi.jpg";
import odklon from "../../../assets/images/odklon.jpg";
import salamat from "../../../assets/images/abzarSalamt.jpg";
import "../bcomponent/Bcomponent.css";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { memo } from "react";

function Bcomponent() {
  return (
    <>
      <div className="imgContainer">
        <NavLink to='/beauty' className='nav-link btnLink'>
        <div className="img-full">
          <img src={arayeshi} alt='arayeshi' />
          <h5 className="caption">لوازم آرایشی</h5>
        </div>
        <div className="img-row">
          <div  className="imgThree4">
            <img src={mpoust} alt="poust" />
            <h5 className="caption">مراقبت پوست</h5>
          </div>
          <div  className="imgThree4">
            <img src={lbehdashti} alt="بهداشی"/>
            <h5 className="caption">لوازم بهداشتی</h5>
          </div>
          <div  className="imgThree4">
            <img src={barghi} alt="برقی" />
            <h5 className="caption">لوازم شخصی برقی</h5>
          </div>
          <div  className="imgThree4">
            <img src={odklon} alt="ادکلن" />
            <h5 className="caption">عطر و ادکلن</h5>
          </div>
          <div  className="imgThree4">
            <img src={salamat}  alt="سلامتی"/>
            <h5 className="caption">ابزار سلامت</h5>
          </div>
        </div>
        </NavLink>
        
      </div>
    </>
    
  );
}
export default memo(Bcomponent);
