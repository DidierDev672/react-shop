import React, { Fragment } from "react";

import '@styles/ShoppingCartItem.scss'

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export default function ShoppingCartItem() {
  return (
    <Fragment>
      <div className="ShoppingCartItem">
        <figure>
          <img
            src={bike}
            alt="bike"
          />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
      </div>
    </Fragment>
  );
}
