import React,{Fragment, useState } from 'react'

import '@styles/ProductItem.scss'
import add from '@icons/bt_add_to_cart.svg';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export default function ProductItem() {
  const [cart, setCart] = useState('');

  const handleClick = () => {
      setCart([])
  }
  return (
    <Fragment>
        <div className="ProductItem">
            <img src={bike} alt="bike" />
            <div className="product-item">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={add} alt=""/>
                </figure>
            </div>
        </div>
    </Fragment>
  )
}
