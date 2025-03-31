

import { memo } from 'react';
import './Cart.css';
import 'swiper/css'

function cart({image}) {
  return (
    <>
      <div className='container-cart'>
        <img src={image} alt="عکس محصولات" />
      </div>
    </>
  );
}

export default memo(cart);