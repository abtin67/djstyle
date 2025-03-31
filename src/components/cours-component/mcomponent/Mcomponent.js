import lebas from '../../../assets/images/lebasMardane.jpg';
import kafshMardane from '../../../assets/images/kafshmardane.jpg';
import acssuryMardane from '../../../assets/images/acssorymardane.jpg';
import varzeshMardane from '../../../assets/images/varzeshimardane.jpg';
import '../fcomponent/Fcomponent.css';
import { NavLink } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

function Mcomponent(){
    return(
        <>
      <div className="imgContainer">
        <div className="img-full">
          <img  src={lebas} alt='لباس مردانه' />
          <h5 className="caption">لباس مردانه</h5>
        </div>
        <div className="img-row">
          <div className="imgThree">
            <img src={acssuryMardane} alt='اکسسوری مردانه' />
            <h5 className="caption">اکسسوری مردانه</h5>
          </div>
          <div className="imgThree">
            <img src={kafshMardane} alt='کفش مردانه' />
            <h5 className="caption">کفش مردانه</h5>
          </div>
          <div className="imgThree">
            <img src={varzeshMardane} alt='ورزشی مردانه' />
            <h5 className="caption">ورزشی مردانه</h5>
          </div>
        </div>
        <span className="arrow">
          <NavLink to="/masculine" className='nav-link btnLink'><FiArrowLeft size='40px' /></NavLink>
        </span>
      </div>
    </>
    )
}
export default Mcomponent;